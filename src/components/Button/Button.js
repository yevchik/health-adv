import React from 'react'
import classnames from 'classnames'
import css from './Button.module.scss'

const Button = ({ className, style = 'filled', label, handleClick }) => {
  return (
    <button
      className={classnames(css.button, className, {
        [css.buttonFilled]: style === 'filled',
        [css.buttonDecorated]: style === 'decorated'
      })}
      type='button'
      onClick={handleClick}
    >
      { label }
    </button>
  )
}

export default Button
