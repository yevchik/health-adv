import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from 'Pages/Routes'
import IconLogo from 'containers/Header/_assets/IconLogo'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import Button from 'components/Button/Button'
import Intro from 'containers/Header/components/Intro/Intro'

const Header = () => {
  const headerData = {
    withSearch: true,
    schedule: 'Ежедневно&nbsp;10.00&nbsp;&mdash; 21.00',
    phones: ['+7 495 453 95 93', '+7 495 453 95 93'],
    list: [
      {
        text: 'Услуги и цены',
        url: '/'
      },
      {
        text: 'Акции',
        url: '/'
      },
      {
        text: 'Врачи',
        url: '/'
      },
      {
        text: 'Медиацентр',
        url: '/media'
      },
      {
        text: 'О клинике',
        sublist: [
          {
            text: 'О нас',
            url: '/'
          },
          {
            text: 'Частые вопросы',
            url: '/'
          },
          {
            text: 'Лицензии и сертификаты',
            url: '/'
          },
          {
            text: 'Правовые документы',
            url: '/'
          },
          {
            text: 'Вакансии',
            url: '/'
          },
        ]
      },
      {
        text: 'Отзывы',
        url: '/'
      },
      {
        text: 'Контакты',
        url: '/'
      },
    ],
    auxList: [
      {
        text: 'Карта сайта',
        url: '/'
      },
      {
        text: 'Политика конфиденциальности',
        url: '/'
      }
    ]
  }

  return (
    <header className={css.header}>
      <Intro className={css.top} data={headerData} />
      <Container className={css.desktopWrapper}>
        <Link to={HOME_PAGE} className={css.logo}>
          <IconLogo className={css.iconLogo} />
        </Link>
        <DesktopMenu
          data={headerData}
        />
        <div className={css.btnRegister}>
          <Button
            label='Записаться'
            btnStyle='decorated'
            handleClick={() => {}}
          />
        </div>
      </Container>
    </header>
  )
}

export default React.memo(Header)
