import React, {Component} from 'react'
import style from './style.css'
import css from '../../../node_modules/react-html5video/dist/ReactHtml5Video.css'
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
    const videoUrl = `http://129.31.231.107:9000/api/turtle_users/video/${videoId}.mp4`;
    console.log(videoUrl);
    return (
      <div className={style.main}>
        <h1>User video</h1>
        <Video controls autoPlay loop muted poster="http://www.ryanomancefoundation.com/beta/wp-content/uploads/2016/02/video_placeholder.jpg">
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
    );
  }
}

export default VideoPage
