import React, { useEffect, useState } from 'react'
import css from './SliderCards.module.scss'
import classnames from 'classnames'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import IconArrow from 'assets/icons/IconArrow'
import ButtonSlider from 'components/ButtonSlider/ButtonSlider'
import PropTypes from 'prop-types'

const SliderCards = ({
  className,
  children,
  slides = 1,
  spaceBetween = 15,
  controlsType = 'minimalist',
  freeMode = false,
  sliderEffect = 'fade'
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [swiper, setSwiper] = useState(null)

  const goNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper) {
      if (swiper) swiper.slidePrev()
    }
  }

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.activeIndex)
      })

      setTotalSlides(swiper.slides.length < 10 ? '0' + swiper.slides.length : swiper.slides.length)
    }
  }, [swiper])

  // swiper settings
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    freeMode: freeMode,
    freeModeSticky: freeMode,
    slidesPerView: freeMode ? 'auto' : slides,
    spaceBetween: freeMode ? 0 : spaceBetween,
    effect: sliderEffect,
    fadeEffect: {
      crossFade: true
    },
    getSwiper: setSwiper
  }

  return (
    <div className={classnames(css.wrapper, className)}>
      <Swiper {...params}>
        { children }
      </Swiper>
      {controlsType !== 'styledNoFractions' &&
        <div className={css.controls}>
          {+totalSlides > 0 &&
            <div className={classnames(css.fractions, 'slider-fractions')}>
              <span className={css.active}>
                { activeIndex < 10 ? '0' + (activeIndex + 1) : activeIndex + 1 }
              </span>
              <span className={css.total}>
                { totalSlides }
              </span>
            </div>
          }
          {controlsType !== 'styled' && controlsType !== 'styledNoFractions' &&
            <div className={classnames(css.buttons, 'swiper-controls')}>
              <button className={classnames(css.btn, css.btnBefore, { [css.btnDisabled]: activeIndex === 0 })} onClick={goPrev}>
                Предыдущий слайд
                <IconArrow className={css.icon} />
              </button>
              <button className={classnames(css.btn, css.btnNext, { [css.btnDisabled]: swiper && swiper.isEnd })} onClick={goNext}>
                Следующий слайд
                <IconArrow className={css.icon} />
              </button>
            </div>
          }
        </div>
      }
      {(controlsType === 'styled' || controlsType === 'styledNoFractions') &&
        <div className={classnames(css.buttonsStyled, 'swiper-controls')}>
          <ButtonSlider type='prev' className={css.btnStyled} handleClick={goPrev} isDisabled={swiper && swiper.isBeginning} />
          <ButtonSlider  className={css.btnStyled} handleClick={goNext} isDisabled={swiper && swiper.isEnd} />
        </div>
      }
    </div>
  )
}

SliderCards.propTypes = {
  // Slider slides
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  // External class name for additioinal styles tuning
  className: PropTypes.string,
  // Controls style preset
  controlsType: PropTypes.oneOf(['minimalist', 'styled', 'styledNoFractions']),
  // Flag to turn on / off the swiper free mode
  freeMode: PropTypes.bool,
  // Adjustable slides per view quantity
  slides: PropTypes.number,
}

export default React.memo(SliderCards)
