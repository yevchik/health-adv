import React from 'react'
import css from './BreadcrumbsMobile.module.scss'
import Link from 'next/link'
import classnames from 'classnames'

const BreadcrumbsMobile = ({
  className,
  classContainer,
  dataArray
}) => {
  const breadcrumbItems = dataArray.map((item, index) => {
    if (item.url) {
      return (
        <li className={css.item} key={`Breadcrumb item #${index}`}>
          <Link href={item.url}>
            <a lassName={css.link}>
              {item.label}
            </a>
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
    <div className={classnames(css.wrapper, classContainer)}>
      <ul className={classnames(css.list, className)}>
        {breadcrumbItems}
      </ul>
    </div>
  )
}

export default BreadcrumbsMobile
