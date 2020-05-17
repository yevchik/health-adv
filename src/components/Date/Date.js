import React from 'react'
import css from './Date.module.scss'
import classnames from 'classnames'

const Date = ({
  className,
  label
}) => {
  return (
    <p className={classnames(css.date, className)} dangerouslySetInnerHTML={{ __html: label }}  />
  )
}

export default Date
