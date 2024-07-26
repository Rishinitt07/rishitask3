import React from 'react'
import Appsong from './Appsong'
import Playsong from './Playsong'

const Playlist = () => {

  return (
    <div>
      <form>
       <div className='h-screen w-full bg-gray-700  bg-cover overflow-hidden' style={{"backgroundImage":"url('../src/assets/bg-1.jpg')"}}>
       <div className='w-full h-screen backdrop-filter backdrop-blur-xl flex justify-center items-center '>
        <div className='h-[90%] w-[50%] bg-[#484848] absolute mt- ml-[06%] rounded-3xl  '>
          <div className='text-[#969696] flex justify-center mt-4 font-bold text-3xl'>
          New Playlist
          </div>

          <div>
            <hr className='h-0.5 w-[90%] bg-black mt-6 ml-10'/>
          <input type='text' className='block  w-[70%] py-2.3 px-0 mt-12 ml-28 text-l text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''  onChange={(e)=>Setuser(e.target.value)}/>
            <label htmlFor='' className='absolute text-l mt-[16%] ml-28 text-white duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-8 ' >Playlist Name:</label>

          </div>
          <div className='flex justify-around h-full w-full'>
          <div className='h-[50%] w-[40%] bg-gray-400 mt-3 rounded-2xl'>
          

            </div>
            <div className='h-[50%] w-[40%] bg-gray-400 mt-3 rounded-xl'>

            </div>

           <input type='file'accept=".jpg, .jpeg, image/jpeg" className='absolute mt-[50%] ml-[-40%]'></input>

           <button id='uploadButton' className='absolute mt-[50%] ml-[75%] h-10 w-20 rounded-xl bg-[#484848]' >
            save

           </button>

          </div>
          <Playsong/>
          
          

        </div>

        </div>

       </div>
      </form>

    </div>
  )
}

export default Playlist



















// import React, { useState } from "react";

// const Playlist = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [songs, setSongs] = useState([]);
//   const [selectedSongs, setSelectedSongs] = useState([]);
//   const [playlistName, setPlaylistName] = useState("");
//   const [file, setFile] = useState(null);

//   const accessToken =
//     "https://accounts.spotify.com/authorize?client_id=b9e7f4a1fe48400790a362c6de406e4a&response_type=code&redirect_uri=http://localhost:5173/playlist&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"; // You need to handle OAuth to get this token

//   const handleSearch = async (e) => {
//     setSearchQuery(e.target.value);

//     if (e.target.value.trim() === "") {
//       setSongs([]);
//       return;
//     }

//     const response = await fetch(
//       `https://api.spotify.com/v1/search?q=${e.target.value}&type=track&limit=10`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     const data = await response.json();
//     setSongs(data.tracks.items);
//   };

//   const handleAddSong = (song) => {
//     setSelectedSongs([...selectedSongs, song]);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSave = () => {
//     // Handle save logic here, such as creating the playlist and adding songs
//     console.log("Playlist Name:", playlistName);
//     console.log("Selected Songs:", selectedSongs);
//     console.log("File:", file);
//   };

//   return (
//     <div>
//       <form>
//         <div
//           className="h-screen w-full bg-gray-700 bg-cover overflow-hidden"
//           style={{ backgroundImage: "url('../src/assets/bg-1.jpg')" }}
//         >
//           <div className="w-full h-screen backdrop-filter backdrop-blur-xl flex justify-center items-center">
//             <div className="h-[90%] w-[50%] bg-[#484848] absolute mt- ml-[06%] rounded-3xl">
//               <div className="text-[#969696] flex justify-center mt-4 font-bold text-3xl">
//                 New Playlist
//               </div>

//               <div>
//                 <hr className="h-0.5 w-[90%] bg-black mt-6 ml-10" />
//                 <input
//                   type="text"
//                   className="block w-[70%] py-2.3 px-0 mt-12 ml-28 text-l text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
//                   placeholder=""
//                   onChange={(e) => setPlaylistName(e.target.value)}
//                 />
//                 <label
//                   htmlFor=""
//                   className="absolute text-l mt-[16%] ml-28 text-white duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-8"
//                 >
//                   Playlist Name:
//                 </label>
//               </div>

