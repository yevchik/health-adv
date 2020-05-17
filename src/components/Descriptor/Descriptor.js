import React from 'react'
import css from './Descriptor.module.scss'
import classnames from 'classnames'

const Descriptor = ({
  className,
  label
}) => {
  return (
    <p className={classnames(css.descriptor, className)} dangerouslySetInnerHTML={{ __html: label }}  />
  )
}

export default Descriptor
