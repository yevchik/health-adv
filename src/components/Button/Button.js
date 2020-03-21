import React from 'react'
import classnames from 'classnames'
import css from './Button.module.scss'
import IconArrowRight from 'assets/icons/IconArrowRight'

const Button = ({ className, btnStyle = 'filled', label = '', handleClick }) => (
  <button
    className={classnames(css.button, className, {
      [css.buttonFilled]: btnStyle === 'filled',
      [css.buttonDecorated]: btnStyle === 'decorated',
      [css.buttonGradient]: btnStyle === 'gradient',
    })}
    type='button'
    onClick={handleClick}
  >
    { label }
    {btnStyle !== 'filled' &&
      <IconArrowRight className={css.icon} />
    }
  </button>
)

export default Button
