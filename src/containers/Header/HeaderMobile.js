import React, { useState } from 'react'
import classnames from 'classnames'
import css from './HeaderMobile.module.scss'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from 'Pages/Routes'
import IconLogo from 'containers/Header/_assets/IconLogo'
import IconSearch from 'containers/Header/_assets/IconSearch'
import IconBurger from 'containers/Header/_assets/IconBurger'
import AdaptiveMenu from './components/AdaptiveMenu/AdaptiveMenu'
import ContainerMobile from 'components/Grid/ContainerMobile'

const HeaderMobile = () => {
  const [isAdaptiveMenuVisible, setAdaptiveMenuStatus] = useState(false)

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
        url: '/'
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

  const handleBurgerClick = () => {
    setAdaptiveMenuStatus(true)
  }

  const handleCloseMenu = () => {
    setAdaptiveMenuStatus(false)
  }

  const { withSearch } = headerData

  return (
    <header className={css.header}>
      <ContainerMobile>
        <div className={css.wrapper}>
          <Link to={HOME_PAGE} className={css.logo}>
            <IconLogo className={css.iconLogo} />
          </Link>
          {withSearch &&
            <button className={css.search} type='button'>
              Поиск по сайту
              <IconSearch className={css.iconSearch} />
            </button>
          }
          <button
            className={classnames(css.burger, { [css.burgerOpened]: isAdaptiveMenuVisible })}
            onClick={handleBurgerClick}
          >
            Бургер управления адаптивным меню
            <IconBurger className={css.iconBurger} />
          </button>
        </div>
        <AdaptiveMenu
          isOpened={isAdaptiveMenuVisible}
          data={headerData}
          handleClose={handleCloseMenu}
        />
      </ContainerMobile>
    </header>
  )
}

export default HeaderMobile
