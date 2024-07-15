import React from 'react'
import Sidebar from './Sidebar'
import Player1 from './Player1'
import Display from './Display'
import axios from 'axios'
import { AudioPlayer } from 'react-audio-play';


const Album1 = () => {
  return (
    <div className='h-screen bg-cover' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}}  >
      <div className='w-full h-screen backdrop-filter backdrop-blur-3xl'>
        <div className='h-screen flex'>
         
          <Sidebar />
        <div className='h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85'>
       
        <div className='h-[93%] w-[95%] bg-[#484848] absolute mt-6 ml-7 rounded-xl opacity-80'>
            <h1 className='text-white text-6xl'>Album1</h1>
           <AudioPlayer src='./Viyugam.mp3'/>

        </div>
        <div className='h-10 w-10  absolute text-white'>

        </div>

        </div>
        
        <div className='w-[75%] flex  '>
        <Player1/>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Album1
