import React, { useState } from 'react'
import css from './Advantages.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import { Collapse } from 'react-collapse'
import IconArrow from 'assets/icons/IconArrow'

const Advantages = ({ title = 'Преймущества', list }) => {
  const [isCollapseOpened, setCollapseOpened] = useState(false)

  const listItems = list.map((item, index) => (
    <li className={css.item} key={item.subtitle + '-' + index}>
      <h3 className={css.subtitle} dangerouslySetInnerHTML={{ __html: item.subtitle }} />
      <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: item.descriptor }}  />
    </li>
  ))

  return (
    <section>
      <Container className={css.container}>
        <Heading content={title} />
        <Collapse
          isOpened={isCollapseOpened}
          initialStyle={{ height: '50px', overflow: 'hidden'}}
          theme={{ collapse: isCollapseOpened ? css.collapseOpened : 'ReactCollapse--collapse' }}
        >
          <ul className={css.list}>
            { listItems }
          </ul>
        </Collapse>
        {!isCollapseOpened &&
          <button
            className={css.btn}
            onClick={() => setCollapseOpened(prevState => !prevState)}
            type='button'
          >
            Ещё преимущества
            <IconArrow className={css.icon} />
          </button>
        }
      </Container>
    </section>
  )
}

export default Advantages
