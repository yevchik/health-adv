import React from 'react'
import css from './ButtonShowMoreMobile.module.scss'
import classnames from 'classnames'

const ButtonShowMoreMobile = ({
  className,
  clickHandler,
}) => {
  return (
    <button
      className={classnames(css.button, className)}
      onClick={clickHandler}
      type='button'
    >
      <span>
        Показать еще
      </span>
    </button>
  )
}

export default ButtonShowMoreMobile
