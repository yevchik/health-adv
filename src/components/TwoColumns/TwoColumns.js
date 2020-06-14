import React from 'react'
import css from './TwoColumns.module.scss'
import classnames from 'classnames'

const TwoColumns = ({
  classWrapper,
  classContent,
  classAside,
  main,
  aside
}) => {
  return (
    <div className={classnames(css.wrapper, classWrapper)}>
      <div className={classnames(css.main, classContent)}>
        { main }
      </div>
      <aside className={classnames(css.aside, classAside)}>
        <div className={css.sticky}>
          { aside }
        </div>
      </aside>
    </div>
  )
}

export default TwoColumns
