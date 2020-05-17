import React from 'react'
import css from './DecorationArrow.module.scss'
import classnames from 'classnames'
import IconArrowRight from 'assets/icons/IconArrowRight'

const DecorationArrow = ({ className }) => (
  <div className={classnames(css.wrapper, className)}>
    <IconArrowRight className={css.icon} />
  </div>
)

export default DecorationArrow
