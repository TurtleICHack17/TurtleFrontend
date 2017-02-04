import React, {Component} from 'react'
import style from './style.css'

class RecordingPage extends Component {

  render() {
    return (
      <div>
        <h1>Video Recording Page</h1>
          <video id="myVideo" class="video-js vjs-default-skin"></video>
      </div>
    )
  }
}

export default RecordingPage
