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

  useEffect(() => {
    if (wrapperRef.current && isVisible) {
      wrapperRef.current.addEventListener('click', handleClickWrapper)
      document.addEventListener('keydown', handleEscPress)
    }

    return () => {
      wrapperRef.current.removeEventListener('click', handleClickWrapper)
      document.removeEventListener('keydown', handleEscPress)
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      disableBodyScroll(wrapperRef.current, { reserveScrollBarGap: true })
    }
  }, [isVisible])

  useEffect(() => {
    if (isClosing) {
      // body-scroll-lock adds padding-right for scroll bar space imitation. To avoid content
      // shift at the end of modal close, we postpone enablebodyscroll with padding removal until
      // close animation ends
      wrapperRef.current.addEventListener('animationend', handleModalClosing)

    }
  }, [isClosing])

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

  const handleModalClosing = () => {
    if (isClosing) {
      enableBodyScroll(wrapperRef.current)
      setClosingStatus(false)
      handleCloseModal()
      wrapperRef.current.removeEventListener('animationend', handleModalClosing)
    }
  }

  const closeModal = () => {
    setClosingStatus(true)
  }

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