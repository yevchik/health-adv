import React, { useState } from 'react'
import css from './Advantages.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import { Collapse } from 'react-collapse'
import IconArrow from 'assets/icons/IconArrow'
import { useSelector } from 'react-redux'
import classnames from 'classnames'

const Advantages = ({ title = 'Преймущества', list }) => {
  const [isCollapseOpened, setCollapseOpened] = useState(false)
  const type = useSelector(state => state.elastic.deviceType)

  const listItems = list.map((item, index) => (
    <li className={css.item} key={item.subtitle + '-' + index}>
      <h3 className={css.subtitle} dangerouslySetInnerHTML={{ __html: item.subtitle }} />
      <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: item.descriptor }}  />
    </li>
  ))

  const content = type === 'mobile'
    ? (
      <>
        <Collapse
          isOpened={isCollapseOpened}
          initialStyle={{ height: '50px', overflow: 'hidden'}}
          theme={{ collapse: isCollapseOpened ? css.collapseOpened : 'ReactCollapse--collapse' }}
        >
          <ul className={css.list}>
            { listItems }
          </ul>
        </Collapse>
        <button
          className={classnames(css.btn, { [css.btnOpened]: isCollapseOpened })}
          onClick={() => setCollapseOpened(prevState => !prevState)}
          type='button'
        >
          Ещё преимущества
          <IconArrow className={css.icon} />
        </button>
      </>
    )
    : (
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
