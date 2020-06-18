import React from 'react'
import css from './AboutUsDocuments.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import withModal from 'hoc/withModal'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import TwoColumns from 'components/TwoColumns/TwoColumns'
import AboutAside from 'components/AboutAside/AboutAside'
import TestBanner from 'components/TestBanner/TestBanner'
import DocumentsList from 'Pages/AboutUsDocuments/DocumentsList/DocumentsList'

const AboutUsDocuments = () => {
  const documentsData = {
    banner: {
      bgImage: 'documents__banner@desktop.jpg',
      title: 'Правовые документы',
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
      <Banner {...documentsData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <TwoColumns
          classWrapper={css.content}
          main={<DocumentsList list={documentsData.list} />}
          aside={<AboutAside />}
        />
      </Container>
     <TestBanner />
    </>
  )
}

export default withModal(AboutUsDocuments)
