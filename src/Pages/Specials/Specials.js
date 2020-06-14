import React from 'react'
import css from './Specials.module.scss'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
import { HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import SpecialsList from 'Pages/Specials/SpecialsList/SpecialsList'
import SignupBanner from 'components/SignupBanner/SignupBanner'

const Specials = () => {
  const specialsData = {
    banner: {
      bgImage: 'specials__banner@desktop.jpg',
      title: 'Акции',
      descriptor: 'Всегда выгодные спецпредложения, скидки и&nbsp;акции на&nbsp;услуги для Вас.',
    },
    ads: [
      {
        type: 'teeth',
        url: '/',
        color: '#f4785d',
        duration: 'Акция до 24 января',
        title: 'Керамические виниры',
        price: 'от <span>20 000</span> рублей'
      },
      {
        type: 'implant-single',
        url: '/',
        color: '#c58ddf',
        duration: 'Акция до 24 января',
        title: 'Имплант с&nbsp;установкой',
        price: 'от <span>95 000</span> рублей'
      },
      {
        type: 'implants-jaw',
        url: '/',
        color: '#c58ddf',
        duration: 'Акция до 24 января',
        title: 'Все зубы сразу «под ключ»',
        price: 'от <span>120 000</span> рублей'
      },
      {
        type: 'implant-single',
        url: '/',
        color: '#7486e6',
        duration: 'Акция до 24 января',
        title: 'Имплант с&nbsp;установкой',
        price: 'от <span>95 000</span> рублей'
      },
      {
        type: 'implants-jaw',
        url: '/',
        color: '#b4da47',
        duration: 'Акция до 24 января',
        title: 'Все зубы сразу «под ключ»',
        price: 'от <span>120 000</span> рублей'
      },
      {
        type: 'teeth',
        url: '/',
        color: '#f07070',
        duration: 'Акция до 24 января',
        title: 'Керамические виниры',
        price: 'от <span>20 000</span> рублей'
      },
      {
        type: 'implants-jaw',
        url: '/',
        color: '#62de94',
        duration: 'Акция до 24 января',
        title: 'Все зубы сразу «под ключ»',
        price: 'от <span>120 000</span> рублей'
      },
      {
        type: 'teeth',
        url: '/',
        color: '#c58ddf',
        duration: 'Акция до 24 января',
        title: 'Керамические виниры',
        price: 'от <span>20 000</span> рублей'
      },
      {
        type: 'implant-single',
        url: '/',
        color: '#7486e6',
        duration: 'Акция до 24 января',
        title: 'Имплант с&nbsp;установкой',
        price: 'от <span>95 000</span> рублей'
      },
    ]
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Акции'
    }
  ]

  return (
    <>
      <Banner {...specialsData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <SpecialsList list={specialsData.ads} />
      </Container>
      <SignupBanner />
    </>
  )
}

export default Specials
