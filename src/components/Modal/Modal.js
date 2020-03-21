import React, { Component } from 'react'
import classnames from 'classnames'
import css from './Modal.module.scss'
import Container from 'components/Grid/Container'
import IconClose from 'containers/Header/_assets/IconClose'

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
    this.wrapperRef.addEventListener('click', this.handleClickWrapper)
  }

  componentWillUnmount () {
    this.wrapperRef.removeEventListener('click', this.handleClickWrapper)
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
      this.props.handleCloseModal()
    }
  }

  render () {
    const { isVisible, children, handleCloseModal } = this.props
    const { isClosing } = this.state

    return (
      <div
        className={classnames(css.wrapper, {
          [css.wrapperVisible]: isVisible,
          [css.wrapperClosing]: isClosing
        })}
        ref={this.setWrapperRef}
      >
        <Container className={css.container}>
          <div className={css.content} ref={this.setContentRef}>
            <button
              className={css.btn}
              onClick={() => {
                this.setState({
                  isClosing: true
                })
                handleCloseModal()
              }}
            >
              <IconClose className={css.icon} />
              Закрыть модальное окно
            </button>
            {children}
          </div>
        </Container>
      </div>
    )
  }
}

export default Modal
