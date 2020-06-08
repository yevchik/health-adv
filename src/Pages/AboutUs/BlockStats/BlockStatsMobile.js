import React from 'react'
import css from './BlockStatsMobile.module.scss'
import Heading from 'components/Heading/Heading'
import StatsCounterMobile from 'Pages/AboutUs/StatsCounter/StatsCounterMobile'

const BlockStatsMobile = ({
  className,
  data,
}) => {
  const { title, descriptor, data: blockData } = data

  const items = blockData.list.map((item, index) => {
    return (
      <li className={css.item} key={`About stats item#${index}`}>
        <StatsCounterMobile counterData={blockData.list[index]} />
      </li>
    )
  })

  return (
    <section className={className}>
      <Heading content={title} type='standard' />
      <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
      <ul className={css.list}>
        { items }
      </ul>
    </section>
  )
}

export default BlockStatsMobile
