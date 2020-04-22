import React from 'react'
import classnames from 'classnames'
import css from './ContainerMobile.module.scss'

const ContainerMobile = ({ className, children }) => (
  <div className={classnames(css.wrapper, className)}>
    { children }
  </div>
)

export default React.memo(ContainerMobile)
