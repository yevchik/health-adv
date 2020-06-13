import React from 'react'
import css from './AdviseCardMobile.module.scss'
import { Link } from 'react-router-dom'
import IconArrowRight from 'assets/icons/IconArrowRight'

const AdviseCardMobile = ({
  label,
  url
}) => {
  return (
    <Link to={url} className={css.card}>
      <span className={css.label}>{ label }</span>
      <span className={css.sign}>
        Подробнее
        <IconArrowRight className={css.icon} />
      </span>
    </Link>
  )
}

export default AdviseCardMobile
