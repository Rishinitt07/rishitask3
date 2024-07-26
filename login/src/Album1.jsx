import React from 'react'
import Sidebar from './Sidebar'
import Player1 from './Player1'
import Display from './Display'
import axios from 'axios'
import { AudioPlayer } from 'react-audio-play';


const Album1 = () => {
    
  const song1 = ()=>{
    var audio = document.querySelector("#s1")

    // if(!audio.paused){
    //   audio.pause()
    // }
    // audio.currentTime=0;
    // audio.play()
    if(audio.paused){
      audio.play()
        audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
    }
    
  }
  const song2 = ()=>{
    var audio = document.querySelector("#s2")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song3 = ()=>{
    var audio = document.querySelector("#s3")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song4 = ()=>{
    var audio = document.querySelector("#s4")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song5 = ()=>{
    var audio = document.querySelector("#s5")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song6 = ()=>{
    var audio = document.querySelector("#s6")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song7 = ()=>{
    var audio = document.querySelector("#s7")
   

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song8 = ()=>{
    var audio = document.querySelector("#s8")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song9 = ()=>{
    var audio = document.querySelector("#s9")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }
  const song10 = ()=>{
    var audio = document.querySelector("#s10")
    

    // if(!audio.paused){
    //   audio.pause()
     
    // }


    if(audio.paused){
      audio.play()
      audio.style.display = "block"
    }
    else{
       audio.currentTime=0;
      audio.pause()
      audio.style.display = "none"
      
    }
    
    // audio.play()
    
    
  }





  

  return (
    <div className='h-screen bg-cover' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}}  >
      <div className='w-full h-screen backdrop-filter backdrop-blur-3xl'>
        <div className='h-screen flex'>
         
          <Sidebar />
        <div className='h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85'>
       
        <div className='h-[93%] w-[95%] bg-[#484848] absolute mt-6 ml-7 rounded-xl opacity-80 gap-20 flex'>
            <h1 className='text-white text-6xl'>Top 10 Tamil</h1>
            <div className='h-[1px] w-[95%] bg-white absolute mt-24 ml-3'>

            </div>
         
        
          
            <div className='flex flex-col absolute gap-10 mt-[12%] ml-10 overflow-y-auto  h-[70%] w-[95%] text-white'>

           
            <div className=' '>
            <button onClick={song1} className='h-10 w-[100%] flex gap-3   '>
              <img src="../src/assets/bg-1.jpg" width={100} height={100} alt="fgdg" />
              Aasa Kooda
              
            </button>
          

            </div>
            <div>
            <button onClick={song2} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-2.jpg" width={100} height={100} alt="fgdg" />
              Title Song - Kalki
            </button>
            
           
           


            </div>
            <div>
            <button onClick={song3} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              Nenjukulle - Kadal
            </button>
            
           
           

            </div>
            <div>
            <button onClick={song4} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              Aathi - Kathi
            </button>
            
           
           

            </div>
            <div>
            <button onClick={song5} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              Jimmiki Kammal
            </button>
            
           
           

            </div>
            <div>
            <button onClick={song6} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              Cooloie Disco
            </button>
            
           
           

            </div>
            <div>
            <button onClick={song7} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              Paalam - Kathi
            </button>
            
           
           

            </div>
            <div>
            <button onClick={song8} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              
              Fear Song - Devara
            </button>
            
           
           

            </div>
            <div>
            <button onClick={song9} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              Udhunguda Sangu - Vip
            </button>
            
           
           

            </div>
            <div>
            <button onClick={song10} className='h-10 w-full flex gap-3 '>
              <img src="../src/assets/bg-3.jpg" width={100} height={100} alt="fgdg" />
              Kannala Kannala - Thani Oruvan
            </button>
            
           
           

            </div>
            </div>
            <audio id='s1' controls className='w-full mt-[54%]  absolute hidden opacity-80' >
        <source src="../src/assets/Tamil/Aasa Kooda.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s2' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Tamil1.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s3' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Nenjukkule.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s4' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Aathi.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s5' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Jimiki.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s6' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Coolie.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s7' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Paalam.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s8' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Fear Song.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s9' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Vip.mp3" type="audio/mp3"/>
       
    </audio>
    <audio id='s10' controls className='w-full mt-[54%] absolute hidden opacity-80 ' >
        <source src="../src/assets/Tamil/Kannala-Kannala.mp3" type="audio/mp3"/>
       
    </audio>
          
            
            
           
           
         
           
  

           

        </div>
        {/* <div className='h-10 w-10  absolute text-white'>

        </div> */}

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
