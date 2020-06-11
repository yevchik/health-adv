import React from 'react'
import css from './PortfolioCard.module.scss'
import { images } from 'index'

const PortfolioCard = ({
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

export default PortfolioCard
