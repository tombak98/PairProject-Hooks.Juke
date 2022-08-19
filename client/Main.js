import React from "react";
import Sidebar from "./components/Sidebar";
import Album from "./components/Album";
import Player from "./components/Player";
import SingleAlbum from "./components/SingleAlbum";
import axios from 'axios'

const audio = document.createElement('audio');

const Main = () => {
  const [albums, setAlbums] = React.useState([])
  const [singleAlbum, setSingleAlbum] = React.useState({})
  const [currentSong, setCurrentSong] = React.useState()
  const [playing, setPlaying] = React.useState(false)
  
  async function fetchAlbums() {
    try {
      const albums = await axios.get('/api/albums')
      setAlbums(albums.data)
    } catch(err) {
      console.log('Could not get albums!')
    }
  }

  async function fetchSingleAlbum(id) {
    try {
      const album = await axios.get(`/api/albums/${id}`)
      setSingleAlbum(album.data)
    } catch(err) {
      console.log('Could not get album!')
    }
  }

  const handleSingleAlbum = (event) =>{
    let findID = event.target.getAttribute('alb-id')
    fetchSingleAlbum(findID)
  }

  const returnToMain = () => {
    setSingleAlbum({})
  }

  const playSong = (event) => {
    if (!currentSong || currentSong !== event.target.getAttribute('song-url')) {
      audio.src = event.target.getAttribute('song-url')
      setCurrentSong(audio.src)
      audio.load();
      audio.play();
      setPlaying(true)
    } else if (currentSong === event.target.getAttribute('song-url')) {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        audio.play()
        setPlaying(true)
      } 
    }
  }

  const pauseSong = () => {
    if (playing) {
      setPlaying(false)
      audio.pause()
    } else if (!playing && currentSong) {
      setPlaying(true)
      audio.play()
    }
  }

  React.useEffect(() => {
    fetchAlbums()
  },[])

  return (
    <div id="main" className="row container">
      {/* The music starts here! */}
      <Sidebar handler={returnToMain}/>
      {singleAlbum.id ? <SingleAlbum playing={playing} alb={singleAlbum} play={playSong} curr={currentSong}/> : <Album listAlbums={albums} handler={handleSingleAlbum}/>}
      <Player playing={playing} pause={pauseSong}/>
    </div>
  );
};

export default Main;
