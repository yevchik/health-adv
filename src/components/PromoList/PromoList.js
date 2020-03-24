import React, { Component } from 'react'
import css from './PromoList.module.scss'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import AdvCard from 'components/AdvCard/AdvCard'
import { connect } from 'react-redux'
import classnames from 'classnames'

const mapStateToProps = state => {
  return {
    fontSize: state.elastic.curFontSize
  }
}

class PromoList extends Component {
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
    const { className, data, fontSize } = this.props
    const fontSizeRatio = fontSize / 10

    // swiper settings
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
      }
    }

    return (
      <div className={classnames(css.wrapper, className)}>
        <Swiper {...params} getSwiper={node => { this.swiper = node }}>
          {data.map((item, index) => (
            <div key={index}>
              <AdvCard {...item} />
            </div>
          ))}
        </Swiper>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PromoList)
