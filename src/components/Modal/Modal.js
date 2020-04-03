import React, { Component } from 'react'
import classnames from 'classnames'
import css from './Modal.module.scss'
import Container from 'components/Grid/Container'
import IconClose from 'containers/Header/_assets/IconClose'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

class Modal extends Component {
  constructor (props) {
    super(props)

    this.wrapperRef = null
    this.contentRef = null
  }

  state = {
    isClosing: false
  }

  componentDidMount () {
    if (this.wrapperRef) {
      this.wrapperRef.addEventListener('click', this.handleClickWrapper)
      document.addEventListener('keydown', this.handleEscPress)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.isVisible && this.props.isVisible) {
      disableBodyScroll(this.wrapperRef, { reserveScrollBarGap: true })
    }
  }

  componentWillUnmount () {
    this.wrapperRef && this.wrapperRef.removeEventListener('click', this.handleClickWrapper)
    document.removeEventListener('keydown', this.handleEscPress)
  }

  UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
    if (nextProps.isVisible && this.state.isClosing) {
      this.setState({
        isClosing: false
      })
    }
  }

  setWrapperRef = el => {
    this.wrapperRef = el
  }

  setContentRef = el => {
    this.contentRef = el
  }

  handleClickWrapper = evt => {
    if (!this.contentRef.contains(evt.target)) {
      this.closeModal()
    }
  }

  handleEscPress = evt => {
    if (evt.keyCode === 27 && this.props.isVisible) {
      this.closeModal()
    }
  }

  handleModalClosing = () => {
    if (this.state.isClosing) {
      enableBodyScroll(this.wrapperRef)
      this.setState({
        isClosing: false
      })
      this.wrapperRef.removeEventListener('animationend', this.handleModalClosing)
    }
  }

  closeModal = () => {
    this.setState({
      isClosing: true
    })
    this.props.handleCloseModal()
    // body-scroll-lock adds padding-right for scroll bar space imitation. To avoid content
    // shift at the end of modal close, we postpone enablebodyscroll with padding removal until
    // close animation ends
    this.wrapperRef.addEventListener('animationend', this.handleModalClosing)
  }


  render () {
    const {
      isVisible = false,
      content = null,
      children
    } = this.props
    const { isClosing } = this.state

    return (
      <div
        className={classnames(css.wrapper, {
          [css.wrapperVisible]: isVisible && !isClosing,
          [css.wrapperClosing]: isClosing
        })}
        ref={this.setWrapperRef}
      >
        <Container className={css.container}>
          <div className={css.content} ref={this.setContentRef}>
            <button
              className={css.btn}
              onClick={() => this.closeModal()}
            >
              <IconClose className={css.icon} />
              Закрыть модальное окно
            </button>
            {content || children}
          </div>
        </Container>
      </div>
    )
  }
}

export default Modal
