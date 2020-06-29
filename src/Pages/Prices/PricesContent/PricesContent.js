import React from 'react'
import css from './PricesContent.module.scss'
import classnames from 'classnames'
import PricesCategory from 'Pages/Prices/PricesCategory/PricesCategory'
import { useSelector } from 'react-redux'

const CATEGORIES_UNCOLLAPSED_BY_DEFAULT = 2

const PricesContent = ({
  className,
}) => {
  const list = useSelector(state => state.data.filteredData)

  const categories = list.map((category, index) => (
    <li className={css.item} key={`Price list category#${index}`}>
      <PricesCategory {...category} isOpened={index < CATEGORIES_UNCOLLAPSED_BY_DEFAULT} />
    </li>
  ))

  return (
    <ul className={classnames(css.list, className)}>
      { categories }
    </ul>
  )
}

export default PricesContent
