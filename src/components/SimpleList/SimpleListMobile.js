import React from 'react'
import css from './SimpleListMobile.module.scss'
import classnames from 'classnames'

const SimpleListMobile = ({
  className,
  list
}) => {
  const items = list.map((item, index) => (
    <li
      className={css.item}
      dangerouslySetInnerHTML={{ __html: item }}
      key={index}
    />
  ))

  return (
    <ul className={classnames(css.list, className)}>
      { items }
    </ul>
  )
}

export default SimpleListMobile
