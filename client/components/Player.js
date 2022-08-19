import React from 'react'

function Player(props) {
    return (
        <div id='player-container'>
          <div id='player-controls'>
            <div className='row center'>
              <i className='fa fa-step-backward'></i>
              <i onClick={props.pause} className={props.playing ? 'fa fa-pause-circle':'fa fa-play-circle'}></i>
              <i className='fa fa-step-forward'></i>
            </div>
          </div>
        </div>
    )
}

export default Player