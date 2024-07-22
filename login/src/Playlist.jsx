import React from 'react'

const Playlist = () => {
  return (
    <div>
      <form>
       <div className='h-screen w-full bg-gray-700  bg-cover' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}}>
       <div className='w-full h-screen backdrop-filter backdrop-blur-xl flex justify-center items-center '>
        <div className='h-[90%] w-[50%] bg-white absolute mt- ml-[06%] rounded-3xl '>
          <div className='text-black flex justify-center mt-4 font-bold text-3xl'>
          New Playlist
          </div>
          
          
          <div>
            <hr className='h-0.5 w-[90%] bg-black mt-6 ml-10'/>
          <input type='text' className='block  w-[70%] py-2.3 px-0 mt-12 ml-28 text-l text-black bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer' placeholder=''  onChange={(e)=>Setuser(e.target.value)}/>
            <label htmlFor='' className='absolute text-l mt-[16%] ml-28 text-black duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-8 ' >Playlist Name:</label>
           
            
          </div>
          <div className='flex justify-around h-full w-full'>
          <div className='h-[50%] w-[40%] bg-gray-600 mt-3'>
            
            
            

            
            
            
            </div>
            <div className='h-[50%] w-[40%] bg-gray-600 mt-3'>
              
            </div>
           

           <input type='file'accept=".jpg, .jpeg, image/jpeg" className='absolute mt-[50%] ml-[-40%]'></input>
           {/* <input type="file" id="imageUpload" accept=".jpg, .jpeg, image/jpeg" className='absolute mt-[50%] ml-[-40%]' ></input>
           <img id="preview" src={previewUrl} alt="Image preview"  className='hidden max-w-[100px]'/> */}
           <button id='uploadButton' className='absolute mt-[50%] ml-[75%] h-10 w-20 rounded-xl bg-[#484848]' >
            save

           </button>
           
            

          </div>
         
          
      
          


        </div>
        


        

        </div>
        
       </div>
      </form>
      
    </div>
  )
}

export default Playlist
