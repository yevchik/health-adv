import React, { useEffect, useState } from 'react'
import css from './SliderCards.module.scss'
import classnames from 'classnames'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import IconArrow from 'assets/icons/IconArrow'
import ButtonSlider from 'components/ButtonSlider/ButtonSlider'

const SliderCards = ({
  className,
  children,
  type,
  slides = 1,
  controlsType = 'minimalist',
  freeMode = false
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [swiper, setSwiper] = useState(null)

  const goNext = () => {
    if (swiper) {
      swiper.slideNext()
      setActiveIndex(state => state + 1)
    }
  }

  const goPrev = () => {
    if (swiper) swiper.slidePrev()
    setActiveIndex(state => state - 1)
  }

  useEffect(() => {
    if (swiper) {
      swiper.update()
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
    spaceBetween: freeMode ? 0 : 15,
  }

  return (
    <div className={classnames(css.wrapper, className, { [css.wrapperSingle]: type === 'single' })}>
      <Swiper {...params} getSwiper={setSwiper}>
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
            <div className={css.buttons}>
              <button className={classnames(css.btn, css.btnBefore, { [css.btnDisabled]: activeIndex === 0 })} onClick={goPrev}>
                Предыдущий слайд
                <IconArrow className={css.icon} />
              </button>
              <button className={classnames(css.btn, css.btnNext, { [css.btnDisabled]: swiper && activeIndex === swiper.slides.length - 1 })} onClick={goNext}>
                Следующий слайд
                <IconArrow className={css.icon} />
              </button>
            </div>
          }
        </div>
      }
      {(controlsType === 'styled' || controlsType === 'styledNoFractions') &&
        <div className={css.buttonsStyled}>
          <ButtonSlider type='prev' className={css.btnStyled} handleClick={this.goPrev} isDisabled={swiper && swiper.isBeginning} />
          <ButtonSlider  className={css.btnStyled} handleClick={this.goNext} isDisabled={swiper && swiper.isEnd} />
        </div>
      }
    </div>
  )
}

export default React.memo(SliderCards)
