import React from 'react'
import classnames from 'classnames'
import css from './Modal.module.scss'
import Container from 'components/Grid/Container'
import IconClose from 'containers/Header/_assets/IconClose'

const Modal = ({ isVisible, children, handleCloseModal }) => (
  <div className={classnames(css.wrapper, {
    [css.wrapperVisible]: isVisible
  })}>
    <Container className={css.container}>
      <div className={css.content}>
        <button
          className={css.btn}
          onClick={handleCloseModal}
        >
          <IconClose className={css.icon} />
          Закрыть модальное окно
        </button>
        { children }
      </div>
    </Container>
  </div>
)

export default Modal
