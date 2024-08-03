import React from 'react'
import Sidebar from './Sidebar'
import Player1 from './Player1'
import Display from './Display'
import axios from 'axios'
import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import Playerfooter from "./Playerfooter"
import TrackSearchResult from "./TrackSearchResult"


import SpotifyWebApi from "spotify-web-api-node"
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'







const Home = () => {




  // const result =  axios.post('http://localhost:3001/login',{user,pass} );
  // if (result.data.token) {


    
  //   //  var a = localStorage.setItem('token', result.data.token);
    
  //   var b = localStorage.getItem('token')
  //   if(!a===b){
  //     console.log("wrong authentication")
  //     navigate('/login')
     
      
  //   }else{
  //     console.log("verified")
  //     navigate('/home');
  //     // localStorage.removeItem('token')
  //   }

    
  // } else {
   
  //   console.log(result.data.token)
  // }























  const show2 = ()=>{
    toast.success('Successfully Loged In ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      });

  }


  


  window.addEventListener("load",show2)
  axios.defaults.withCredentials=true

  const [message,setmessage]= useState()
  const navigate = useNavigate()


  useEffect(()=>{
    axios.get('http://localhost:3001/dashboard')
    .then(res=>{
      if(res.data.valid){
        setmessage(res.data.message)
      }
      else{
        navigate('/login')

      }
    })
    .catch(err=>console.log(err))
  })
  



  
  












  return (
    
    
    <div className='h-screen bg-cover' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}}   >
      <div className='w-full h-screen backdrop-filter backdrop-blur-3xl'>
        <div className='h-screen flex'>
         
          <Sidebar />
        <div className='h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85'>
        <Display/>
        <div className='h-10 w-10  absolute text-white'>

        </div>

        </div>
        
        <div className='w-[75%] flex  '>
       
        <Player1/>

        </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
    </div>

     
     
    
  )
}

export default Home
