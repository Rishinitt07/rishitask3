import React from "react";
import Sidebar from "./Sidebar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Player1 from "./Player1";
import { useState } from "react";
import axios from "axios";

const Friends = () => {
  const [user, setuser] = useState("");
   var a= localStorage.setItem("user", user);

  // const search = async (user) => {
  //   //  console.log(Input)
  //  var a = (localStorage.getItem("user"));
  //  console.log(a)
  //  const result =  await axios.post("http://localhost:3001/friends",{user})
  // if(result==a){
  //   console.log("successfull")

  // }else{
  //   console.log("error")
  // }
  // };

  // const change = (event) => {
  //   setInput(event.target.value);
  // };

  const search = async (e) => {
    e.preventDefault();
  
      try {
        const result = await axios.post('http://localhost:3001/friends', { user });
        if (result.data.user) {

          // if(user===!null && pass===!null){
          //   var a = localStorage.setItem('token', result.data.token);
          // }
          
           var a = localStorage.setItem('user', result.data.user);
          
          var b = localStorage.getItem('user')
          if(!a===b){
            console.log("wrong authentication")
           redirect('/login')
           
            
          }else{
            console.log("verified")
            navigate('/home');
            localStorage.removeItem('token')
          }
          console.log("verified")

          
        } else {
          
          console.log(result.data.user)
        }
      } catch (err) {
       
        console.log(err);
      }
    
  }





































  


  return (
    <div
      className="h-screen bg-cover"
      style={{ backgroundImage: "url('../src/assets/bg-1.jpg')" }}
    >
      <div className="w-full h-screen backdrop-filter backdrop-blur-3xl">
        <div className="h-screen flex">
          <Sidebar />
          <div className="h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85">
            <div className="h-[95%] w-[97%] bg-[#121212] absolute m-3 rounded-xl">
              <div className="mt-3 pl-4">
                <button className="text-white p-2  bg-[#242424] rounded-2xl">
                  <FaArrowLeft />
                </button>
                <button className="text-white p-2 ml-3  bg-[#242424] rounded-2xl">
                  <FaArrowRight />
                </button>
                <h1 className="text-white font-semibold text-6xl pl-10 mt-2 ">
                  Friends
                </h1>

                <button className="absolute text-white ml-[80%] top-16 bg-[#484848] w-32 h-9 rounded-2xl ">
                  Dark mode
                </button>
                <div className="text-white absolute ml-[25%] mt-[-3%] ">
                  <input
                    className="h-10 w-[250%] rounded-3xl text-black px-3 border-none focus:outline-none flex-wrap flex "
                    placeholder="Search for Friends"
                    value={user}
                    onChange={(e)=>setuser(e.target.value)}
                  />
                </div>
                <button
                  className="absolute mt-[-3.5%] ml-[72%] text-white  bg-[#484848] p-3 rounded-3xl"
                  onClick={search}
                >
                  search
                </button>
                <hr className="mt-5 mr-4"></hr>
                <div className="text-white flex flex-col  ml-[28%] h-[30%] w-[40%]  absolute overflow-x-auto gap-4">
                  <div className="flex flex-col gap-4 justify-center items-center cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[75%] flex  ">
            <Player1 />
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
        theme="colored"
      />
    </div>
  );
};

export default Friends;

//

// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import Player1 from './Player1';
// import 'react-toastify/dist/ReactToastify.css';

// const Friends = () => {
//   const [input, setInput] = useState('');
//   const [results, setResults] = useState([]);

//   const fetchData = async (value) => {
//     try {
//       const response = await fetch('http://localhost:3001/login');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const json = await response.json();
//       const filteredResults = json.filter((user) => {
//         return user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
//       });
//       setResults(filteredResults);
//       console.log(filteredResults);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       toast.error('Error fetching data');
//     }
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     <div className='h-screen bg-cover' style={{ backgroundImage: "url('../src/assets/bg-1.jpg')" }}>
//       <div className='w-full h-screen backdrop-filter backdrop-blur-3xl'>
//         <div className='h-screen flex'>
//           <Sidebar />
//           <div className='h-[85%] w-[75%] bg-black flex absolute ml-[25%] rounded-2xl opacity-85'>
//             <div className='h-[95%] w-[97%] bg-[#121212] absolute m-3 rounded-xl'>
//               <div className='mt-3 pl-4'>
//                 <button className='text-white p-2 bg-[#242424] rounded-2xl'><FaArrowLeft /></button>
//                 <button className='text-white p-2 ml-3 bg-[#242424] rounded-2xl'><FaArrowRight /></button>
//                 <h1 className='text-white font-semibold text-6xl pl-10 mt-2'>Friends</h1>
//                 <button className='absolute text-white ml-[80%] top-16 bg-[#484848] w-32 h-9 rounded-2xl'>Dark mode</button>
//                 <div className='text-white absolute ml-[25%] mt-[-3%]'>
//                   <input
//                     className='h-10 w-[250%] rounded-3xl text-black px-3 border-none focus:outline-none flex-wrap flex'
//                     placeholder='Search for Friends'
//                     value={input}
//                     onChange={(e) => handleChange(e.target.value)}
//                   />
//                 </div>
//                 <hr className='mt-5 mr-4'></hr>
//                 <div className='text-white flex flex-col ml-[28%] h-[30%] w-[40%] absolute overflow-x-auto gap-4'>
//                   <div className='flex flex-col gap-4 justify-center items-center cursor-pointer'>
//                     {results.map((result, index) => (
//                       <div key={index}>{result.name}</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='w-[75%] flex'>
//             <Player1 />
//           </div>
//         </div>
//       </div>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// };

// export default Friends;
