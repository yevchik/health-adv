import React from 'react'
import css from 'Pages/AboutUsDocuments/AboutUsDocumentsMobile.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import LocationSelector from 'components/LocationSelector/LocationSelector'
import withModalMobile from 'hoc/withModalMobile'
import TestBannerMobile from 'components/TestBanner/TestBannerMobile'
import DocumentsListMobile from 'Pages/AboutUsDocuments/DocumentsList/DocumentsListMobile'

const AboutUsDocumentsMobile = () => {
  const documentsData = {
    banner: {
      bgImage: 'documents__banner@desktop.jpg',
      bgImageMobile: 'documents__banner@mobile.jpg',
      bgImageTablet: 'documents__banner@tablet.jpg',
      title: 'Правовые<br/>документы',
    },
    list: [
      {
        label: 'Структура и органы управления',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Виды медицинской помощи',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Правила внутреннего распорядка для потребительских услуг',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Памятка о гарантиях бесплатного оказания медицинской помощи',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Контакты справочных служб',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Правила о предоставлении медицинских услуг',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'График приема граждан',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Памятка о показателях доступности и качества медицинской помощи',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Расписание работы врачей',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Правила записи на первичный прием',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Страховые медицинские организации',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Правила подготовки к диагностическим исследованиям',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Закон о правах и обязанностях граждан в сфере охраны здоровья',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Правила и сроки госпитализации',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Лицензия Паттерсон Дентал',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Правила предоставления платных медицинских услуг',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Перечень лекарственных препаратов',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Прейскурант',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Памятка о диспансеризации населения в медицинской организации',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
      {
        label: 'Адреса и контактные телефоны',
        format: 'pdf',
        size: '1 мб',
        file: 'dummy.pdf'
      },
    ]
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'О клинике',
      url: ABOUT_US
    },
    {
      label: 'Правовые документы'
    }
  ]

  return (
    <>
      <BannerMobile {...documentsData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <LocationSelector className={css.select} />
        <DocumentsListMobile className={css.list} list={documentsData.list} />
        <PromoBlockMobile className={css.promo} />
      </ContainerMobile>
     <TestBannerMobile type='simple' />
    </>
  )
}

export default withModalMobile(AboutUsDocumentsMobile)
