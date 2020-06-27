import React from 'react'
import css from './ReviewsPageMobile.module.scss'
import IconArrowRight from 'assets/icons/IconArrowRight'
import { HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import ReviewsContentMobile from 'Pages/ReviewsPage/ReviewsContent/ReviewsContentMobile'
import withModalMobile from 'hoc/withModalMobile'
import TestBannerMobile from 'components/TestBanner/TestBannerMobile'

const ReviewsPageMobile = () => {
  const reviewsData = {
    banner: {
      bgImage: 'reviews__banner@desktop.jpg',
      bgImageMobile: 'reviews__banner@mobile.jpg',
      bgImageTablet: 'reviews__banner@tablet.jpg',
      title: 'Отзывы',
      descriptor: 'Мы&nbsp;являемся одним из&nbsp;лучших стоматологических кабинетов в&nbsp;стране с&nbsp;2012&nbsp;года. Ваш отзыв поможет нам улучшить сервис, а&nbsp;пациентам сделать выбор'
    },
    list: [
      {
        type: 'video',
        preview: 'reviews__preview--1@desktop.jpg',
        client: 'Смолова Татьяна Николаевна',
        date: '11 сентября 2019',
        specialist: 'Кирова Ирина Михайловна',
        services: 'Профилактика',
        video: 'demo_video_1920_2.mp4'
      },
      {
        type: 'video',
        preview: 'reviews__preview--2@desktop.jpg',
        client: 'Кирова Татьяна Николаевна',
        date: '21 августа 2019',
        specialist: 'Кирова Ирина Михайловна',
        services: 'Профилактика',
        video: 'demo_video_1920_2.mp4'
      },
      {
        type: 'banner',
        photo: 'reviews__photo@desktop.png',
        quote: 'Мои любимые и&nbsp;самые замечательные, спасибо за&nbsp;доброту и&nbsp;заботу! Хороших Вам друзей и&nbsp;удачи, а&nbsp;мы&nbsp;не&nbsp;подведем.',
        name: 'Дмитрий Ткач',
        date: '11 августа 2018'
      },
      {
        type: 'cards',
        list: [
          {
            name: 'Дмитрий Ткач',
            date: '11 августа 2018',
            text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту на&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых этому факту на&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости.',
            doctor: 'Кирова Ирина Михайловна',
            services: 'Профилактика'
          },
          {
            name: 'Дмитрий Ткач',
            date: '11 августа 2018',
            text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту на&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых этому факту на&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости.',
            doctor: 'Кирова Ирина Михайловна',
            services: 'Профилактика'
          },
          {
            name: 'Дмитрий Ткач',
            date: '11 августа 2018',
            text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту на&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых этому факту на&nbsp;меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости.',
            doctor: 'Кирова Ирина Михайловна',
            services: 'Профилактика'
          },
        ]
      },
      {
        type: 'video',
        preview: 'reviews__preview--1@desktop.jpg',
        client: 'Смолова Татьяна Николаевна',
        date: '11 сентября 2019',
        specialist: 'Кирова Ирина Михайловна',
        services: 'Профилактика',
        video: 'demo_video_1920_2.mp4'
      },
      {
        type: 'video',
        preview: 'reviews__preview--2@desktop.jpg',
        client: 'Кирова Татьяна Николаевна',
        date: '21 августа 2019',
        specialist: 'Кирова Ирина Михайловна',
        services: 'Профилактика',
        video: 'demo_video_1920_2.mp4'
      },
    ],
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Отзывы'
    }
  ]

  const bannerLink = (
    <button
      className={css.buttonReview}
      onClick={() => {}}
      type='button'
    >
      Оставить отзыв
      <IconArrowRight className={css.bannerIcon} />
    </button>
  )

  return (
    <>
      <BannerMobile
        {...reviewsData.banner}
        extraBlock={bannerLink}
      />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <ReviewsContentMobile className={css.content} list={reviewsData.list} />
      </ContainerMobile>
      <TestBannerMobile />
    </>
  )
}

export default withModalMobile(ReviewsPageMobile)
