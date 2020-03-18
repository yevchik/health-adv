import React from 'react'
import classnames from 'classnames'
import css from 'components/Grid/Container.module.scss'

const Container = ({ className, children }) => (
  <div className={classnames(css.wrapper, className)}>
    { children }
  </div>
)

export default Container
