import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as LoginActions from '../../actions/login'
import style from './style.css'

import SwipeCards from '../../components/SwipeCards';


class Stack extends Component {
  render() {
    const { actions, children, login } = this.props

    const cards = [ {
      name: 'Heiki',
      age: 22,
      picture: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/10559740_488116074658948_2372251737236126104_n.jpg?oh=82dda1a14320289de21e5313d877a480&oe=58FD426E'
    }]

    return (
      <div className={style.normal}>
        <Header>Stack</Header>

        <SwipeCards width={300} height={500} cards={cards} onLeftSwipe={(card) => console.log('swiped left')} onRightSwipe={(card) => console.log('swiped right')}/>

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
