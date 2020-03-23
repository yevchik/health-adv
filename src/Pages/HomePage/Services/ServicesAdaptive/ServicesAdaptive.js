import React, { Component } from 'react'
import classnames from 'classnames'
import css from './ServicesAdaptive.module.scss'
import Container from 'components/Grid/Container'
import 'swiper/css/swiper.min.css'
import Swiper from 'react-id-swiper'
import AdvCard from 'containers/Header/components/AdvCart/AdvCard'
import Heading from 'components/Heading/Heading'

class ServicesAdaptive extends Component {
  swiper = null

  goNext = () => {
    if (this.swiper) {
      this.swiper.slideNext()
    }
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  render () {
    const { title, list, ads, fontSize } = this.props
    const fontSizeRatio = fontSize / 10

    const params = {
      slidesPerView: 1,
      spaceBetween: 20 * fontSizeRatio,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        768: {
          freeMode: true,
          freeModeSticky: true,
          slidesPerView: 'auto'
        }
      },
      on: {
        beforeResize: () => {
          this.swiper.slides.css('width', '')
        },
        slideChange: () => {
          console.log(this.swiper.activeIndex)
        }
      }
    }

    return (
      <section>
        <Container className={css.container}>
          <Heading content={title} />
          <div className={css.ads}>
            <Swiper {...params} getSwiper={node => { this.swiper = node }}>
              {ads.map((item, index) => (
                <div key={index}>
                  <AdvCard {...item} />
                </div>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
    )
  }
}

export default ServicesAdaptive
