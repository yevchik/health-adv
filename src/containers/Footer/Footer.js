import React, { Component } from 'react'
import classnames from 'classnames'
import css from './Footer.module.scss'
import Container from 'components/Grid/Container'

class Footer extends Component {
  render () {
    const { className } = this.props

    return (
      <footer className={classnames(css.footer, className)}>
        <Container>
          Footer goes here
        </Container>
      </footer>
    )
  }
}

export default Footer
