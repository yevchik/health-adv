import React from 'react'
import classnames from 'classnames'
import css from './AdvCardMobile.module.scss'
import { Link } from 'react-router-dom'
import IconArrowRight from 'assets/icons/IconArrowRight'
import IconDotsBg from 'assets/icons/IconDotsBg'

const AdvCardMobile = ({
  type = 'teeth',
  color,
  url,
  duration,
  title,
  price,
  isCompact
}) => (
  <Link
    className={classnames(css.link, {
      [css.linkTeeth]: type === 'teeth',
      [css.linkImplant]: type === 'implant-single',
      [css.linkJaw]: type === 'implants-jaw',
      [css.compact]: isCompact,
    })}
    to={url}
    style={{ backgroundColor: color }}
  >
    <span className={css.duration}>
      { duration }
    </span>
    <p className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
    <span className={css.price} dangerouslySetInnerHTML={{ __html: price }} />
    {!isCompact &&
      <span className={css.label}>
        Подробнее
        <IconArrowRight className={css.icon} />
      </span>
    }
    <IconDotsBg className={css.bg} />
  </Link>
)

export default React.memo(AdvCardMobile)
