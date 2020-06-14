import React from 'react'
import classnames from 'classnames'
import css from './Button.module.scss'
import IconArrowRight from 'assets/icons/IconArrowRight'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Button = ({
  className,
  iconClassname,
  url,
  btnStyle = 'filled',
  label = '',
  handleClick,
  type = 'button'
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
      type={url ? '' : type}
      to={url}
      onClick={url ? () => {} : handleClick}
    >
      { label }
      {btnStyle !== 'filled' &&
        <IconArrowRight className={classnames(css.icon, iconClassname)} />
      }
    </ComponentName>
  )
}

Button.propTypes = {
  // external class
  className: PropTypes.string,
  // external class for arrow icon
  iconClassname: PropTypes.string,
  // url for Link render instead of button
  url: PropTypes.string,
  // style preset
  btnStyle: PropTypes.oneOf(['filled', 'decorated', 'filledDecorated', 'gradient']),
  // text label
  label: PropTypes.string.isRequired,
  // click handler
  handleClick: PropTypes.func
}

export default React.memo(Button)
