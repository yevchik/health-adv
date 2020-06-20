import React from 'react'
import css from './LinksBattery.module.scss'
import { Link, withRouter } from 'react-router-dom'
import {
  ABOUT_CERTIFICATES,
  ABOUT_DOCUMENTS,
  ABOUT_FAQ,
  ABOUT_US,
  ABOUT_VACANCIES
} from 'Pages/Routes'
import classnames from 'classnames'

const LinksBattery = (props) => {
  const listData = [
    {
      label: 'О нас',
      url: ABOUT_US
    },
    {
      label: 'Частые вопросы и ответы',
      url: ABOUT_FAQ
    },
    {
      label: 'Лицензии и сертификаты',
      url: ABOUT_CERTIFICATES
    },
    {
      label: 'Правовые документы',
      url: ABOUT_DOCUMENTS
    },
    {
      label: 'Вакансии',
      url: ABOUT_VACANCIES
    },
  ]

  const items = listData.map((item, index) => (
    <li
      className={classnames(css.item, { [css.itemActive]: item.url === props.location.pathname || item.url === `${props.location.pathname}/` })}
      key={`Link battery item#${index}`}
    >
      <Link className={css.link} to={item.url}>
        { item.label }
      </Link>
    </li>
  ))

  return (
    <ul className={css.list}>
      { items }
    </ul>
  )
}

export default withRouter(LinksBattery)
