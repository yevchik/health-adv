import React from 'react'
import css from './TabCityMobile.module.scss'
import classnames from 'classnames'
import IconLocation from 'assets/icons/IconLocation'

const TabCityMobile = ({
  className,
  isActive,
  label,
  onClick
}) => {
  return (
    <button
      className={classnames(css.button, className, { [css.buttonActive]: isActive })}
      type='button'
      onClick={onClick}
    >
      <IconLocation className={css.icon} />
      { label }
    </button>
  )
}

export default TabCityMobile
