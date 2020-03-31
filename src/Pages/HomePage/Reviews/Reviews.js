import React, { useState } from 'react'
import css from './Reviews.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import SliderCards from 'components/SliderCards/SliderCards'
import Modal from 'components/Modal/Modal'
import classnames from 'classnames'
import { decodeHTMLCharacters } from 'utils'

const Reviews = ({ title, list }) => {
  const [modal, setModalStatus] = useState({
    isVisible: false,
    content: null
  })

  const handleOpenModal = index => {
    setModalStatus({
      isVisible: true,
      content: modalSlides[index]
    })
  }

  const handleCloseModal = () => {
    setModalStatus(prevState => ({
      ...prevState,
      isVisible: false
    }))
  }

  const getSlides = (modal = false) => {
    return list.map((slide, index) => {
      let pureText = ''
      let isButtonRequired = false
      if (!modal) {
        pureText = decodeHTMLCharacters(slide.text)
        isButtonRequired = pureText.length > 130
        pureText = pureText.length > 130 ? pureText.slice(0, 130) + '&hellip;' : slide.text
      }

      console.log(pureText)
      return (
        <div className={css.slide} key={index}>
          <p className={css.name}>
            {slide.name + ','}
          </p>
          <span className={css.date}>
            {slide.date}
          </span>
          <p className={css.text} dangerouslySetInnerHTML={{__html: modal ? slide.text : pureText}} />
          {!modal && isButtonRequired &&
            <button
              className={css.btn}
              type='button'
              onClick={() => handleOpenModal(index)}
            >
              Отзыв полностью
            </button>
          }
          <span className={classnames(css.specialist, {
            [css.specialistAuto]: !modal && !isButtonRequired
          })}>
            {`Специалист: ${slide.specialist}`}
          </span>
          <span className={css.specialist}>
            {`Услуги: ${slide.services}`}
          </span>
        </div>
      )
    })
  }

  const slides = getSlides()
  const modalSlides = getSlides(true)

  return (
    <>
      <article>
        <Container className={css.container}>
          <Heading className={css.tile} content={title} />
          <SliderCards className={css.slider}>
            { slides }
          </SliderCards>
        </Container>
      </article>
      <Modal isVisible={modal.isVisible} content={modal.content} handleCloseModal={handleCloseModal} />
    </>
  )
}

export default Reviews
