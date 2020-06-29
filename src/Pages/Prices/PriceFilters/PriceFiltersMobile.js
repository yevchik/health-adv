import React from 'react'
import css from './PriceFiltersMobile.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import InputMobile from 'components/Input/InputMobile'
import SelectMobile from 'components/Select/SelectMobile'

const PriceFiltersMobile = ({
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
      <InputMobile
        placeholder='Поиск'
        value=''
        onChange={() => {}}
        inputPalette='light'
        isSearch={true}
      />
      <SelectMobile
        onChange={() => {}}
        options={expertiseOptions}
        value={expertiseOptions.find(item => item.value === 'all')}
      />
    </div>
  )
}

export default PriceFiltersMobile
