import React, { useEffect, useRef, useState } from 'react'
import css from './VideoBannerMobile.module.scss'
import { images, videos } from 'index'
import ModalMobile from 'components/Modal/ModalMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonPlayMobile from 'components/ButtonPlay/ButtonPlayMobile'
import ButtonMobile from 'components/Button/ButtonMobile'

const VideoBannerMobile = ({
  top,
  bottom,
}) => {
  const videoRef = useRef(null)
  const [isModalVisible, setModalVisibilityStatus] = useState(false)
  const type = useSelector(state => state.elastic.deviceType)

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

  const background = type === 'mobile'
    ? `url("${ images('./' + bottom.backgroundMobile) }")`
    : `url("${ images('./' + bottom.backgroundTablet) }")`

  return (
    <section>
      <div className={css.bg} style={{ backgroundImage: background }} />
      <ContainerMobile className={css.top}>
        <ButtonPlayMobile
          className={css.play}
          background={'none'}
          label='Видео о клинике'
          handleClick={handleOpenModal}
        />
      </ContainerMobile>
      <div className={css.content}>
        <ContainerMobile className={css.container}>
          <div className={css.textContent}>
            <p className={css.sloganAdaptive} dangerouslySetInnerHTML={{ __html: bottom.sloganAdaptive }} />
            <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: bottom.descriptor }} />
          </div>
          <div className={css.btn}>
            <ButtonMobile
              btnStyle={type === 'desktop' ? 'gradient' : 'decorated'}
              type='button'
              onClick={() => {}}
              label='Записаться'
              handleClick={() => {}}
            />
          </div>
        </ContainerMobile>
      </div>
      <ModalMobile isVisible={isModalVisible} handleCloseModal={handleCloseModal}>
        <video className={css.video} controls autoPlay ref={videoRef}>
          <source src={videos('./' + top.modalVideo)} />
        </video>
      </ModalMobile>
    </section>
  )
}

VideoBannerMobile.propTypes = {
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

export default React.memo(VideoBannerMobile)
