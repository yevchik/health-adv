import React from 'react'
import classnames from 'classnames'
import css from './ContainerMobile.module.scss'

const ContainerMobile = ({ className, children, isDecorated = false }) => (
  <div className={classnames(css.wrapper, className, { [css.wrapperDecorated]: isDecorated })}>
    { children }
  </div>
)

export default React.memo(ContainerMobile)
