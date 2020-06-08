import React, { useState } from 'react'
import css from './BlockPrinciplesMobile.module.scss'
import Heading from 'components/Heading/Heading'
import { Collapse } from 'react-collapse'
import classnames from 'classnames'
import IconArrow from 'assets/icons/IconArrow'
import { isTablet } from 'react-device-detect'

const BlockPrinciplesMobile = ({
  className,
  data
}) => {
  const { title, descriptor, data: blockData } = data
  const [isCollapseOpened, updateCollapseStatus] = useState(isTablet || false)

  const items = blockData.list.map((item, index) => (
    <li className={css.item} key={`About principles item#${index}`}>
      <h3 className={css.subtitle}>
        { item.key }
      </h3>
      <div className={css.principle} dangerouslySetInnerHTML={{ __html: item.value }}  />
    </li>
  ))

  return (
    <section className={classnames(css.section, className)}>
      <Heading content={title} type='standard' />
      <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
      <Collapse
        isOpened={isCollapseOpened}
        theme={{ collapse: isCollapseOpened ? classnames('ReactCollapse--collapse', css.collapseOpened) : 'ReactCollapse--collapse' }}
      >
        <ul className={css.list}>
          { items }
        </ul>
      </Collapse>
      <button
        className={classnames(css.buttonCollapse, { [css.buttonCollapseOpened]: isCollapseOpened })}
        onClick={() => updateCollapseStatus(true)}
      >
        Еще преймущества
        <IconArrow className={css.iconArrow} />
      </button>
    </section>
  )
}

export default BlockPrinciplesMobile
