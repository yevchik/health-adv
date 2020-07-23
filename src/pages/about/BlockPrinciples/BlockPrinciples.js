import React from 'react'
import css from './BlockPrinciples.module.scss'
import Heading from 'components/Heading/Heading'

const BlockPrinciples = ({
  className,
  data
}) => {
  const { title, descriptor, data: blockData } = data

  const items = blockData.list.map((item, index) => (
    <li className={css.item} key={`About principles item#${index}`}>
      <h3 className={css.subtitle}>
        { item.key }
      </h3>
      <div className={css.principle} dangerouslySetInnerHTML={{ __html: item.value }}  />
    </li>
  ))

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

export default BlockPrinciples
