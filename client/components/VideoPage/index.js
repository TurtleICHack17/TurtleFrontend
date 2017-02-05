import React, {Component} from 'react'
import style from './style.css'
import css from '../../../node_modules/react-html5video/dist/ReactHtml5Video.css'
import {browserHistory} from 'react-router'
import {
  default as Video,
  Controls,
  Play,
  Mute,
  Seek,
  Fullscreen,
  Time,
  Overlay
} from 'react-html5video';

class VideoPage extends Component {
  render() {
    const videoId = this.props.params.videoId;
    const matchId = this.props.params.matchId;
    const videoUrl = `http://129.31.231.107:9000/api/turtle_users/video/${videoId}`;
    console.log(videoUrl);
    return (
      <div className={style.main}>
        <div className={style.videoContainer}>
        <Video
          controls
          autoPlay
          muted poster="http://www.ryanomancefoundation.com/beta/wp-content/uploads/2016/02/video_placeholder.jpg"
          onEnded={() => {
              browserHistory.push(`/match/${matchId}/`);
          }}
        >
          <source src={videoUrl} type="video/mp4"/>
          <Overlay/>
          <Controls>
            <Play/>
            <Seek/>
            <Time/>
            <Fullscreen/>
          </Controls>
        </Video>
      </div>

      <div className={style.addtext}>
        <h2>
          Watch this!
        </h2>
      </div>
      </div>
    );
  }
}

export default VideoPage
