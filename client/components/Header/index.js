
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'
import style from './style.css'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    console.log(this)
    return (
        <h1>{this.props.children}</h1>
    )
  }
}

export default Header
