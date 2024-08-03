






const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");
const friendsModel= require("./models/friends")
const bodyparser = require("body-parser");
const lyricsfinder = require("lyrics-finder");
const SpotifyWebApi = require("spotify-web-api-node");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
// const { default: Login } = require("../login/src/Login");
const secretKey1 = crypto.randomBytes(64).toString('hex');
const secretKey2 = crypto.randomBytes(64).toString('hex');
// const Login = require('../login/src/Login.js');





const app = express();
app.use(cookieParser());
const secretKey = secretKey1;
const secretKey3 = secretKey2
// console.log(secretKey);

app.use(express.json());
app.use(cors({
  origin : ["http://localhost:5173"],
  credentials:true
  
}

));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/users");





app.post('/info', async (req, res) => {
  const { name,user, pass } = req.body;
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(pass, salt);

    // Save the user with the hashed password
    const newUser = new userModel({ name,user, pass: hashedPassword });
    await newUser.save();
    const friends = new friendsModel({user});
    await friends.save()

    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



// Login route
app.post("/login", async (req, res) => {
  const { user, pass } = req.body;
  const existingUser = await userModel.findOne({ user });
  if (existingUser && await bcrypt.compare(pass, existingUser.pass)) {
    const token = jwt.sign({ user }, secretKey, { expiresIn: '1m' });
    const reftoken = jwt.sign({ user }, secretKey3, { expiresIn: '2m' });
    res.cookie("accesstoken",token,{maxAge:60000})
    res.cookie("refreshtoken",reftoken,{maxAge:120000,httpOnly:true,secure:true,sameSite:"strict"})

    // const Login = require('../login/src/Login.js');



    console.log(token)
    console.log(reftoken)
    console.log(req.cookies.accesstoken)


    // res.json({token})

    return res.json({login:true})

    

    
   
  
    // res.status(201).json({ message: 'User registered' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});




const verifyuser = (req,res,next)=>{
  const access_token = req.cookies.accesstoken
  if(!access_token){
    if(renewtoken(req,res)){
      next()

    }

  }
  else{
    jwt.verify(access_token,secretKey,(err,decoded)=>{
      if(err){
        return res.json({valid:true,message:"Invalid token"})
      }else{
        req.user = decoded.user;
        next()

      }
    })
  }
}
const renewtoken = (req,res,next)=>{
  const refresh_token = req.cookies.refreshtoken
  let exist = false
  if(!refresh_token){
    return res.json({valid:false,message:"No Refresh token"})

  }
  else{
    jwt.verify(refresh_token,secretKey3,(err,decoded)=>{
      if(err){
        return res.json({valid:true,message:"Invalid token"})
      }else{
        const token = jwt.sign({ user:decoded.user }, secretKey, { expiresIn: '1m' });
        res.cookie("accesstoken",token,{maxAge:60000})
        exist = true;


      }
    })
  }
  return exist;
}




app.get('/dashboard',verifyuser,(req,res)=>{
  return res.json({valid:true,message:"authorised"})
})
























// const authenticateJWT = (req, res, next) => {
//   const token = req.cookies.token;
//   console.log(token)

//   if (token) {
//     jwt.verify(token, SECRET_KEY, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };












// app.get('/protected', authenticateJWT, (req, res) => {
//   res.json({ message: `Welcome ${req.user}` });

// });

// app.post("/info", (req, res) => {
//   userModel
//     .create(req.body)
//     .then((userinfo) => res.json(userinfo))
//     .catch((err) => res.json(err));
// });

// app.post("/home", authenticateJWT, (req, res) => {
//   userModel
//     .create(req.body)
//     .then((home) => res.json(home))
//     .catch((err) => res.json(err));
// });

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173/search",
    clientId: "b9e7f4a1fe48400790a362c6de406e4a",
    clientSecret: "9b5b9d5c8edd41e7adb74f0ce3066b2e",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/loginto", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173/search",
    clientId: "b9e7f4a1fe48400790a362c6de406e4a",
    clientSecret: "9b5b9d5c8edd41e7adb74f0ce3066b2e",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

// app.post("/refreshplay", (req, res) => {
//   const refreshToken = req.body.refreshToken;
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: "http://localhost:5173/playlist",
//     clientId: "b9e7f4a1fe48400790a362c6de406e4a",
//     clientSecret: "9b5b9d5c8edd41e7adb74f0ce3066b2e",
//     refreshToken,
//   });

//   spotifyApi
//     .refreshAccessToken()
//     .then((data) => {
//       res.json({
//         accessToken: data.body.accessToken,
//         expiresIn: data.body.expiresIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(400);
//     });
// });

// app.post("/logintoplay", (req, res) => {
//   const code = req.body.code;
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: "http://localhost:5173/playlist",
//     clientId: "b9e7f4a1fe48400790a362c6de406e4a",
//     clientSecret: "9b5b9d5c8edd41e7adb74f0ce3066b2e",
//   });

//   spotifyApi
//     .authorizationCodeGrant(code)
//     .then((data) => {
//       res.json({
//         accessToken: data.body.access_token,
//         refreshToken: data.body.refresh_token,
//         expiresIn: data.body.expires_in,
//       });
//     })
//     .catch((err) => {
//       res.sendStatus(400);
//     });
// });

app.get("/lyrics", async (req, res) => {
  const lyrics = (await lyricsfinder(req.query.artist, req.query.track)) || "No Lyrics Found";
  res.json({ lyrics });
});

app.post("/friends",  (req, res) => {
  const { user } = req.body;
  friendsModel.findOne({ user }).then((user) => {
    if (user) {
      res.json("Success");
    } else {
      res.json("No record found");
    }
  });
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});


































