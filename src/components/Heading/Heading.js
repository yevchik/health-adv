import React from 'react'
import css from './Heading.module.scss'
import classNames from 'classnames'

const Heading = ({ className, content, type = 'large' }) => (
  <h2
    className={classNames(css.title, className, {
      [css.titleStandard]: type === 'standard'
    })}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default React.memo(Heading)
