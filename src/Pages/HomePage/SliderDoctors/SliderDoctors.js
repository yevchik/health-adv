import React, { useEffect, useState } from 'react'
import css from './SliderDoctors.module.scss'
import { createSubArrays } from 'utils'
import ButtonSlider from 'components/ButtonSlider/ButtonSlider'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import { images } from 'App'
import Button from 'components/Button/Button'
import { useSelector } from 'react-redux'
import IconQuotes from 'assets/icons/IconQuotes'
import IconDotsBgDark from 'assets/icons/IconDotsBgDark'
import classnames from 'classnames'

const SliderDoctors = ({ title, list }) => {
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const type = useSelector(state => state.elastic.deviceType)
  const [ activeTab, setActiveTab ] = useState(0)
  const [swiperAdaptive, setSwiperAdaptive] = useState(null)
  const [swiperDesktop, setSwiperDesktop] = useState(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  useEffect(() => {
    applySwiperListeners(swiperAdaptive)
    applySwiperListeners(swiperDesktop)
  }, [swiperAdaptive, swiperDesktop, type])

  function applySwiperListeners (swiper) {
    // we have two swipers, one for adaptive and one for desktop. When one is initiated, another
    // one is destroyed so we have to check both cases
    if (swiper !== null && !swiper.destroyed) {
      swiper.on('beforeDestroy', () => {
        setIsBeginning(true)
        setIsEnd(false)
      })
      swiper.on('slideChange', () => {
        if (swiper.isBeginning) {
          setIsBeginning(true)
        } else {
          setIsBeginning(false)
        }
        if (swiper.isEnd) {
          setIsEnd(true)
        } else {
          setIsEnd(false)
        }
      })
    }
  }

  const goNext = () => {
    if (swiperAdaptive && !swiperAdaptive.destroyed) {
      swiperAdaptive.slideNext()
    }
    if (swiperDesktop && !swiperDesktop.destroyed) {
      swiperDesktop.slideNext()
    }
  }

  const goPrev = () => {
    if (swiperAdaptive && !swiperAdaptive.destroyed) {
      swiperAdaptive.slidePrev()
    }
    if (swiperDesktop && !swiperDesktop.destroyed) {
      swiperDesktop.slidePrev()
    }
  }

  const handleClickTab = index => {
    setActiveTab(index)
    // Timeout to update swiper height according to active tab content height after index switch
    setTimeout(() => {
      swiperDesktop && swiperDesktop.update()
    })
  }

  const paramsAdaptive = {
    slidesPerView: 'auto',
    speed: 700,
    effect: 'slide',
    breakpoints: {
      768: {
        freeMode: true,
        freeModeSticky: true,
        speed: 1500
      }
    },
    getSwiper: setSwiperAdaptive
  }

  const paramsDesktop = {
    slidesPerView: 1,
    spaceBetween: 20 * fontSize / 10,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    getSwiper: setSwiperDesktop
  }

  // Internal slide structure common for both desktop and adaptive
  const slideContentArea = (item, index) => (
    <div className={css.card} key={index}>
      <figure className={css.cardContent}>
        <div className={css.frame}>
          <IconDotsBgDark className={css.iconDots} />
          <img
            className={css.photo}
            src={images('./' + item.photo)}
            alt={item.name}
          />
        </div>
        <figcaption className={css.info}>
          <p className={css.name}>
            {item.name}
          </p>
          <p className={css.expertise}>
            {item.expertise}
          </p>
          <address className={css.address} dangerouslySetInnerHTML={{__html: item.address}} />
          <blockquote className={css.quote}>
            <IconQuotes className={css.iconQuote} />
            <span dangerouslySetInnerHTML={{ __html: item.quote }} />
          </blockquote>
          <Button className={css.btnAll} url={item.url} btnStyle='decorated' label='Подробнее о враче' />
        </figcaption>
      </figure>
    </div>
  )

  const sliderContentAdaptive = list.map((item, index) => {
    return slideContentArea(item, index)
  })

  const sliderContentDesktop = createSubArrays(list, 4).map((slide, index) => {
    const tabs = []
    return (
      <div className={css.slide} key={index}>
        {slide.map((item, index) => {
          const tab = (
            <li className={css.tab} key={index}>
              <button
                className={classnames(css.tabSwitch, {
                  [css.tabSwitchSelected]: activeTab === index
                })}
                type='button'
                onClick={() => handleClickTab(index)}
                aria-label={`Показать информацию о враче ${item.name}`}
              >
                <span className={css.btnName}>
                  { item.name }
                </span>
                <span className={css.btnExpertise}>
                  { item.expertise }
                </span>
              </button>
            </li>
          )
          tabs.push(tab)
          return (
            <div className={css.tabContent} key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
              { slideContentArea(item, index) }
            </div>
          )
        })}
        <ul className={css.tabs}>
          {tabs.map((item) => item)}
        </ul>
      </div>
      )
  })

  return (
    <section className={css.section}>
      <Container>
          <Heading content={title} />
          <div className={css.slider}>
            {type !== 'desktop' &&
              <Swiper {...paramsAdaptive}>
                { sliderContentAdaptive }
              </Swiper>
            }
            {type === 'desktop' &&
              <Swiper {...paramsDesktop}>
                { sliderContentDesktop }
              </Swiper>
            }
            <div className={css.controls}>
              <ButtonSlider type='prev' handleClick={goPrev} isDisabled={isBeginning} />
              <ButtonSlider className={css.btnNext} type='next' handleClick={goNext} isDisabled={isEnd} />
            </div>
          </div>
      </Container>
    </section>
  )
}

export default SliderDoctors
