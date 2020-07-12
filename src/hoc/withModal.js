import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'components/Modal/Modal'
import { closeModal } from 'store/actions'
import css from './withModal.module.scss'
import { images, videos } from 'index'

const withModal = (WrappedComponent) => {
  return (props) => {
    const modal = useSelector(state => state.ui)
    const dispatch = useDispatch();
    const videoRef = useRef(null)

    useEffect(() => {
      // reset video playtime in modal when it opens
      if (modal.isModalOpen && modal.videoFile) {
        videoRef.current.load()
      }
    }, [modal.isModalOpen, modal.videoFile])

    return (
      <>
      <WrappedComponent {...props} />
      <Modal isVisible={modal.isModalOpen} handleCloseModal={() => dispatch(closeModal())}>
        <>
          {modal.imageFile && <img className={css.image} src={images('./' + modal.imageFile)} alt='Изображения в модальном окне'/>}
          {modal.videoFile && <video className={css.video} controls autoPlay ref={videoRef}>
            <source src={videos('./' + modal.videoFile)} />
          </video>}
          { modal.content }
        </>
      </Modal>
      </>
    )
  }
}

export default withModal
