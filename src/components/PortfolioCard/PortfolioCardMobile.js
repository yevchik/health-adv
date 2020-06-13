import React from 'react'
import css from './PortfolioCardMobile.module.scss'
import { images } from 'index'

const PortfolioCardMobile = ({
  img,
  label
}) => (
  <figure className={css.card}>
    <img className={css.image} src={images('./' + img)} alt={label} />
    <figcaption className={css.label}>
      { label }
    </figcaption>
  </figure>
)

export default PortfolioCardMobile
