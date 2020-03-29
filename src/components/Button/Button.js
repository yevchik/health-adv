import React from 'react'
import classnames from 'classnames'
import css from './Button.module.scss'
import IconArrowRight from 'assets/icons/IconArrowRight'
import { Link } from 'react-router-dom'

const Button = ({
  className,
  url,
  btnStyle = 'filled',
  label = '',
  handleClick
}) => {
  const ComponentName = url ? Link : 'button'

  return (
    <ComponentName
      className={classnames(css.button, className, {
        [css.buttonFilled]: btnStyle === 'filled',
        [css.buttonDecorated]: btnStyle === 'decorated' || btnStyle === 'filledDecorated',
        [css.buttonGradient]: btnStyle === 'gradient',
        [css.buttonFilledDecorated]: btnStyle === 'filledDecorated'
      })}
      type={url ? '' : 'button'}
      to={url}
      onClick={url ? () => {} : handleClick}
    >
      { label }
      {btnStyle !== 'filled' &&
        <IconArrowRight className={css.icon} />
      }
    </ComponentName>
  )
}

export default Button
