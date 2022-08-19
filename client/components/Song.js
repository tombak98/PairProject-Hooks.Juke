import React from 'react'

function Song(props) {
    return (
         <tr>
            <td><i song-url={props.song.audioUrl} onClick={props.play} className={(props.curr === props.song.audioUrl && props.playing) ? 'fa fa-stop-circle':' fa fa-play-circle'} /></td>
            <td>{props.idx + 1}</td>
            <td>{props.song.name}</td>
            <td>{props.artistName}</td>
            <td>{props.song.genre}</td>
        </tr>
    )
}

export default Song