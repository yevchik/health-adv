import React from 'react'
import css from './SpecialsMobile.module.scss'
import { HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import SpecialsListMobile from 'Pages/Specials/SpecialsList/SpecialsListMobile'
import SignupBannerMobile from 'components/SignupBanner/SignupBannerMobile'

const SpecialsMobile = () => {
  const specialsData = {
    banner: {
      bgImage: 'specials__banner@desktop.jpg',
      bgImageTablet: 'specials__banner@tablet.jpg',
      bgImageMobile: 'specials__banner@mobile.jpg',
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
      <BannerMobile {...specialsData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <SpecialsListMobile list={specialsData.ads} />
      </ContainerMobile>
      <SignupBannerMobile />
    </>
  )
}

export default SpecialsMobile
