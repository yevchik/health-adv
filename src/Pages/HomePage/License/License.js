import React, { useState } from 'react'
import css from './License.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import { images } from 'App'
import Modal from 'components/Modal/Modal'
import SliderCards from 'components/SliderCards/SliderCards'

const License = ({ title = 'Лицензии', list }) => {
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
      <Container className={css.container}>
        <Heading content={title} />
        <SliderCards
          className={css.slider}
          desktopControls='styledNoFractions'
          desktopFreeMode
        >
          { listItems }
        </SliderCards>
      </Container>
      <Modal isVisible={modalStatus.isOpened} handleCloseModal={handleCloseModal} >
        { modalStatus.content }
      </Modal>
    </section>
  )
}

export default License
