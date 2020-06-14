import React from 'react'
import css from './SpecialMobile.module.scss'
import { HOME_PAGE, SPECIALS } from 'Pages/Routes'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import SignupBannerMobile from 'components/SignupBanner/SignupBannerMobile'
import BannerMobile from 'components/Banner/BannerMobile'
import SpecialDescriptionMobile from 'Pages/Special/SpecialDescription/SpecialDescriptionMobile'

const SpecialMobile = () => {
  const specialData = {
    banner: {
      bgImage: 'special__banner@desktop.jpg',
      bgImageTablet: 'special__banner@tablet.jpg',
      bgImageMobile: 'special__banner@mobile.jpg',
      title: 'Скидка 20%<br/>на керамику!',
      special: 'В&nbsp;период с&nbsp;8&nbsp;по&nbsp;24&nbsp;января акционная цена 20&nbsp;000&nbsp;₽',
      descriptor: 'Гарантия 10&nbsp;лет на&nbsp;изделия из&nbsp;керамики.<br/>Более 2&nbsp;200 пациентов обрели красивую улыбку',
    },
    special: {
      title: 'Скидка 20% на керамику!',
      duration: 'Акция действительна до&nbsp;31&nbsp;марта 2020 года',
      description: 'Что касается мнения о болезненности отбеливания зубов, то это относится только к химическим методам и только в случае истончения и эрозии эмали, патологического стирания и наличия трещин, и как следствие – гипертензии, или повышенной чувствительности зубов. Касается мнения о болезненности отбеливания зубов, то это относится только к химическим методам и только в случае истончения и эрозии эмали.',
      image: 'special__image@desktop.jpg'
    },
    signup: {
      title: 'Закажите бесплатную консультацию',
      descriptor: 'Оставьте заявку, мы&nbsp;свяжемся с&nbsp;вами в&nbsp;течение часа',
      button: 'Заказать консультацию'
    }
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Акции',
      url: SPECIALS
    },
    {
      label: specialData.special.title
    }
  ]

  return (
    <>
      <BannerMobile {...specialData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <SpecialDescriptionMobile {...specialData.special} />
        <PromoBlockMobile className={css.promo} title='Также вам может быть интересно' />
      </ContainerMobile>
      <SignupBannerMobile
        title={specialData.signup.title}
        descriptor={specialData.signup.descriptor}
        buttonLabel={specialData.signup.button}
      />
    </>
  )
}

export default SpecialMobile
