import React from 'react'
import Song from './Song'

function SingleAlbum(props) {
    return (
        <div className='container'>
          <div id='single-album' className='column'>
            <div className='album'>
              <a>
                <img src={props.alb.artworkUrl} />
                <p>{props.alb.name}</p>
                <small>{props.alb.artist.name}</small>
              </a>
            </div>
            <table id='songs'>
              <tbody>
              <tr className='gray'>
                  <td />
                  <td>#</td>
                  <td>Name</td>
                  <td>Artist</td>
                  <td>Genre</td>
                </tr>
                {props.alb.songs.map((song, idx)=>
                <Song playing={props.playing} curr={props.curr} play={props.play} key={song.id} song={song} artistName={props.alb.artist.name} idx={idx}/>
                )}
              </tbody>
            </table>
          </div>
        </div>
    )
}

export default SingleAlbum