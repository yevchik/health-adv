import React from 'react'
import css from './FileMobile.module.scss'
import { files } from 'index'

const FileMobile = ({
  file,
  format,
  label,
  size,
}) => {
  return (
    <a className={css.link} href={files('./' + file)}>
      <p className={css.name}>
        { label }
      </p>
      <p className={css.info}>
        <span className={css.format}>
          { format }
        </span>
        <span className={css.size}>
          { size }
        </span>
      </p>
    </a>
  )
}

export default FileMobile
