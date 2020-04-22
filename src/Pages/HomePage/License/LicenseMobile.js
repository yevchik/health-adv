import React, { useState } from 'react'
import css from './LicenseMobile.module.scss'
import Heading from 'components/Heading/Heading'
import { images } from 'index'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import ModalMobile from 'components/Modal/ModalMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'

const LicenseMobile = ({ title = 'Лицензии', list }) => {
  const [modalStatus, setModalStatus] = useState({
    isOpened: false,
    content: null
  })

  const handleClickModalTrigger = (label, fullImageUrl) => {
    setModalStatus({
      isOpened: true,
      content: (
        <img className={css.fullImage} src={images('./' + fullImageUrl)} alt={`Фото ${label}`} />
      )
    })
  }

  const handleCloseModal = () => {
    setModalStatus(prevState => ({
      ...prevState,
      isOpened: false
    }))
  }

  const listItems = list.map((item, index) => (
    <div className={css.item} key={item.label + '-' + index}>
      <button
        className={css.trigger}
        onClick={() => handleClickModalTrigger(item.label, item.fullImage)}
        type='button'
      >
        <img
          className={css.previewImage}
          src={images('./' + item.previewImage)}
          alt={`Фото ${item.label}`}
        />
        <span className={css.label} dangerouslySetInnerHTML={{ __html: item.label }} />
      </button>
    </div>
  ))

  return (
    <section>
      <ContainerMobile className={css.container}>
        <Heading content={title} />
        <SliderCardsMobile
          className={css.slider}
          controlsType='styledNoFractions'
          freeMode
        >
          { listItems }
        </SliderCardsMobile>
      </ContainerMobile>
      <ModalMobile isVisible={modalStatus.isOpened} handleCloseModal={handleCloseModal} >
        { modalStatus.content }
      </ModalMobile>
    </section>
  )
}

export default LicenseMobile
