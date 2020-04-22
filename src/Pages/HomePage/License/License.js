import React, { useState } from 'react'
import css from './License.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import { images } from 'index'
import Modal from 'components/Modal/Modal'
import SliderCards from 'components/SliderCards/SliderCards'
import { createSubArrays } from 'utils'

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

  const structuredList = createSubArrays(list, 4)

  const listItems = structuredList.map((sublist, index) => {
    const innerList = sublist.map((item, indexInner) => (
      <div className={css.item} key={item.label + '-' + indexInner}>
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
          <span className={css.label} dangerouslySetInnerHTML={{__html: item.label}} />
        </button>
      </div>
    ))

    return (
      <div className={css.slideWrapper} key={`Sublist #${index}`}>
        {innerList}
      </div>
    )
  })

  return (
    <section>
      <Container className={css.container}>
        <Heading content={title} />
        <SliderCards
          className={css.slider}
          controlsType='styledNoFractions'
          slides={1}
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

export default React.memo(License)
