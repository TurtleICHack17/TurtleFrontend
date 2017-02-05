import React, {Component} from 'react'
import style from './style.css'
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

class MatchPage extends Component {
  render() {
    const matchId = this.props.params.matchId;
    const fbLink = "https://facebook.com/" + matchId
    return (
      <div className={style.main}>
        <Avatar size={220} src={`http://graph.facebook.com/${matchId}/picture?type=large`} className={style.avatar}></Avatar>
        <h1 className="">It's a match!</h1>
        <h2>Don't be shy!</h2>
        <RaisedButton label="Connect on facebook!" primary={true} href={fbLink}  />

      </div>
    );
  }
}

export default MatchPage
