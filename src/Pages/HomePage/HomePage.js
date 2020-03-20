import React, { Component } from 'react'
import classnames from 'classnames'
import Container from 'components/Grid/Container'
import css from './HomePage.module.scss'
import VideoBanner from 'Pages/HomePage/VideoBanner/VideoBanner'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.homeData = {
      siteMainCaption: 'Стоматологическая клиника Patterson Dental',
      videoBanner: {
        titleAdaptive: 'Стоматология для всех',
        titleDesktop: 'Современная стоматология для всех',
        background: '/assets/images/bg__video-banner.jpg'
      },
    }
  }

  render () {
    return (
      <main>
        <h1 className='visuallyHidden'>
          { this.homeData.siteMainCaption }
        </h1>
        <div className={css.wrapper}>
          <VideoBanner {...this.homeData.videoBanner} />
        </div>
      </main>
    )
  }
}

export default HomePage
