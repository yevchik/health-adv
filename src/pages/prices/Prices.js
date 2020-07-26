import React, { useEffect } from 'react'
import css from './Prices.module.scss'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
 import { HOME_PAGE } from 'utils/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import PromoBlock from 'containers/PromoBlock/PromoBlock'
import TestBanner from 'components/TestBanner/TestBanner'
import PricesContent from 'pages/prices/PricesContent/PricesContent'
import withModal from 'hoc/withModal'
import { useDispatch } from 'react-redux'
import { saveData } from 'store/actions'
import PriceFilters from 'pages/prices/PriceFilters/PriceFilters'

const Prices = () => {
  const pricesData = {
    banner: {
      bgImage: 'prices__banner@desktop.jpg',
      bgImageMobile: 'prices__banner@mobile.jpg',
      bgImageTablet: 'prices__banner@tablet.jpg',
      title: 'Услуги и цены',
      descriptor: 'Инвестируя в&nbsp;свое здоровье, мы&nbsp;хотим получить уверенность в&nbsp;том, что затраты оправданы и&nbsp;проблема решена.'
    },
    list: [
      {
        category: 'Стоматологическое лечение',
        sublist: [
          {
            subcategory: 'Лечение и реставрация зубов',
            services: [
              {
                label: 'Лечение кариеса',
                video: 'demo_video_1920_2.mp4',
                price: 'от 20 000'
              },
              {
                label: 'Лечение каналов под микроскопом (пульпит, периодонтит)',
                video: 'demo_video_1920_2.mp4',
                price: 'от 25 000'
              },
              {
                label: 'Лечение кисты',
                video: 'demo_video_1920_2.mp4',
                price: 'от 23 000'
              },
              {
                label: 'Лечение пародонтита',
                price: 'от 12 000'
              },
              {
                label: 'Лечение пародонтоза',
                price: 'от 15 000'
              },
            ]
          },
          {
            subcategory: 'Удаление зубов',
            services: [
              {
                label: 'Удаление зуба средней сложности',
                video: 'demo_video_1920_2.mp4',
                price: 'от 3 000'
              },
              {
                label: 'Сложное удаление зуба',
                price: 'от 5 000'
              },
              {
                label: 'Лечение зуба мудрости',
                video: 'demo_video_1920_2.mp4',
                price: 'от 7 500'
              },
            ]
          },
          {
            subcategory: 'Еще одна категория услуг',
            services: [
              {
                label: 'Услуга №1',
                video: 'demo_video_1920_2.mp4',
                price: 'от 3 000'
              },
              {
                label: 'Услуга №2',
                price: 'от 5 000'
              },
              {
                label: 'Услуга №3',
                video: 'demo_video_1920_2.mp4',
                price: 'от 7 500'
              },
            ]
          },
        ]
      },
      {
        category: 'Косметическая стоматология',
        sublist: [
          {
            services: [
              {
                label: 'Отбеливание зубов',
                price: 'от 10 000'
              },
              {
                label: 'Эстетическая пародонтология (розовая эстетика)',
                price: 'от 65 000'
              },
              {
                label: 'Керамические виниры',
                video: 'demo_video_1920_2.mp4',
                price: 'от 123 000'
              },
            ]
          },
        ]
      },
      {
        category: 'Детская стоматология',
        sublist: [
          {
            services: [
              {
                label: 'Лечение детского кариеса и его осложнений',
                price: 'от 10 000'
              },
              {
                label: 'Профилактика и диагностика детей',
                video: 'demo_video_1920_2.mp4',
                price: 'от 65 000'
              },
              {
                label: 'Герметизация фиссур у детей',
                price: 'от 123 000',
              },
            ]
          },
        ]
      },
    ]
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Услуги и цены'
    }
  ]

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (pricesData.list && pricesData.list.length > 0) {
  //     dispatch(saveData(pricesData.list))
  //   }
  // }, [dispatch, pricesData.list])

  return (
    <>
      <Banner {...pricesData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <PriceFilters className={css.filters} />
        <section>
          <PromoBlock className={css.promo} title='Акции' isCompact={true} />
        </section>
        <section className={css.pricelist}>
          <PricesContent className={css.content} />
        </section>
      </Container>
      <TestBanner />
    </>
  )
}

export default withModal(Prices)
