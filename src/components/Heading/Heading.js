import React from 'react'
import css from './Heading.module.scss'

const Heading = ({ content }) => (
  <h2 className={css.title}>
    { content }
  </h2>
)

export default Heading
