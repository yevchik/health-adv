import React, { Component } from 'react'
import classnames from 'classnames'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from 'Pages/Routes'
import IconLogo from 'containers/Header/_assets/IconLogo'
import IconSearch from 'containers/Header/_assets/IconSearch'
import IconBurger from 'containers/Header/_assets/IconBurger'
import AdaptiveMenu from 'components/AdaptiveMenu/AdaptiveMenu'
import DesktopMenu from 'components/DesktopMenu/DesktopMenu'
import Button from 'components/Button/Button'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isAdaptiveMenuVisible: false
    }

    this.headerData = {
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
  }

  handleBurgerClick = () => {
    this.setState(prevState => ({
      ...prevState,
      isAdaptiveMenuVisible: true
    }))
  }

  handleCloseMenu = () => {
    this.setState(prevState => ({
      ...prevState,
      isAdaptiveMenuVisible: false
    }))
  }


  render () {
    const { isAdaptiveMenuVisible } = this.state
    const { withSearch } = this.headerData

    return (
      <header className={css.header}>
        <Container className={css.desktopWrapper}>
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
              onClick={this.handleBurgerClick}
            >
              Бургер управления адаптивным меню
              <IconBurger className={css.iconBurger} />
            </button>
          </div>
          <AdaptiveMenu
            isOpened={isAdaptiveMenuVisible}
            data={this.headerData}
            handleClose={this.handleCloseMenu}
          />
          <DesktopMenu
            data={this.headerData}
          />
          <Button
            className={css.btnRegister}
            label='Записаться'
            btnStyle='decorated'
            onClick={() => {}}
          />
        </Container>
      </header>
    )
  }
}

export default Header
