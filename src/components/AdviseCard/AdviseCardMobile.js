import React from 'react'
import css from './AdviseCardMobile.module.scss'
import Link from 'next/link'
import IconArrowRight from 'assets/icons/IconArrowRight'

const AdviseCardMobile = ({
  label,
  url
}) => {
  return (
    <Link href={url}>
      <a  className={css.card}>
        <span className={css.label}>{ label }</span>
        <span className={css.sign}>
          Подробнее
          <IconArrowRight className={css.icon} />
        </span>
      </a>
    </Link>
  )
}

export default AdviseCardMobile
