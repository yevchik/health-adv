import React, { Component } from 'react'
import classnames from 'classnames'
import css from './Header.module.scss'

class Header extends Component {
  render () {
    return (
      <header className={css.header}>
        Header goes here
      </header>
    )
  }
}

export default Header
