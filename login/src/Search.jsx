import React from 'react'
import Sidebar from './Sidebar'
import Display from './Display'
import Player1 from './Player1'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Appsong from './Appsong';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';









const Search = () => {



  const show1 = ()=>{
    toast.warning('Enter the Password ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });

  }

  const showing =()=>{
    show1()
  }

  







  return (
    <div className='h-screen bg-cover' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')" }}  >
     
      <div className='w-full h-screen backdrop-filter backdrop-blur-3xl'>
        <div className='h-screen flex'>
         
          <Sidebar />
        <div className='h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85'>
        <div className='h-[95%] w-[97%] bg-[#121212] absolute m-3 rounded-xl'>
        <div className='mt-3 pl-4'>
            <button className='text-white p-2  bg-[#242424] rounded-2xl'><FaArrowLeft/></button>
            <button className='text-white p-2 ml-3  bg-[#242424] rounded-2xl'><FaArrowRight/></button>
            <h1 className='text-white font-semibold text-6xl pl-10 mt-2 '>Search</h1>
            {/* <input className='flex absolute ml-[26%] top-16 w-[47%] h-[7%] rounded-3xl text-white bg-[#242424] border caret-white '/>
            <IoMdSearch className='text-white absolute  ml-[69%] w-8 h-6 top-[72px] '/> */}
            

            <button className='absolute text-white ml-[80%] top-16 bg-[#484848] w-32 h-9 rounded-2xl ' >Dark mode</button>
            <hr className='mt-5 mr-4'></hr>
            <div>
              <Appsong/>
            </div>
            </div>

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

export default Search


