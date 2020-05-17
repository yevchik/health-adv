import React, { useEffect, useRef, useState } from 'react'
import css from './VideoBannerType1.module.scss'
import Container from 'components/Grid/Container'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import classnames from 'classnames'
import { images, videos } from 'index'
import IconDots from 'assets/icons/IconDots'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'

const VideoBannerType1 = ({ top, bottom }) => {
  const videoRef = useRef(null)
  const videoBgRef = useRef(null)
  const [isModalVisible, setModalVisibilityStatus] = useState(false)

  useEffect(() => {
    // reset video playtime in modal when it opens
    if (isModalVisible) {
      videoRef.current.load()
    }
  }, [isModalVisible])

  const handleOpenModal = () => {
    setModalVisibilityStatus(true)
  }

  const handleCloseModal = () => {
    setModalVisibilityStatus(false)
  }

  return (
    <>
      <div className={css.bg} />
      <Container className={css.top}>
        <p className={css.mainSlogan} dangerouslySetInnerHTML={{ __html: top.slogan }} />
        <div className={css.previewWrapper}>
          <h2 className={css.previewLabel}>
            { top.previewLabel }
          </h2>
          <ButtonPlay
            className={classnames(css.play, css.preview)}
            background={`url("${ images('./' + top.modalVideoPreview) }")`}
            label={''}
            handleClick={handleOpenModal}
          />
        </div>
      </Container>
      <div className={css.content}>
        <video className={css.videoBg} muted='muted' autoPlay='autoplay' loop='loop' ref={videoBgRef} preload='preload'>
          <source src={videos('./' + bottom.videoBg)} />
        </video>
        <Container className={css.container}>
          <IconDots className={css.dots} />
          <div className={css.textContent}>
            <p className={css.sloganDesktop} dangerouslySetInnerHTML={{ __html: bottom.sloganDesktop }} />
            <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: bottom.descriptor }} />
          </div>
          <div className={css.btn}>
            <Button
              btnStyle='gradient'
              type='button'
              handleClick={() => {}}
              label='Записаться'
            />
          </div>
        </Container>
      </div>
      <Modal isVisible={isModalVisible} handleCloseModal={handleCloseModal}>
        <video className={css.video} controls autoPlay ref={videoRef}>
          <source src={videos('./' + top.modalVideo)} />
        </video>
      </Modal>
    </>
  )
}

export default VideoBannerType1
