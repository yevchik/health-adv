import React from 'react'
import css from './PricesContentMobile.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import PricesCategoryMobile from 'Pages/Prices/PricesCategory/PricesCategoryMobile'

const CATEGORIES_UNCOLLAPSED_BY_DEFAULT = 2

const PricesContentMobile = ({
  className,
}) => {
  const list = useSelector(state => state.data.filteredData)

  const categories = list.map((category, index) => (
    <li className={css.item} key={`Price list category#${index}`}>
      <PricesCategoryMobile {...category} isOpened={index < CATEGORIES_UNCOLLAPSED_BY_DEFAULT} />
    </li>
  ))

  return (
    <ul className={classnames(css.list, className)}>
      { categories }
    </ul>
  )
}

export default PricesContentMobile
