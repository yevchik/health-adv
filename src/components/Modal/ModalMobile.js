import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import css from 'components/Modal/ModalMobile.module.scss'
import IconClose from 'containers/Header/_assets/IconClose'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import ContainerMobile from 'components/Grid/ContainerMobile'

const ModalMobile = ({
  isVisible = false,
  content = null,
  children,
  handleCloseModal
}) => {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)
  const [isClosing, setClosingStatus] = useState(false)

  const closeModal = () => {
    setClosingStatus(true)
  }

  useEffect(() => {
    const handleClickWrapper = evt => {
      if (!contentRef.current.contains(evt.target)) {
        closeModal()
      }
    }

    const handleEscPress = evt => {
      if (evt.keyCode === 27 && isVisible) {
        closeModal()
      }
    }

    let wrapper = null
    if (wrapperRef.current && isVisible) {
      wrapper = wrapperRef.current
      wrapperRef.current.addEventListener('click', handleClickWrapper)
      document.addEventListener('keydown', handleEscPress)
    }

    return () => {
      wrapper.removeEventListener('click', handleClickWrapper)
      document.removeEventListener('keydown', handleEscPress)
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      disableBodyScroll(wrapperRef.current, { reserveScrollBarGap: true })
    }
  }, [isVisible])

  useEffect(() => {
    const handleModalClosing = () => {
      if (isClosing) {
        enableBodyScroll(wrapperRef.current)
        setClosingStatus(false)
        handleCloseModal()
        wrapperRef.current.removeEventListener('animationend', handleModalClosing)
      }
    }

    if (isClosing) {
      // body-scroll-lock adds padding-right for scroll bar space imitation. To avoid content
      // shift at the end of modal close, we postpone enablebodyscroll with padding removal until
      // close animation ends
      wrapperRef.current.addEventListener('animationend', handleModalClosing)

    }
  }, [isClosing, handleCloseModal])

  return (
    <>
      <div
        className={classnames(css.wrapper, {
          [css.wrapperVisible]: isVisible && !isClosing,
          [css.wrapperClosing]: isClosing
        })}
        ref={wrapperRef}
      >
        {isVisible &&
        <ContainerMobile className={css.container}>
          <div className={css.content} ref={contentRef}>
            <button
              className={css.btn}
              onClick={() => closeModal()}
            >
              <IconClose className={css.icon} />
              Закрыть модальное окно
            </button>
            {content || children}
          </div>
        </ContainerMobile>}
      </div>
    </>
  )
}

export default React.memo(ModalMobile)
