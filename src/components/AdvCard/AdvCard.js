import React from 'react'
import classnames from 'classnames'
import css from './AdvCard.module.scss'
import Link from 'next/link'
import IconArrowRight from 'assets/icons/IconArrowRight'
import IconDotsBg from 'assets/icons/IconDotsBg'

const AdvCard = ({
  type = 'teeth',
  color,
  url,
  duration,
  title,
  price,
  styles,
  isCompact
}) => (
  <Link href={url}>
    <a
      className={classnames(css.link, {
        [css.thin]: styles === 'thin',
        [css.linkTeeth]: type === 'teeth',
        [css.linkImplant]: type === 'implant-single',
        [css.linkJaw]: type === 'implants-jaw',
        [css.compact]: isCompact
      })}
      style={{ backgroundColor: color }}
    >
      <span className={css.duration}>
        { duration }
      </span>
      <p className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
      <span className={css.price} dangerouslySetInnerHTML={{ __html: price }} />
      <IconDotsBg className={css.bg} />
      {!isCompact &&
        <>
          <span className={css.label}>
            Подробнее
            <IconArrowRight className={css.icon} />
          </span>
        </>
      }
    </a>
  </Link>
)

export default React.memo(AdvCard)
