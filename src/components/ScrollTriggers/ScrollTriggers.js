import React from 'react'
import css from './ScrollTriggers.module.scss'
import classnames from 'classnames'

const ScrollTriggers = ({
  activeTab,
  list,
  onClick
}) => {
  const items = list.map((item, index) => (
    <li
      className={css.item}
      key={`Scroll trigger item#${index}`}
    >
      <button
        className={classnames(css.button, { [css.buttonActive]: activeTab === item.type })}
        onClick={() => onClick(item.type)}
      >
        { item.label }
      </button>
    </li>
  ))

  return (
    <ul className={css.list}>
      { items }
    </ul>
  )
}

export default ScrollTriggers
