import React, {Component} from 'react'
import style from './style.css'

class MatchPage extends Component {
  render() {
    const matchId = this.props.params.matchId;
    return (
      <div className={style.main}>
        <h1>Congratualations for finding your perfect Turtle</h1>
        <h2>Your match: {matchId}</h2>
        <img src={`http://graph.facebook.com/${matchId}/picture`} />
      </div>
    );
  }
}

export default MatchPage
