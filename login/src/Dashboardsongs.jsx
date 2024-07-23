import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import Playerfooter from "./Playerfooter"
import TrackSearchResult from "./TrackSearchResult"


import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"

const spotifyApi = new SpotifyWebApi({
  // clientId: "8b945ef10ea24755b83ac50cede405a0",
  clientId: "b9e7f4a1fe48400790a362c6de406e4a",
})




export default function Dashboardsongs({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])


  

  return (
    <div className="d-flex flex-column py-2 text-white" style={{ height: "70vh" }}>
      
      <input className=" text-xl relative ml-[28%] top-[-12%] mt-[-16px] h-10 w-[40%] rounded-3xl border-none  bg-[#484848] pl-3"
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2 h-[72%] absolute top-[25%] w-[98%]" style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <div className="absolute mt-[38%] h-[2%] w-[100%] opacity-75  rounded-3xl  ">
        <Playerfooter accessToken={accessToken} trackUri={playingTrack?.uri}  />
      </div>
    </div>
  )
}
