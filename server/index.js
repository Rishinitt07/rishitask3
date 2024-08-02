






const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");
const bodyparser = require("body-parser");
const lyricsfinder = require("lyrics-finder");
const SpotifyWebApi = require("spotify-web-api-node");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const secretKey1 = crypto.randomBytes(64).toString('hex');



const app = express();
app.use(cookieParser());
const secretKey = secretKey1;
console.log(secretKey);

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/users");

// Register route
// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new userModel({ username, password: hashedPassword });
//   await newUser.save();
//   res.status(201).json({ message: 'User registered' });
// });



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
    const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
    console.log(token)
    

    
    res.json({ token });
    // res.send(token)
   
  
    // res.status(201).json({ message: 'User registered' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// // Middleware to verify JWT token
// const authenticateToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
//     req.user = decoded.user;
//     next();
//   });
// };


















// const authenticateToken = (req, res, next) => {
//   const authHeader = `${token}`
//   console.log(authHeader)
//   if (!authHeader) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   const token = authHeader.split(' ')[1]; // Extract the token part
//   if (!token) {
//     return res.status(401).json({ message: 'Malformed token' });
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       console.error('Token verification error:', err);
//       return res.status(403).json({ message: 'Failed to authenticate token' });
//     }
//     req.user = decoded.user;
//     next();
//   });
// };





const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token)

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};












app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: `Welcome ${req.user}` });

});

// app.post("/info", (req, res) => {
//   userModel
//     .create(req.body)
//     .then((userinfo) => res.json(userinfo))
//     .catch((err) => res.json(err));
// });

app.post("/home", authenticateJWT, (req, res) => {
  userModel
    .create(req.body)
    .then((home) => res.json(home))
    .catch((err) => res.json(err));
});

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

app.post("/refreshplay", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173/playlist",
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

app.post("/logintoplay", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:5173/playlist",
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

app.get("/lyrics", async (req, res) => {
  const lyrics = (await lyricsfinder(req.query.artist, req.query.track)) || "No Lyrics Found";
  res.json({ lyrics });
});

app.post("/friends", authenticateJWT, (req, res) => {
  const { user } = req.body;
  userModel.findOne({ user }).then((user) => {
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


































