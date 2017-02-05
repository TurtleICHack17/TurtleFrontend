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

class MatchPage extends Component {
  render() {
    const matchId = this.props.params.matchId;
    return (
      <div className={style.main}>
        <h1 className=''>It's a match!</h1>
        <h2>Your match: {matchId}</h2>
        <img src={`http://graph.facebook.com/${matchId}/picture`} />
      </div>
    );
  }
}

export default MatchPage
