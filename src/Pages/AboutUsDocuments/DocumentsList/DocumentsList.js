import React from 'react'
import css from './DocumentsList.module.scss'
import classnames from 'classnames'
import File from 'components/File/File'

const DocumentsList = ({
  className,
  list,
}) => {
  const items = list.map((item, index) => (
    <li className={css.item} key={`Certificates list item#${index}`}>
      <File {...item} />
    </li>
  ))

  return (
    <>
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
    </>
  )
}

export default DocumentsList
