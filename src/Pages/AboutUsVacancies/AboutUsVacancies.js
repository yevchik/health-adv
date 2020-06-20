import React from 'react'
import css from './AboutUsVacancies.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import TwoColumns from 'components/TwoColumns/TwoColumns'
import AboutAside from 'components/AboutAside/AboutAside'
import VacanciesList from 'Pages/AboutUsVacancies/VacanciesList/VacanciesList'

const AboutUsVacancies = () => {
  const vacanciesData = {
    banner: {
      bgImage: 'vacancies__banner@desktop.jpg',
      title: 'Вакансии',
      descriptor: 'Выберите здесь интересующую вас вакансию и отправьте резюме на электронный адрес personal@dental.ru. Мы обязательно с вами свяжемся.'
    },
    list: [
      {
        title: 'Детский стоматолог, Москва',
        background: 'vacancy__banner@desktop.jpg',
        content: [
          {
            subtitle: 'Обязанности',
            sublist: [
              'Качественно оказывать услугу',
              'Уметь грамотно консультировать пациента (при необходимости, мы&nbsp;обучаем этому)',
              'Делать фотографии своей работы&nbsp;&mdash; ДО/ПОСЛЕ',
              'Постоянное обучение',
              'Готовность к&nbsp;инновациям в&nbsp;работе'
            ]
          },
          {
            subtitle: 'Условия',
            sublist: [
              'Предоставляем обучение на&nbsp;базе учебного центра клиники',
              'Обмен опытом с&nbsp;главным врачом по&nbsp;направлению терапия',
              'Посменный график работы',
              'Зарплата от&nbsp;60&nbsp;000 руб',
              'Официальное трудоустройство, полный соц.пакет'
            ]
          },
          {
            subtitle: 'Требования',
            sublist: [
              'Опыт работы от&nbsp;1&nbsp;года',
              'Документы об&nbsp;образовании',
            ]
          },
          {
            subtitle: 'Место работы',
            sublist: [
              'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            ]
          },
        ]
      },
      {
        title: 'Опытный стоматолог-ортопед, Рязань',
        background: 'vacancy__banner@desktop.jpg',
        content: [
          {
            subtitle: 'Обязанности',
            sublist: [
              'Качественно оказывать услугу',
              'Уметь грамотно консультировать пациента (при необходимости, мы&nbsp;обучаем этому)',
              'Делать фотографии своей работы&nbsp;&mdash; ДО/ПОСЛЕ',
              'Постоянное обучение',
              'Готовность к&nbsp;инновациям в&nbsp;работе'
            ]
          },
          {
            subtitle: 'Условия',
            sublist: [
              'Предоставляем обучение на&nbsp;базе учебного центра клиники',
              'Обмен опытом с&nbsp;главным врачом по&nbsp;направлению терапия',
              'Посменный график работы',
              'Зарплата от&nbsp;60&nbsp;000 руб',
              'Официальное трудоустройство, полный соц.пакет'
            ]
          },
          {
            subtitle: 'Требования',
            sublist: [
              'Опыт работы от&nbsp;1&nbsp;года',
              'Документы об&nbsp;образовании',
            ]
          },
          {
            subtitle: 'Место работы',
            sublist: [
              'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            ]
          },
        ]
      },
      {
        title: 'Начинающий стоматолог-ортопед, Москва',
        background: 'vacancy__banner@desktop.jpg',
        content: [
          {
            subtitle: 'Обязанности',
            sublist: [
              'Качественно оказывать услугу',
              'Уметь грамотно консультировать пациента (при необходимости, мы&nbsp;обучаем этому)',
              'Делать фотографии своей работы&nbsp;&mdash; ДО/ПОСЛЕ',
              'Постоянное обучение',
              'Готовность к&nbsp;инновациям в&nbsp;работе'
            ]
          },
          {
            subtitle: 'Условия',
            sublist: [
              'Предоставляем обучение на&nbsp;базе учебного центра клиники',
              'Обмен опытом с&nbsp;главным врачом по&nbsp;направлению терапия',
              'Посменный график работы',
              'Зарплата от&nbsp;60&nbsp;000 руб',
              'Официальное трудоустройство, полный соц.пакет'
            ]
          },
          {
            subtitle: 'Требования',
            sublist: [
              'Опыт работы от&nbsp;1&nbsp;года',
              'Документы об&nbsp;образовании',
            ]
          },
          {
            subtitle: 'Место работы',
            sublist: [
              'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            ]
          },
        ]
      },
      {
        title: 'Хирург, Рязань',
        background: 'vacancy__banner@desktop.jpg',
        content: [
          {
            subtitle: 'Обязанности',
            sublist: [
              'Качественно оказывать услугу',
              'Уметь грамотно консультировать пациента (при необходимости, мы&nbsp;обучаем этому)',
              'Делать фотографии своей работы&nbsp;&mdash; ДО/ПОСЛЕ',
              'Постоянное обучение',
              'Готовность к&nbsp;инновациям в&nbsp;работе'
            ]
          },
          {
            subtitle: 'Условия',
            sublist: [
              'Предоставляем обучение на&nbsp;базе учебного центра клиники',
              'Обмен опытом с&nbsp;главным врачом по&nbsp;направлению терапия',
              'Посменный график работы',
              'Зарплата от&nbsp;60&nbsp;000 руб',
              'Официальное трудоустройство, полный соц.пакет'
            ]
          },
          {
            subtitle: 'Требования',
            sublist: [
              'Опыт работы от&nbsp;1&nbsp;года',
              'Документы об&nbsp;образовании',
            ]
          },
          {
            subtitle: 'Место работы',
            sublist: [
              'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
            ]
          },
        ]
      },
      {
        title: 'Хирург-имплантолог, Рязань',
        background: 'vacancy__banner@desktop.jpg',
        content: [
          {
            subtitle: 'Обязанности',
            sublist: [
              'Качественно оказывать услугу',
              'Уметь грамотно консультировать пациента (при необходимости, мы&nbsp;обучаем этому)',
              'Делать фотографии своей работы&nbsp;&mdash; ДО/ПОСЛЕ',
              'Постоянное обучение',
              'Готовность к&nbsp;инновациям в&nbsp;работе'
            ]
          },
          {
            subtitle: 'Условия',
            sublist: [
              'Предоставляем обучение на&nbsp;базе учебного центра клиники',
              'Обмен опытом с&nbsp;главным врачом по&nbsp;направлению терапия',
              'Посменный график работы',
              'Зарплата от&nbsp;60&nbsp;000 руб',
              'Официальное трудоустройство, полный соц.пакет'
            ]
          },
          {
            subtitle: 'Требования',
            sublist: [
              'Опыт работы от&nbsp;1&nbsp;года',
              'Документы об&nbsp;образовании',
            ]
          },
          {
            subtitle: 'Место работы',
            sublist: [
              'Москва, 1-й Бабьегородский пер., д.&nbsp;28',
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
      label: 'О клинике',
      url: ABOUT_US
    },
    {
      label: 'Вакансии'
    }
  ]

  return (
    <>
      <Banner {...vacanciesData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <TwoColumns
          classWrapper={css.content}
          main={<VacanciesList list={vacanciesData.list} />}
          aside={<AboutAside />}
        />
      </Container>
    </>
  )
}

export default AboutUsVacancies
