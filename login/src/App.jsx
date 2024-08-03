import React from 'react'
import Login from './Login'
import Register from './Register'
import Dashboarditems from './Dashboarditems'
import Home from './Home'
import Artistacc from './Artistacc'
import "./App.css"

import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Search from './Search'
import Library from './Library'
import Playlist from './Playlist'
import Album1 from './Album1'
import Toastify from './Toastify'
import Friends from './Friends'
// import { AuthProvider } from './Authnticate'
// import PrivateRoute from './Private'




const App = () => {
  return (
    <div>
    
      

    
   
      {/* <BrowserRouter> */}
    
 

    
          <Routes>
        
      
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='' element={<Dashboarditems/>}/>
    
      
      <Route path='home' element={<Home/>}/>
  
      
      <Route path='artist' element={<Artistacc/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='library' element={<Library/>}/>
      <Route path='playlist' element={<Playlist/>}/>
      <Route path='album1' element={<Album1/>}/>
      <Route path='toast' element={<Toastify/>}/>
      <Route path='friends' element={<Friends/>}/>


          
      </Routes>
     

      {/* </BrowserRouter>  */}
      

    

   








  
    {/*       
          <Route path="/login" element={<Login/>} />
          <PrivateRoute path="/home" element={<Home/>} />
          <Redirect from="/" to="/login" /> */}


      
      
      
      
    
    </div>
  )
}

export default App











// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
// import Dashboarditems from './Dashboarditems';
// import Home from './Home';
// import Artistacc from './Artistacc';
// import Search from './Search';
// import Library from './Library';
// import Playlist from './Playlist';
// import Album1 from './Album1';
// import Toastify from './Toastify';
// import Friends from './Friends';
// import './App.css';
// import { AuthProvider } from './Authnticate';
// import PrivateRoute from './Private';

// const App = () => {
//   return (
//     <AuthProvider>
     
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Dashboarditems />} />
//           <PrivateRoute path="/home" element={<Home />} />
//           <PrivateRoute path="/artist" element={<Artistacc />} />
//           <PrivateRoute path="/search" element={<Search />} />
//           <PrivateRoute path="/library" element={<Library />} />
//           <PrivateRoute path="/playlist" element={<Playlist />} />
//           <PrivateRoute path="/album1" element={<Album1 />} />
//           <PrivateRoute path="/toast" element={<Toastify />} />
//           <PrivateRoute path="/friends" element={<Friends />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
     
//     </AuthProvider>
//   );
// };

// export default App;
