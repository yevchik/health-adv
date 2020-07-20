import React from 'react'
import css from 'containers/Header/components/DesktopMenu/DesktopMenu.module.scss'
import classnames from 'classnames'
import Link from 'next/link'
import IconArrow from 'containers/Header/_assets/IconArrow'

const DesktopMenu = ({ data }) => {
  const listContent = data.list.map((item, index) => {
    if (item.sublist && item.sublist.length > 0) {
      return (
        <li className={css.item} key={index}>
          <div className={classnames(css.link, css.submenuTrigger)}>
            <span>
              { item.text }
              <IconArrow className={css.iconTrigger} />
            </span>
            <div className={css.wrapper}>
              <div className={css.frame}>
                <ul className={css.sublist}>
                  {item.sublist.map((subitem, index) => (
                    <li className={css.subitem} key={index}>
                      <Link href={subitem.url}>
                        <a  className={css.sublink}>
                          { subitem.text }
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      )
    }

    return (
      <li className={css.item} key={index}>
        <Link href={item.url}>
          <a className={css.link}>
            { item.text }
          </a>
        </Link>
      </li>
    )
  })

  return (
    <nav>
      <ul className={css.list}>
        { listContent }
      </ul>
    </nav>
  )
}

export default React.memo(DesktopMenu)
