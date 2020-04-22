import React, { useEffect, useState } from 'react'
import css from './SliderDoctors.module.scss'
import { createSubArrays } from 'utils'
import ButtonSlider from 'components/ButtonSlider/ButtonSlider'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import { images } from 'index'
import Button from 'components/Button/Button'
import IconQuotes from 'assets/icons/IconQuotes'
import IconDotsBgDark from 'assets/icons/IconDotsBgDark'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const SliderDoctors = ({ title, list }) => {
  const [ activeTab, setActiveTab ] = useState(0)
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setSliderToBeginning] = useState(true)
  const [isEnd, setSliderToEnd] = useState(false)


  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveTab(0)
        if (swiper.isEnd) setSliderToEnd(true)
        if (!swiper.isEnd && isEnd) setSliderToEnd(false)
        if (swiper.isBeginning) setSliderToBeginning(true)
        if (!swiper.isBeginning && isBeginning) setSliderToBeginning(false)
      })
    }
  }, [swiper, isEnd, isBeginning])

  const goNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  const handleClickTab = index => {
    setActiveTab(index)
  }

  const params = {
    slidesPerView: 1,
    speed: 1000,
    effect: 'fade',
    simulateTouch: false,
    fadeEffect: {
      crossFade: true
    },
  }

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
          {item.address && <address className={css.address} dangerouslySetInnerHTML={{__html: item.address}} />}
          <blockquote className={css.quote}>
            <IconQuotes className={css.iconQuote} />
            <span dangerouslySetInnerHTML={{ __html: item.quote }} />
          </blockquote>
          <Button
            className={css.btnAll}
            url={item.url}
            btnStyle='decorated'
            label='Подробнее о враче'
            handleClick={() => {}}
          />
        </figcaption>
      </figure>
    </div>
  )

  const sliderContent = createSubArrays(list, 4).map((slide, index) => {
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
                  {item.name}
                </span>
                <span className={css.btnExpertise}>
                  {item.expertise}
                </span>
              </button>
            </li>
          )
          tabs.push(tab)
          return (
            <div className={css.tabContent} key={index}
                 style={{display: activeTab === index ? 'block' : 'none'}}>
              {slideContentArea(item, index)}
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
            <Swiper {...params} getSwiper={setSwiper}>
              { sliderContent }
            </Swiper>
            <div className={css.controls}>
              <ButtonSlider type='prev' handleClick={goPrev} isDisabled={isBeginning} />
              <ButtonSlider className={css.btnNext} type='next' handleClick={goNext} isDisabled={isEnd} />
            </div>
          </div>
      </Container>
    </section>
  )
}

SliderDoctors.propTypes = {
  // section heading
  title: PropTypes.string,
  // data from API
  list: PropTypes.arrayOf(
    PropTypes.shape({
      // link to doctor's page
      url: PropTypes.string,
      // doctor's name
      name: PropTypes.string,
      // doctors field of expertise
      expertise: PropTypes.string,
      // doctor's location in case of network of medical centers
      address: PropTypes.string,
      // doctor's photo
      photo: PropTypes.string,
      // doctor's quote
      quote: PropTypes.string
    })
  )
}

export default React.memo(SliderDoctors)
