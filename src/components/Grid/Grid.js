import React from 'react'
import classnames from 'classnames'
import css from './Grid.module.scss'

const Grid = ({ className, children }) => (
  <div className={classnames(css.wrapper, className)}>
    { children }
  </div>
)

export default Grid
