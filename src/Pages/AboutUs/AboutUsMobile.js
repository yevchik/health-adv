import React from 'react'
import css from './AboutUsMobile.module.scss'
import { images } from 'index'
import { HOME_PAGE } from 'Pages/Routes'
import ContainerMobile from 'components/Grid/ContainerMobile'
import TestBannerMobile from 'components/TestBanner/TestBannerMobile'
import BannerMobile from 'components/Banner/BannerMobile'
import AboutContentMobile from './AboutContent/AboutContentMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'

const AboutUsMobile = () => {
  const aboutData = {
    banner: {
      bgImage: 'about__banner@desktop.jpg',
      bgImageMobile: 'about__banner@mobile.jpg',
      bgImageTablet: 'about__banner@tablet.jpg',
      title: 'О нас',
      descriptor: 'Концепция стоматологической клиники&nbsp;&mdash; профессиональное лечение' +
        ' и&nbsp;персональный подход к&nbsp;каждому пациенту, который основан на&nbsp;заботе и&nbsp;сервисе.',
    },
    content: [
      {
        type: 'mission',
        title: 'Миссия клиники',
        data: {
          description: `
            <p>Мы&nbsp;заинтересованы в&nbsp;высоком качестве вашей жизни, а&nbsp;также в&nbsp;том, чтобы лечение прошло максимально комфортно и&nbsp;быстро.</p>
            <p>Важнейшими принципами нашей работы являются сохранение зубов, полная безболезненность, инфекционная безопасность и медицинская гарантия всех лечебно-диагностических манипуляций.</p>
          `,
          quote: `Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами. От&nbsp;того, каким будет первый опыт знакомства малыша с&nbsp;детским стоматологом зависит очень много.`,
          doctor: {
            photo: 'about__photo@desktop.png',
            name: 'Кирова Евгения Степановна',
            rank: 'Основатель клиники'
          }
        }
      },
      {
        type: 'gallery',
        title: 'Галлерея',
        data: {
          list: [
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
            {
              image: 'about__gallery-item@desktop.jpg',
              label: 'Краткое описание фотографии'
            },
          ]
        }
      },
      {
        type: 'principles',
        title: 'Принципы работы',
        descriptor: 'Персонал&nbsp;&mdash; это главная ценность нашей клиники. Нам удалось собрать команду единомышленников, всей душой любящих свою профессию.',
        data: {
          list: [
            {
              key: 'Забота о пациенте',
              value: `
                <p>При получении лицензии на&nbsp;анестезиологию, клиника прошла строгий государственный контроль. Клиника соответствует всем санитарным нормам и&nbsp;юридическим требованиям контролирующих органов.</p>
                <p>Мы работаем на современном, надежном, добротном анестезиологическом оборудовании: это наркозно-дыхательный аппарат фирмы «MINDRAY», оснащенный кардиомонитором.</p>
              `
            },
            {
              key: 'Современный подход',
              value: `
                <p>Оснащение клиники&nbsp;&mdash; это оборудованием мирового уровня. Только на&nbsp;высокотехнологичном оборудовании, используя современные материалы, специалист может минимизировать риски в&nbsp;лечении. Обеспечить качество и&nbsp;комфортно для пациента.</p>
                <p>Для нас в&nbsp;стоматологии не&nbsp;бывает мелочей. От&nbsp;качества множества мелких инструментов и&nbsp;приспособлений часто зависит, насколько качественным будет лечение.</p>
              `
            },
            {
              key: 'Честные цены',
              value: `
                <p>Пациенты центров клиники всегда знают, сколько и&nbsp;почему они платят. Все цены мы&nbsp;фиксируем в&nbsp;договоре, и&nbsp;они не&nbsp;подвергаются изменениям.</p>
                <p>Мы не экономим на качественном уровне лечения и материалов. Доступные цены достигаются с помощью грамотной работы своей лаборатории и поставкам напрямую от производителя.</p>
              `
            },
            {
              key: 'Уважительное отношение',
              value: `
                <p>Для каждого пациента мы разрабатываем индивидуальный подход и обеспечиваем максимально комфортное лечение. </p>
                <p>Забота, профессионализм, вежливость и деликатность в работе с пациентами — наша визитная карточка. Тёплое отношение ко всем пациентам как к «своим» — составляющая философии клиники.</p>
              `
            },
          ]
        }
      },
      {
        type: 'stats',
        title: 'Профессиональный коллектив',
        descriptor: 'Высокопрофессиональная команда с&nbsp;собственными разработками принципиально нового формата обслуживания является главной особенностью клиники.',
        data: {
          list: [
            {
              key: 97,
              unit: '%',
              value: 'удовлетворенных<br/>посетителей'
            },
            {
              key: 100,
              unit: 'лет',
              value: 'врачебный стаж<br/>наших врачей'
            },
            {
              key: 80,
              unit: '%',
              value: 'посетителей<br/>возвращаются к нам'
            },
          ]
        }
      },
    ],
    fullScreenPhoto: {
      url: 'about__fullscreen@desktop.jpg',
      description: 'Фотография коллектива клиники'
    },
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'О нас',
    },
  ]

  return (
    <>
      <BannerMobile {...aboutData.banner} />
      <ContainerMobile className={css.container}>
        <AboutContentMobile
          breadcrumbs={breadcrumbs}
          className={css.content}
          data={aboutData.content}
        />
      </ContainerMobile>
      {aboutData.fullScreenPhoto &&
        <img
          className={css.fullscreen}
          src={images('./' + aboutData.fullScreenPhoto.url)}
          alt={aboutData.fullScreenPhoto.description}
        />
      }
      <ContainerMobile>
        <PromoBlockMobile className={css.promo} />
      </ContainerMobile>
      <TestBannerMobile type='simple' />
    </>
  )
}

export default AboutUsMobile
