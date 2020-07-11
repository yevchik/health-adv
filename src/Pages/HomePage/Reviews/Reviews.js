import React, { useRef, useState } from 'react'
import css from './Reviews.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import SliderCards from 'components/SliderCards/SliderCards'
import Modal from 'components/Modal/Modal'
import classnames from 'classnames'
import { decodeHTMLCharacters } from 'utils'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { images, videos } from 'index'
import { MAX_COMMENT_PREVIEW_LENGTH } from 'utils/const'

const Reviews = ({ title, list }) => {
  const [modal, setModalStatus] = useState({
    isVisible: false,
    content: null
  })

  const reviewTextRef = useRef(null)

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

  const handlePlayVideo = video => {
    setModalStatus({
      isVisible: true,
      content: (
        <video className={css.video} muted autoPlay>
          <source src={videos('./' + video)} />
        </video>
      )
    })
  }

  const getSlides = (modal = false) => {
    return list.map((slide, index) => {
      let pureText = ''
      let isButtonRequired = false
      if (!modal) {
        pureText = decodeHTMLCharacters(slide.text)
        isButtonRequired = pureText.length > MAX_COMMENT_PREVIEW_LENGTH
        pureText = pureText.length > MAX_COMMENT_PREVIEW_LENGTH
          ? pureText.slice(0, MAX_COMMENT_PREVIEW_LENGTH) + '&hellip;'
          : slide.text
      }
      return (
        <div className={classnames(css.slide, { [css.slideModal]: modal })} key={index}>
          <div className={css.contentText}>
            <div className={css.author}>
              <p className={css.name}>
                {slide.name + ','}
              </p>
              <span className={css.date}>
                {slide.date}
              </span>
            </div>
            <p
              className={css.text}
              dangerouslySetInnerHTML={{__html: modal ? slide.text : pureText}}
              ref={reviewTextRef}
            />
            {isButtonRequired &&
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
         {slide.video && !modal &&
          <ButtonPlay
            className={css.btnPlay}
            background={`url("${images('./' + slide.preview)}")`}
            handleClick={() => handlePlayVideo(slide.video)}
          />
         }
          {!slide.video && !modal &&
            <img src={images('./' + slide.preview)} className={css.img} alt='Фотография респондента' />
          }
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
          <SliderCards className={css.slider} controlsType='styled'>
            { slides }
          </SliderCards>
        </Container>
      </article>
      <Modal isVisible={modal.isVisible} handleCloseModal={handleCloseModal}>
        { modal.content }
      </Modal>
    </>
  )
}

export default Reviews
