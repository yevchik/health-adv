import React from 'react'
import css from './TabLocationMobile.module.scss'
import classnames from 'classnames'

const TabLocationMobile = ({
  className,
  isActive,
  label,
  onClick
}) => {
  return (
    <button
      className={classnames(css.tab, className, { [css.tabActive]: isActive })}
      onClick={onClick}
      type='button'
    >
      { label }
    </button>
  )
}

export default TabLocationMobile
