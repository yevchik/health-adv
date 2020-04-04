import React, { useEffect, useRef, useState } from 'react'
import css from './VideoBannerMobile.module.scss'
import Button from 'components/Button/Button'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { images, videos } from 'index'
import ModalMobile from 'components/Modal/ModalMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'

const VideoBannerMobile = ({
  top,
  bottom,
  type
}) => {
  const videoRef = useRef(null)
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

  const background = type === 'mobile'
    ? `url("${ images('./' + bottom.backgroundMobile) }")`
    : `url("${ images('./' + bottom.backgroundTablet) }")`

  return (
    <section>
      <div className={css.bg} style={{ backgroundImage: background }} />
      <ContainerMobile className={css.top}>
        <ButtonPlay
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
            <Button
              btnStyle={type === 'desktop' ? 'gradient' : 'decorated'}
              type='button'
              onClick={() => {}}
              label='Записаться'
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

export default React.memo(VideoBannerMobile)
