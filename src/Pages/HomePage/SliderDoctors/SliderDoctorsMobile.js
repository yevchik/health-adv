import React, { useEffect, useState } from 'react'
import css from './SliderDoctorsMobile.module.scss'
import Heading from 'components/Heading/Heading'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import { images } from 'index'
import IconQuotes from 'assets/icons/IconQuotes'
import IconDotsBgDark from 'assets/icons/IconDotsBgDark'
import PropTypes from 'prop-types'
import ContainerMobile from 'components/Grid/ContainerMobile'
import ButtonMobile from 'components/Button/ButtonMobile'
import ButtonSlider from 'components/ButtonSlider/ButtonSlider'

const SliderDoctorsMobile = ({ title, list }) => {
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setSliderToBeginning] = useState(true)
  const [isEnd, setSliderToEnd] = useState(false)

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
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

  const paramsAdaptive = {
    slidesPerView: 1,
    speed: 700,
    effect: 'slide',
    spaceBetween: 20,
    breakpoints: {
      768: {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        freeModeSticky: true,
        freeModeMomentum: false,
        speed: 1500,
      }
    },
    getSwiper: setSwiper
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
          <ButtonMobile
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

  const sliderContentAdaptive = list.map((item, index) => {
    return slideContentArea(item, index)
  })

  return (
    <section className={css.section}>
      <ContainerMobile>
          <Heading content={title} />
          <div className={css.slider}>
            <Swiper {...paramsAdaptive}>
              { sliderContentAdaptive }
            </Swiper>
            <div className={css.controls}>
              <ButtonSlider type='prev' handleClick={goPrev} isDisabled={isBeginning} />
              <ButtonSlider className={css.btnNext} type='next' handleClick={goNext} isDisabled={isEnd} />
            </div>
          </div>
      </ContainerMobile>
    </section>
  )
}

SliderDoctorsMobile.propTypes = {
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

export default SliderDoctorsMobile
