import React, { Component } from 'react'
import css from './SliderCards.module.scss'
import classnames from 'classnames'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import IconArrow from 'assets/icons/IconArrow'

class SliderCards extends Component {
  state = {
    activeIndex: 0
  }

  swiper = null

  goNext = () => {
    if (this.swiper) {
      this.swiper.slideNext()
    }
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  initSlider = node => {
    this.swiper = node
    // Somehow requires update inside setTimeout to rednder free mode slider correctly
    setTimeout(() => {
      this.swiper.update()
    })
  }

  render () {
    const { className, children, desktopSlidesPerView = 1, type } = this.props
    const { activeIndex } = this.state

    // swiper settings
    const params = {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        768: {
          freeMode: true,
          freeModeSticky: true,
          slidesPerView: 'auto'
        },
        1280: {
          freeMode: false,
          slidesPerView: desktopSlidesPerView,
        }
      },
      on: {
        beforeResize: () => {
          this.swiper.slides.css('width', '')
        },
        slideChange: () => {
          this.setState({
            activeIndex: this.swiper.activeIndex
          })
        }
      }
    }

    let totalSlides = 0

    if (this.swiper) {
      totalSlides = this.swiper.slides.length < 10
        ? '0' + this.swiper.slides.length
        : this.swiper.slides.length
    }

    return (
      <div className={classnames(css.wrapper, className, { [css.wrapperSingle]: type === 'single' })}>
        <Swiper {...params} getSwiper={this.initSlider}>
          { children }
        </Swiper>
        <div className={css.controls}>
          {totalSlides > 0 &&
            <div className={css.fractions}>
              <span className={css.active}>
                { activeIndex < 10 ? '0' + (activeIndex + 1) : activeIndex + 1 }
              </span>
              <span className={css.total}>
                { totalSlides }
              </span>
            </div>
          }
          <div className={css.buttons}>
            <button className={classnames(css.btn, css.btnBefore, { [css.btnDisabled]: activeIndex === 0 })} onClick={this.goPrev}>
              Предыдущий слайд
              <IconArrow className={css.icon} />
            </button>
            <button className={classnames(css.btn, css.btnNext, { [css.btnDisabled]: this.swiper && activeIndex === this.swiper.slides.length - 1 })} onClick={this.goNext}>
              Следующий слайд
              <IconArrow className={css.icon} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SliderCards
