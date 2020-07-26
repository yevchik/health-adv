import React from 'react'
import css from './InfoCardMobile.module.scss'
import Link from 'next/link'
import DecorationArrow from 'components/DecorationArrow/DecorationArrow'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'

const InfoCardMobile = ({
  className,
  tag = 'li',
  label,
  date,
  url
}) => {
  const TagName = tag

  return (
    <TagName className={className}>
      <Link href={url}>
        <a className={css.link}>
          <Descriptor className={css.descriptor} label={label} />
          <Date className={css.date} label={date} />
          <DecorationArrow className={css.icon} />
        </a>
      </Link>
    </TagName>
  )
}

export default InfoCardMobile
