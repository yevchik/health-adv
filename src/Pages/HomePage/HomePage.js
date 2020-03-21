import React, { Component } from 'react'
import css from './HomePage.module.scss'
import VideoBanner from 'Pages/HomePage/VideoBanner/VideoBanner'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.homeData = {
      siteMainCaption: 'Стоматологическая клиника Patterson Dental',
      videoBanner: {
        sloganAdaptive: 'Стоматология для всех',
        sloganDesktop: 'Современная стоматология для всех',
        backgroundMobile: '/assets/images/bg__video-banner@mobile.jpg',
        backgroundTablet: '/assets/images/bg__video-banner@tablet.jpg',
        descriptor: 'Новейшее оборудование, опытные доктора, система внутреннего контроля качества услуг',
        modalVideo: '/assets/videos/demo_video_1920.mp4'
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
