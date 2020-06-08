import React from 'react'
import SelectMobile from 'components/Select/SelectMobile'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import { withRouter } from 'react-router-dom'

const LocationSelector = ({ className, history, location }) => {
  const options = [
    {
      label: 'О нас',
      value: ABOUT_US
    },
    {
      label: 'Частые вопросы и ответы',
      value: HOME_PAGE
    },
    {
      label: 'Лицензии и сертификаты',
      value: HOME_PAGE
    },
    {
      label: 'Правовые документы',
      value: HOME_PAGE
    },
    {
      label: 'Вакансии',
      value: HOME_PAGE
    },
  ]

  return (
    <div className={className}>
      <SelectMobile
        options={options}
        onChange={(evt) => {
          history.push(evt.value)
        }}
        placeholder='Выбор категории'
        value={options.find(item => item.value === location.pathname)}
        isValueReuired={false}
      />
    </div>
  )
}

export default withRouter(LocationSelector)
