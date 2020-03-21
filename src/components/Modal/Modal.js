import React, { Component } from 'react'
import classnames from 'classnames'
import css from './Modal.module.scss'
import Container from 'components/Grid/Container'
import IconClose from 'containers/Header/_assets/IconClose'

class Modal extends Component {
  state = {
    isClosing: false
  }

  UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
    if (nextProps.isVisible && this.state.isClosing) {
      this.setState({
        isClosing: false
      })
    }
  }

  render () {
    const { isVisible, children, handleCloseModal } = this.props
    const { isClosing } = this.state

    return (
      <div className={classnames(css.wrapper, {
        [css.wrapperVisible]: isVisible,
        [css.wrapperClosing]: isClosing
      })}>
        <Container className={css.container}>
          <div className={css.content}>
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
