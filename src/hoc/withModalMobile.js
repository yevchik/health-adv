import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeVideoModal } from 'store/actions'
import { images, videos } from 'index'
import ModalMobile from 'components/Modal/ModalMobile'

const withModalMobile = (WrappedComponent) => {
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
      <ModalMobile isVisible={modal.isModalOpen} handleCloseModal={() => dispatch(closeVideoModal())}>
        <>
          {modal.imageFile && <img src={images('./' + modal.imageFile)} alt='Иллюстрация'/>}
          {modal.videoFile && <video controls autoPlay ref={videoRef}>
            <source src={videos('./' + modal.videoFile)} />
          </video>}
          { modal.content && modal.content }
        </>
      </ModalMobile>
      </>
    )
  }
}

export default withModalMobile
