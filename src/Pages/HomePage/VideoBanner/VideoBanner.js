import React, { useEffect, useRef, useState } from 'react'
import css from './VideoBanner.module.scss'
import Container from 'components/Grid/Container'
import Button from 'components/Button/Button'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import Modal from 'components/Modal/Modal'
import IconDots from 'assets/icons/IconDots'
import classnames from 'classnames'
import { images, videos } from 'index'
import PropTypes from 'prop-types'

const VideoBanner = ({
  top,
  bottom,
}) => {
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
    <section>
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
              onClick={() => {}}
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
    </section>
  )
}

VideoBanner.propTypes = {
  top: PropTypes.shape({
    slogan: PropTypes.string,
    previewLabel: PropTypes.string,
    modalVideo: PropTypes.string,
    modalVideoPreview: PropTypes.string,
  }),
  bottom: PropTypes.shape({
    sloganAdaptive: PropTypes.string,
    sloganDesktop: PropTypes.string,
    backgroundMobile: PropTypes.string,
    backgroundTablet: PropTypes.string,
    descriptor: PropTypes.string,
    videoBg: PropTypes.string,
  })
}

export default React.memo(VideoBanner)
