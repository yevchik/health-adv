import React, { Component } from 'react'
import css from './HomePage.module.scss'
import VideoBanner from 'Pages/HomePage/VideoBanner/VideoBanner'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.homeData = {
      siteMainCaption: 'Стоматологическая клиника Patterson Dental',
      videoBanner: {
        top: {
          slogan: 'Patterson Dental&nbsp;&mdash;<br>качественная стоматология<br>для Вас',
          previewLabel: 'Посмотрите видео о клинике',
          modalVideo: '/assets/videos/demo_video_1920.mp4',
          modalVideoPreview: '/assets/images/video__preview.jpg',
        },
        bottom: {
          sloganAdaptive: 'Стоматология для всех',
          sloganDesktop: 'Современная<br>стоматология<br>для всех',
          backgroundMobile: '/assets/images/bg__video-banner@mobile.jpg',
          backgroundTablet: '/assets/images/bg__video-banner@tablet.jpg',
          descriptor: 'Новейшее оборудование, опытные доктора,<br>система внутреннего контроля качества услуг',
          videoBg: '/assets/videos/demo_video_1920_2.mp4'
        }
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
