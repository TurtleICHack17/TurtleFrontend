import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as LoginActions from '../../actions/login'
import style from './style.css'
import 'whatwg-fetch'
import SwipeCards from '../../components/SwipeCards';
import AppBar from 'material-ui/AppBar';


class Stack extends Component {

  componentWillMount() {
    console.log('fetch data')
  }

  render() {
    const { actions, children, login } = this.props

    const cards = [ {
      name: 'Heiki',
      age: 22,
      picture: 'https://s-media-cache-ak0.pinimg.com/736x/ff/2e/54/ff2e54f2ca5c09a877fb04d84bc562a4.jpg'
    }]
    const swipeHeight = window.innerHeight-80
    const swipeWidth = swipeHeight*0.6
    return (
      <div className={style.page}>
        <AppBar
            title="turtle."
            showMenuIconButton={false}
          />

        <div className={style.stackContainer} style={{width: swipeWidth, height: swipeHeight}}>
          <SwipeCards
            width={swipeWidth}
            height={swipeHeight}
            cards={cards}
            onLeftSwipe={(card) => console.log('swiped left')}
            onRightSwipe={(card) => console.log('swiped right')}
            />
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stack)
