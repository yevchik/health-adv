import React from 'react'
import css from './PriceFilters.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import Select from 'components/Select/Select'
import Input from 'components/Input/Input'

const PriceFilters = ({
  className,
}) => {
  const list = useSelector(state => state.data.fetchedData)

  let expertiseOptions = [
    {
      label: 'Все направления',
      value: 'all'
    }
  ]

  expertiseOptions = expertiseOptions.concat(list.map(({ category }) => ({
    value: category,
    label: category
  })))

  return (
    <div className={classnames(css.wrapper, className)}>
      <Input
        placeholder='Поиск'
        value=''
        onChange={() => {}}
        inputPalette='light'
        isSearch={true}
      />
      <Select
        onChange={() => {}}
        options={expertiseOptions}
        value={expertiseOptions.find(item => item.value === 'all')}
      />
    </div>
  )
}

export default PriceFilters
