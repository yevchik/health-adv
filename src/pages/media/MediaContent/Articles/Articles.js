import React from 'react'
import css from './Articles.module.scss'
import InfoCard from 'components/InfoCard/InfoCard'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'

const Articles = ({
  list
}) => {
  const cards = list.map((item, index) => (
    <InfoCard {...item} key={`Article card #${index}`} />
  ))

  return (
    <section className={css.wrapper}>
      <Container>
        <Heading content='Статьи' type='standard' className={css.title} />
        <ul className={css.list}>
          {cards}
        </ul>
      </Container>
    </section>
  )
}

export default Articles
