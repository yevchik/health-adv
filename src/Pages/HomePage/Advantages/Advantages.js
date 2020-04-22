import React from 'react'
import css from './Advantages.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'

const Advantages = ({ title = 'Преймущества', list }) => {

  const listItems = list.map((item, index) => (
    <li className={css.item} key={item.subtitle + '-' + index}>
      <h3 className={css.subtitle} dangerouslySetInnerHTML={{ __html: item.subtitle }} />
      <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: item.descriptor }}  />
    </li>
  ))

  const content = (
    <ul className={css.list}>
      { listItems }
    </ul>
  )

  return (
    <section>
      <Container className={css.container}>
        <Heading content={title} />
        { content }
      </Container>
    </section>
  )
}

export default Advantages