//               <div className="flex justify-around h-full w-full">
//                 <div className="h-[50%] w-[40%] bg-gray-400 mt-3 rounded-2xl">
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     placeholder="Search for songs"
//                     className="w-full p-2"
//                   />
//                   <ul>
//                     {songs.map((song) => (
//                       <li
//                         key={song.id}
//                         onClick={() => handleAddSong(song)}
//                         className="cursor-pointer p-2 hover:bg-gray-500"
//                       >
//                         {song.name} - {song.artists[0].name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="h-[50%] w-[40%] bg-gray-400 mt-3 rounded-xl">
//                   <ul>
//                     {selectedSongs.map((song) => (
//                       <li key={song.id}>
//                         {song.name} - {song.artists[0].name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <input
//                   type="file"
//                   accept=".jpg, .jpeg, image/jpeg"
//                   className="absolute mt-[50%] ml-[-40%]"
//                   onChange={handleFileChange}
//                 />

//                 <button
//                   type="button"
//                   id="uploadButton"
//                   className="absolute mt-[50%] ml-[75%] h-10 w-20 rounded-xl bg-[#484848]"
//                   onClick={handleSave}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Playlist;



























// import React, { useState, useEffect } from 'react';

// const Playlist = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [songs, setSongs] = useState([]);
//   const [selectedSongs, setSelectedSongs] = useState([]);
//   const [playlistName, setPlaylistName] = useState('');
//   const [file, setFile] = useState(null);
//   const [accessToken, setAccessToken] = useState('95dd918fc1e9417d8ac12ea9ad26bad3');

//   useEffect(() => {
//     const fetchToken = async () => {
//       const response = await fetch('http://localhost:3001/api/token');
//       const data = await response.json();
//       setAccessToken(data.token);
//     };
//     fetchToken();
//   }, []);

//   const handleSearch = async (e) => {
//     setSearchQuery(e.target.value);

//     if (e.target.value.trim() === '') {
//       setSongs([]);
//       return;
//     }

//     const response = await fetch(`https://api.spotify.com/v1/search?q=${e.target.value}&type=track&limit=10`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     const data = await response.json();
//     setSongs(data.tracks.items);
//   };

//   const handleAddSong = (song) => {
//     setSelectedSongs([...selectedSongs, song]);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSave = () => {
//     // Handle save logic here, such as creating the playlist and adding songs
//     console.log('Playlist Name:', playlistName);
//     console.log('Selected Songs:', selectedSongs);
//     console.log('File:', file);
//   };

//   return (
//     <div>
//       <form>
//         <div className='h-screen w-full bg-gray-700 bg-cover overflow-hidden' style={{ "backgroundImage": "url('../src/assets/bg-1.jpg')" }}>
//           <div className='w-full h-screen backdrop-filter backdrop-blur-xl flex justify-center items-center'>
//             <div className='h-[90%] w-[50%] bg-[#484848] absolute mt- ml-[06%] rounded-3xl'>
//               <div className='text-[#969696] flex justify-center mt-4 font-bold text-3xl'>
//                 New Playlist
//               </div>

//               <div>
//                 <hr className='h-0.5 w-[90%] bg-black mt-6 ml-10' />
//                 <input type='text' className='block w-[70%] py-2.3 px-0 mt-12 ml-28 text-l text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' onChange={(e) => setPlaylistName(e.target.value)} />
//                 <label htmlFor='' className='absolute text-l mt-[16%] ml-28 text-white duration-300 transform -translate-y-8 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-8'>Playlist Name:</label>
//               </div>

//               <div className='flex justify-around h-full w-full'>
//                 <div className='h-[50%] w-[40%] bg-gray-400 mt-3 rounded-2xl'>
//                   <input type='text' value={searchQuery} onChange={handleSearch} placeholder="Search for songs" className="w-full p-2" />
//                   <ul>
//                     {songs.map(song => (
//                       <li key={song.id} onClick={() => handleAddSong(song)} className="cursor-pointer p-2 hover:bg-gray-500">
//                         {song.name} - {song.artists[0].name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className='h-[50%] w-[40%] bg-gray-400 mt-3 rounded-xl'>
//                   <ul>
//                     {selectedSongs.map(song => (
//                       <li key={song.id}>
//                         {song.name} - {song.artists[0].name}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <input type='file' accept=".jpg, .jpeg, image/jpeg" className='absolute mt-[50%] ml-[-40%]' onChange={handleFileChange} />

//                 <button type='button' id='uploadButton' className='absolute mt-[50%] ml-[75%] h-10 w-20 rounded-xl bg-[#484848]' onClick={handleSave}>
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Playlist;

