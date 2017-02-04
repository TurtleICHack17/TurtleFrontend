
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import style from './style.css'
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    const { todos, actions, children } = this.props
    return (
      <div className={style.normal}>
        <h1>turtle. Lets make it happen!</h1>
        <RaisedButton label="LOGIN WITH FACEBOOK" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
