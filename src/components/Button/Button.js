import React from 'react'
import classnames from 'classnames'
import css from './Button.module.scss'
import IconArrowRight from 'assets/icons/IconArrowRight'
import IconPlay from 'assets/icons/IconPlay'

const Button = ({ className, btnStyle = 'filled', label = '', handleClick }) => (
  <button
    className={classnames(css.button, className, {
      [css.buttonFilled]: btnStyle === 'filled',
      [css.buttonDecorated]: btnStyle === 'decorated',
    })}
    type='button'
    onClick={handleClick}
  >
    { label }
    {btnStyle === 'decorated' &&
      <IconArrowRight className={css.icon} />
    }
  </button>
)

export default Button
