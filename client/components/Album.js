import React from 'react'

function Album(props) {
    return (
        <div className="container">
            <div id='albums' className='row wrap'>
                {props.listAlbums.map((alb) => 
                    <div alb-id={alb.id} onClick={props.handler} key={alb.id} className='album'>
                        <a alb-id={alb.id}>
                        <img alb-id={alb.id} src={alb.artworkUrl} />
                        <p alb-id={alb.id}>{alb.name}</p>
                        <small alb-id={alb.id}>{alb.artist.name}</small>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Album

