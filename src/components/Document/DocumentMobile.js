import React from 'react'
import css from './DocumentMobile.module.scss'
import { images } from 'index'
import { useDispatch } from 'react-redux'
import { openImageModal } from 'store/actions'

const DocumentMobile = ({
  preview,
  full,
  label
}) => {
  const dispatch = useDispatch()

  return (
    <button
      className={css.item}
      onClick={() => dispatch(openImageModal(full))}
      type='button'
    >
      <img className={css.preview} src={images('./' + preview)} alt={`Фото ${label}`} />
      <span className={css.label}>
        { label }
      </span>
    </button>
  )
}

export default DocumentMobile
