import React from 'react'
import css from './DoctorDetails.module.scss'
import DoctorBanner from './DoctorBanner/DoctorBanner'
import { HOME_PAGE } from 'Pages/Routes'
import Container from 'components/Grid/Container'
import ContentWithSidebar from 'Pages/DoctorDetails/ContentWithSidebar/ContentWithSidebar'
import withModal from 'hoc/withModal'
import TestBanner from 'components/TestBanner/TestBanner'
import DoctorAdvice from 'Pages/DoctorDetails/DoctorAdvice/DoctorAdvice'

const DoctorDetails = () => {
  const doctorData = {
    banner: {
      photo: 'doctor__banner-photo@desktop.png',
      name: 'Кирова Ирина Михайловна',
      speciality: 'Детский стоматолог',
      address: 'Рязань, ул. Громовой, д.&nbsp;40',
      experience: 'Опыт врачебной работы более 15 лет'
    },
    content: [
      {
        type: 'expertise',
        title: 'Специализация',
        data: {
          list: [
            'Лечение кариеса',
            'Лечение каналов под микроскопом (пульпит, периодонтит)',
            'Лечение каналов под микроскопом (пульпит, периодонтит)',
            'Лечение кариеса',
          ]
        }
      },
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'Для меня самое главное построить доверительные и&nbsp;долгосрочные отношения с&nbsp;нашими маленькими пациентами. От&nbsp;того, каким будет первый опыт знакомства малыша с&nbsp;детским стоматологом зависит очень много. Для меня, важно не&nbsp;только вылечить проблемный зуб, но&nbsp;и&nbsp;научить ребёнка не&nbsp;бояться, увлечь его, заинтересовать, показать как правильно&nbsp;и, главное, с&nbsp;удовольствием чистить зубы. Для того, чтобы детки могли не&nbsp;только смело улыбаться, но&nbsp;и&nbsp;бережно относиться к&nbsp;своему здоровью.',
          video: {
            preview: 'doctor__about-preview@desktop.jpg',
            file: 'demo_video_1920.mp4'
          }
        }
      },
      {
        type: 'education',
        title: 'Образование',
        data: {
          list: [
            {
              key: '2008 г.',
              value: 'Сертификат &#8470;&nbsp;000181 от&nbsp;25.06.2013&nbsp;ФГБУ &laquo;ЦНИИС и&nbsp;Минздрава России&raquo; г. Москва Рег. &#8470;&nbsp;2468 Ортодонтия'
            },
            {
              key: '2003&ndash;2005&nbsp;гг.',
              value: 'Диплом ФГБУ «Центральный научно-исследовательский институт стоматологии и челюстно-лицевой хирургии» Удостоверение клинической ординатуры от 31.08.2013 Рег. № 848 Ортодонтия'
            },
          ]
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: [
            {
              image: 'doctor__about-certificate1.jpg',
              label: 'Описание документа'
            },
            {
              image: 'doctor__about-certificate2.jpg',
              label: 'Описание документа'
            },
            {
              image: 'doctor__about-certificate2.jpg',
              label: 'Описание документа'
            },
            {
              image: 'doctor__about-certificate2.jpg',
              label: 'Описание документа'
            },
            {
              image: 'doctor__about-certificate1.jpg',
              label: 'Описание документа'
            },
            {
              image: 'doctor__about-certificate2.jpg',
              label: 'Описание документа'
            },
          ]
        }
      },
      {
        type: 'experience',
        title: 'Опыт работы',
        data: {
          list: [
            {
              key: '2007–н.в.',
              value: 'Врач хирург-стоматолог, врач ортопед-стоматолог, имплантолог. Частная стоматологическая клиника «32 Дент» г. Москва.'
            },
            {
              key: '2005–2007',
              value: 'Врач челюстно-лицевой хирург, отделение челюстно-лицевой хирургии СОКБ (Смоленская областная клиническая больница).'
            },
            {
              key: '2005–2007',
              value: 'Врач челюстно-лицевой хирург, отделение челюстно-лицевой хирургии СОКБ (Смоленская областная клиническая больница).'
            },
            {
              key: '2005–2007',
              value: 'Врач челюстно-лицевой хирург, отделение челюстно-лицевой хирургии СОКБ (Смоленская областная клиническая больница).'
            },
          ]
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: 'Дмитрий Ткач1',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
            {
              name: 'Дмитрий Ткач2',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
            {
              name: 'Дмитрий Ткач3',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
            {
              name: 'Дмитрий Ткач4',
              date: '12 августа 2018',
              text: 'Мне нужно было ставить брекет систему, я&nbsp;всячески противилась этому факту&nbsp;На меня не&nbsp;действовали никакие уговоры, ни&nbsp;о&nbsp;полезности, ни&nbsp;о&nbsp;необходимости. Лишь когда рассказали о&nbsp;невидимых брекетах, я&nbsp;согласилась пойти хотя&nbsp;бы на&nbsp;консультацию.',
              specialist: 'Кирова Ирина Михайловна',
              services: 'Профилактика',
            },
          ]
        }
      }
    ],
    advised: [
      {
        photo: 'doctor__about-advice1@desktop.png',
        name: 'Краснов Сергей Викторович',
        expertise: 'Стоматолог-терапевт',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
      {
        photo: 'doctor__about-advice2@desktop.png',
        name: 'Кирова Ирина Михайловна',
        expertise: 'Детский стоматолог',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
      {
        photo: 'doctor__about-advice3@desktop.png',
        name: 'Краснов Сергей Викторович',
        expertise: 'Стоматолог-терапевт',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
      {
        photo: 'doctor__about-advice2@desktop.png',
        name: 'Кирова Ирина Михайловна',
        expertise: 'Детский стоматолог',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
      {
        photo: 'doctor__about-advice2@desktop.png',
        name: 'Кирова Ирина Михайловна',
        expertise: 'Детский стоматолог',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
      {
        photo: 'doctor__about-advice3@desktop.png',
        name: 'Краснов Сергей Викторович',
        expertise: 'Стоматолог-терапевт',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
      {
        photo: 'doctor__about-advice2@desktop.png',
        name: 'Кирова Ирина Михайловна',
        expertise: 'Детский стоматолог',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
      {
        photo: 'doctor__about-advice3@desktop.png',
        name: 'Краснов Сергей Викторович',
        expertise: 'Стоматолог-терапевт',
        location: 'Филиал: Рязань, ул. Громовой, д. 40'
      },
    ]
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Врачи',
      url: '/doctors'
    },
    {
      label: 'Кирова Ирина Михайловна'
    }
  ]

  const reviews = doctorData.content.find(item => item.type === 'reviews')

  return (
    <section>
      <DoctorBanner
        breadcrumbs={breadcrumbs}
        data={doctorData.banner}
        reviewsQuantity={reviews.data.list.length}
      />
      <Container>
        <ContentWithSidebar
          className={css.content}
          data={doctorData}
        />
        {doctorData.advised && doctorData.advised.length > 0 &&
          <DoctorAdvice list={doctorData.advised} />
        }
      </Container>
      <TestBanner type='simple' />
    </section>
  )
}

export default withModal(DoctorDetails)
