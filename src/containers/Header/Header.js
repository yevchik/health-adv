import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import {connect} from 'react-redux'
import Link from 'next/link'
import { HOME_PAGE } from 'utils/Routes'
import IconLogo from 'containers/Header/_assets/IconLogo'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import Button from 'components/Button/Button'
import Intro from 'containers/Header/components/Intro/Intro'
import { openContentModal } from 'store/actions/ui'
// import ModalAppointment from 'components/ModalAppointment/ModalAppointment'
import ModalReview from 'components/ModalReview/ModalReview'

const Header = ({contacts, dispatch}) => {
  const headerData = {
    withSearch: true,
    schedule: contacts.schedule,
    phones: [contacts.phone],
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
        <Link href={HOME_PAGE}>
          <a className={css.logo}>
            <IconLogo className={css.iconLogo} />
          </a>
        </Link>
        <DesktopMenu
          data={headerData}
        />
        <div className={css.btnRegister}>
          <Button
            label='Записаться'
            btnStyle='decorated'
            handleClick={() => {
              dispatch(openContentModal(<ModalReview />))}
            }
          />
        </div>
      </Container>
    </header>
  )
}

const mapStateToProps = ({data}) => ({
  contacts: data.contacts[0],
})

export default connect(mapStateToProps)(Header)
