import React from 'react'
import css from './Heading.module.scss'
import classNames from 'classnames'

const Heading = ({ className, content }) => (
  <h2 className={classNames(css.title, className)} dangerouslySetInnerHTML={{ __html: content }} />
)

export default Heading
