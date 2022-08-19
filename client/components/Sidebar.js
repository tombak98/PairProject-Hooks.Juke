import React from 'react'

function Sidebar(props) {
    return (
        <div id='sidebar'>
          <img src='juke.svg' id='logo' />
          <section>
            <h4>
              <a onClick={props.handler}>ALBUMS</a>
            </h4>
          </section>
        </div>
    )
}

export default Sidebar