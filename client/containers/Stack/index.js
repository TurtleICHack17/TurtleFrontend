import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {browserHistory} from 'react-router'

import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as LoginActions from '../../actions/login'
import * as CardActions from '../../actions/cards'
import style from './style.css'
import 'whatwg-fetch'
import SwipeCards from '../../components/SwipeCards';
import AppBar from 'material-ui/AppBar';


class Stack extends Component {


  componentWillMount() {
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  loadCards(userID, appendCards) {
    fetch('http://129.31.231.107:9000/api/turtle_users/' + userID + '/current').then(function(response) {
        return response.json()
      }).then((data) => {
        appendCards(data.map((item) => {
          return {
            name: item.name || 'UNKNOWN_NAME',
            picture: "http://graph.facebook.com/" + (item.fbUserId || '') + "/picture",
            fbUserId: item.fbUserId
        }})
      )
      this.forceUpdate()
    })
  }


  handleLeftSwipe(ourUserId, card) {
    fetch('http://129.31.231.107:9000/api/turtle_users/' + ourUserId + '/swipeleft/' + card.fbUserId,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: "{}"
      })
  }

  handleRightSwipe(ourUserId, card) {
    fetch('http://129.31.231.107:9000/api/turtle_users/' + ourUserId + '/swiperight/' + card.fbUserId,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: "{}"
      })

    browserHistory.push('/record')
  }

  render() {

    const { actions, children, login, cards } = this.props
    const ourUserId = login.fbObject ? login.fbObject.userID : null
    if(login.loggedIn) {
      console.log('user available')
      if (cards.length == 0) {
        this.loadCards(ourUserId, actions.appendCards)
      }
    }
    else {
      console.log('user unavailable')
    }
    console.log('OURUSERID: ' + ourUserId)
    const swipeHeight = window.innerHeight-80
    const swipeWidth = swipeHeight*0.6
    console.log(cards)
    return (
      <div className={style.page} key={this.guid()}>
        <AppBar
            title="turtle."
            showMenuIconButton={false}
          />

        <div className={style.stackContainer} style={{width: swipeWidth, height: swipeHeight}}>
          <SwipeCards
            width={swipeWidth}
            height={swipeHeight}
            cards={cards}
            onLeftSwipe={(card) => this.handleLeftSwipe(ourUserId, cards[card])}
            onRightSwipe={(card) => this.handleRightSwipe(ourUserId, cards[card]) }
            />
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CardActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stack)
