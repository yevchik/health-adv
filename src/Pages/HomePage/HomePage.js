import React, { Component } from 'react'
import classnames from 'classnames'
import Container from 'components/Grid/Container'
import css from './HomePage.module.scss'

class HomePage extends Component {
  render () {
    return (
      <main>
        <div className={css.wrapper}>
          <Container>
            Home page content
          </Container>
        </div>
      </main>
    )
  }
}

export default HomePage