import React from 'react'
import css from './BreadcrumbsMobile.module.scss'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import ContainerMobile from 'components/Grid/ContainerMobile'

const BreadcrumbsMobile = ({
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
    <ContainerMobile>
      <ul className={classnames(css.list, className)}>
        {breadcrumbItems}
      </ul>
    </ContainerMobile>
  )
}

export default BreadcrumbsMobile
