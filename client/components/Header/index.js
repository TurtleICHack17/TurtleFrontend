
import React, { Component } from 'react'
import style from './style.css'

class Header extends Component {

  render() {
    return (
        <h1 className={this.props.className}>{this.props.children}</h1>
    )
  }
}

export default Header
