import React, { useEffect, useRef, useState } from 'react'
import css from './ReviewsMobile.module.scss'
import Heading from 'components/Heading/Heading'
import classnames from 'classnames'
import { decodeHTMLCharacters } from 'utils'
import { images, videos } from 'index'
import ButtonPlayMobile from 'components/ButtonPlay/ButtonPlayMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import ModalMobile from 'components/Modal/ModalMobile'

const ReviewsMobile = ({ title, list }) => {
  const [modal, setModalStatus] = useState({
    isVisible: false,
    content: null
  })

  const reviewTextRef = useRef(null)

  const handleReviewScroll = element => {
    if (element.target.scrollTop !== 0) {
      element.target.classList.remove(`${[css.textCut]}`)
    } else {
      element.target.classList.add(`${[css.textCut]}`)
    }
  }

  useEffect(() => {
    if (modal.isVisible && reviewTextRef.current) {
      const reviewElement = reviewTextRef.current
      const reviewBoundingHeight = reviewElement.getBoundingClientRect().height
      const reviewTotalHeight = reviewElement.scrollHeight

      if (reviewTotalHeight > reviewBoundingHeight) {
        reviewElement.classList.add(`${[css.textCut]}`)
        reviewElement.addEventListener('scroll', handleReviewScroll)
      }
    }

    if (!modal.isVisible && reviewTextRef.current) {
      reviewTextRef.current.removeEventListener('scroll', handleReviewScroll)
    }
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
        isButtonRequired = pureText.length > 130
        pureText = pureText.length > 130 ? pureText.slice(0, 130) + '&hellip;' : slide.text
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
            <p className={css.text} dangerouslySetInnerHTML={{__html: modal ? slide.text : pureText}} ref={reviewTextRef} />
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
          <ButtonPlayMobile
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
        <ContainerMobile className={css.container}>
          <Heading className={css.tile} content={title} />
          <SliderCardsMobile className={css.slider} controlsType='styled'>
            { slides }
          </SliderCardsMobile>
        </ContainerMobile>
      </article>
      <ModalMobile isVisible={modal.isVisible} handleCloseModal={handleCloseModal}>
        { modal.content }
      </ModalMobile>
    </>
  )
}

export default ReviewsMobile
