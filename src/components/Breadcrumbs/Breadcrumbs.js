import React from 'react'
import css from './Breadcrumbs.module.scss'
import { Link } from 'react-router-dom'
import Container from 'components/Grid/Container'

const Breadcrumbs = ({
  className,
  dataArray
}) => {
  const breadcrumbItems = dataArray.map((item, index) => {
    if (item.url) {
      return (
        <li className={css.item} key={`Breadcrumb item #${index}`}>
          <Link className={css.link} to={item.url}>
            {item.label}
          </Link>
        </li>
      )
    }

    return (
      <li className={css.item} key={`Breadcrumb item #${index}`}>
        {item.label}
      </li>
    )
  })
  return (
    <Container className={className}>
      <ul className={css.list}>
        {breadcrumbItems}
      </ul>
    </Container>
  )
}

export default Breadcrumbs
