import React, { useState } from 'react'
import css from './SliderDoctors.module.scss'
import { createSubArrays } from 'utils'
import ButtonSlider from 'components/ButtonSlider/ButtonSlider'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import { Link } from 'react-router-dom'
import { images } from 'App'
import Button from 'components/Button/Button'
import { useSelector } from 'react-redux'
import IconQuotes from 'assets/icons/IconQuotes'

const SliderDoctors = ({ title, list }) => {
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const type = useSelector(state => state.elastic.deviceType)
  const [swiper, setSwiper] = useState(null);

  createSubArrays(list, 4)


  const goNext = () => {
    if (swiper) swiper.slideNext()
  }

  const goPrev = () => {
    if (swiper) swiper.slidePrev()
  }

  const pxToRemRatio = px => Math.floor(px * fontSize / 10)
  console.log(pxToRemRatio(20))

  const paramsAdaptive = {
    slidesPerView: 'auto',
    speed: 1000,
    effect: 'slide',
    breakpoints: {
      768: {
        freeMode: true,
        freeModeSticky: true,
      }
    },
    getSwiper: setSwiper
  }

  const paramsDesktop = {
    slidesPerView: 1,
    spaceBetween: 20 * fontSize / 10,
    speed: 1000,
    effect: 'fade',
    getSwiper: setSwiper
  }

  const sliderContentAdaptive = list.map((item, index) => {
    return item.url
    ? (
      <div className={css.card} key={index}>
        <Link to={item.url} className={css.link}>
          <figure className={css.cardContent}>
            <div className={css.frame}>
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
              <Button className={css.btnAll} btnStyle='decorated' label='Все врачи' />
            </figcaption>
          </figure>
        </Link>
      </div>
      )
    : (
        <div className={css.card} key={index}>
          <figure className={css.cardContent}>
            <div className={css.frame}>
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
              <blockquote className={css.quote} dangerouslySetInnerHTML={{ __html: item.quote }} />
              <Button className={css.btnAll} btnStyle='decorated' label='Все врачи' />
            </figcaption>
          </figure>
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
                { sliderContentAdaptive }
              </Swiper>
            }
            <div className={css.controls}>
              <ButtonSlider type='prev' handleClick={goPrev} />
              <ButtonSlider className={css.btnNext} type='next' handleClick={goNext} />
            </div>
          </div>
      </Container>
    </section>
  )
}

export default SliderDoctors
