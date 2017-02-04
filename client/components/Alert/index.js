import React, { Component } from 'react'
import style from './style.css'

class Header extends Component {
  render() {
    return (
        <div className='alert-container'>{this.props.children}</div>
    )
  }
}

export default Header
