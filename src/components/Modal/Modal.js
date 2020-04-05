import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import css from './Modal.module.scss'
import Container from 'components/Grid/Container'
import IconClose from 'containers/Header/_assets/IconClose'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import PropTypes from 'prop-types'

const Modal = ({
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
    let wrapper = wrapperRef.current || null

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
        <Container className={css.container}>
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
        </Container>}
      </div>
    </>
  )
}

Modal.propTypes = {
  // visibility status of modal
  isVisible: PropTypes.bool,
  // content of modal as a props, ignored in children exist
  content: PropTypes.element,
  // content of modal as children
  children: PropTypes.element,
  // modal close handler
  handleCloseModal: PropTypes.func
}

export default React.memo(Modal)
