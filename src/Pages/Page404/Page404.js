import React from 'react'
import css from './Page404.module.scss'
import Container from 'components/Grid/Container'
import TestBanner from 'components/TestBanner/TestBanner'
import { DOCTORS, HOME_PAGE, PRICES } from 'Pages/Routes'
import { Link } from 'react-router-dom'
import IconArrowRight from 'assets/icons/IconArrowRight'

const Page404 = () => {
  const links = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Услуги',
      url: PRICES
    },
    {
      label: 'Врачи',
      url: DOCTORS
    }
  ]

  return (
    <section>
      <Container className={css.container}>
        <p className={css.code}>
          <span className={css.number}>4</span>
          <span className={css.number}>4</span>
        </p>
        <h2 className={css.descriptor}>
          Упс... Страница не доступна
        </h2>
        <p
          className={css.details}
          dangerouslySetInnerHTML={{ __html: `Видимо, что-то пошло не так.<br/>Страница, которую Вы ищете, не может быть найдена.` }}
        />
        <ul className={css.list}>
          {links.map(({ url, label }, index) => (
            <li className={css.item} key={index}>
              <Link className={css.link} to={url}>
                { label }
                <IconArrowRight className={css.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <TestBanner type='simple' />
    </section>
  )
}

export default Page404
