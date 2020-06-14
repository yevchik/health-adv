import React from 'react'
import css from './Special.module.scss'
import Banner from 'components/Banner/Banner'
import SpecialDescription from 'Pages/Special/SpecialDescription/SpecialDescription'
import Container from 'components/Grid/Container'
import { HOME_PAGE, SPECIALS } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import PromoBlock from 'containers/PromoBlock/PromoBlock'
import SignupBanner from 'components/SignupBanner/SignupBanner'

const Special = () => {
  const specialData = {
    banner: {
      bgImage: 'special__banner@desktop.jpg',
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
      <Banner {...specialData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <SpecialDescription {...specialData.special} />
        <PromoBlock className={css.promo} title='Также вам может быть интересно' />
      </Container>
      <SignupBanner
        title={specialData.signup.title}
        descriptor={specialData.signup.descriptor}
        buttonLabel={specialData.signup.button}
      />
    </>
  )
}

export default Special
