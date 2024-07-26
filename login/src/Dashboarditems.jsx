import React from 'react'
import { Link } from 'react-router-dom'
// import ScratchCard from 'react-scratchcard'
import { TypeAnimation } from 'react-type-animation';



const Dashboard = () => {
  const settings = {
    width: 350,
    height: 350,
    image: '../src/assets/bg-1.jpg' ,
    finishPercent: 50,
    onComplete: () => console.log('The card is now clear!')
  };







  return (
    <div className='bg-cover text-white h-screen w-full overflow-hidden' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}}>
      <div className='w-full h-screen backdrop-filter backdrop-blur-xl'>
        <div className='absolute'>
          <div className='h-32 w-32 bg-cover ml-3 mt-0'style={{"backgroundImage":"url('../src/assets/dunes-1.png')"}}>
          <div className='absolute mt-12 ml-32 text-6xl'>
            tunes
          </div>
          

          </div>
        </div>
      <div className='flex gap-8 justify-end pt-16 pr-5 '>
      <Link to="/register"> <button className='border-none p-2 bg-slate-700 rounded-3xl '>Click to Register</button></Link>
      <Link to="/login"><button className='border-none p-2 bg-slate-700 rounded-3xl  '> Click to Login</button></Link>
      <Link to="/artist"> <button className='border-none p-2 bg-slate-700 rounded-3xl'> Click to Register to Artist account</button></Link>
    </div>
    <hr className='mt-2 w-[97%] ml-6'></hr>

    <div className='h-[100%] w-full bg-[#9e9c9c] bg-opacity-10'>
      <div className='h-[84%] w-[100%] bg-black bg-opacity-50  '>
        <h1 className='text-white flex items-center justify-center mt-[15%] ml-[5%] absolute'> <TypeAnimation
      sequence={[
       
        'Its a music Streaming Web App....',
        2000, 
        'Provides Login Authentication....',
        2000,
        'Which uses Spotify API....',
        2000,
        'Introducing the D Tunes!!',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>
      </div>

    </div>



    


    {/* <ScratchCard  {...settings}>
    Congratulations! You WON!
    </ScratchCard> */}


    
    
   

      </div> 
      
       

    </div>
    
     

    
    
  )
}

export default Dashboard
