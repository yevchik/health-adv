import React, { useEffect, useState } from 'react'
import css from './Contacts.module.scss'
import Container from 'components/Grid/Container'
import { HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import Heading from 'components/Heading/Heading'
import ContactsTabs from 'Pages/Contacts/ContactsTabs/ContactsTabs'
import Banner from 'components/Banner/Banner'
import MapComponent from 'components/Map/Map'
import SignupBanner from 'components/SignupBanner/SignupBanner'
import ContactForm from 'components/SignupBanner/ContactForm/ContactForm'
import IconLock from 'assets/icons/IconLock'
import { Link } from 'react-router-dom'

const Contacts = () => {
  const contactsData = {
    banner: {
      bgImage: 'contacts__banner@desktop.jpg',
      title: 'Контакты',
      descriptor: 'Выбирайте подходящую клинику рядом с&nbsp;домом или работой, и&nbsp;записывайтесь на&nbsp;приём.',
    },
    title: 'Филиалы клиники',
    list: [
      {
        name: 'Клиника Patterson Dental 1',
        city: 'Москва',
        address: '1 - 105062, Москва, 1-й Бабьегородский пер., д. 28',
        coords: [55.799769, 37.677028],
        schedule: 'Ежедневно с 10.00 до 21.00',
        phone: '+7 (495) 453 95 93',
        mail: 'info@inzhsys.ru',
        gallery: [
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
        ]
      },
      {
        name: 'Клиника Patterson Dental 2',
        city: 'Москва',
        address: '2 - 105062, Москва, 1-й Бабьегородский пер., д. 28',
        coords: [55.799769, 37.603661],
        schedule: 'Ежедневно с 10.00 до 21.00',
        phone: '+7 (495) 453 95 93',
        mail: 'info@inzhsys.ru',
        gallery: [
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
        ]
      },
      {
        name: 'Клиника Patterson Dental 3',
        city: 'Москва',
        address: '3 - 105062, Москва, 1-й Бабьегородский пер., д. 28',
        coords: [55.823210, 37.480692],
        schedule: 'Ежедневно с 10.00 до 21.00',
        phone: '+7 (495) 453 95 93',
        mail: 'info@inzhsys.ru',
        gallery: [
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
        ]
      },
      {
        name: 'Клиника Patterson Dental 4',
        city: 'Москва',
        address: '4 - 105062, Москва, 1-й Бабьегородский пер., д. 28',
        coords: [55.744388, 37.472079],
        schedule: 'Ежедневно с 10.00 до 21.00',
        phone: '+7 (495) 453 95 93',
        mail: 'info@inzhsys.ru',
        gallery: [
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
        ]
      },
      {
        name: 'Клиника Patterson Dental 5',
        city: 'Москва',
        address: '5 - 105062, Москва, 1-й Бабьегородский пер., д. 28',
        coords: [55.674860, 37.708786],
        schedule: 'Ежедневно с 10.00 до 21.00',
        phone: '+7 (495) 453 95 93',
        mail: 'info@inzhsys.ru',
        gallery: [
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
        ]
      },
      {
        name: 'Клиника Patterson Dental в Рязани',
        city: 'Рязань',
        address: 'Рязань, Заводской проезд, дом 1',
        coords: [54.630858, 39.725310],
        schedule: 'Ежедневно с 10.00 до 21.00',
        phone: '+7 (4912) 45 95 93',
        mail: 'info@inzhsys.ru',
        gallery: [
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
          {
            img: 'about__gallery-item@desktop.jpg',
            label: 'Подпись к фотографии'
          },
        ]
      },
    ],
    mapSettings: {
      zoom: 8,
      center: [55.126557, 38.750870]
    }
  }

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Контакты'
    }
  ]

  const [data, updateData] = useState(null)
  const [selectedCity, updateSelectedCity] = useState({})

  useEffect(() => {
    const structuredAddresses = {}
    const dataFetched = JSON.parse(JSON.stringify(contactsData))
    dataFetched.list.forEach(item => {
      if (!structuredAddresses[item.city]) {
        structuredAddresses[item.city] = []
      }
      structuredAddresses[item.city].push(item)
    })
    if (!data) {
      updateData(structuredAddresses)
      updateSelectedCity(Object.keys(structuredAddresses)[0])
    }
  }, [data, contactsData])

  const pins = contactsData.list.map(item => item.coords)
  console.log(pins)

  return (
    <>
      <Banner {...contactsData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <Heading
          className={css.title}
          content={contactsData.title}
          type='standard'
        />
        <ContactsTabs data={data} selectedCity={selectedCity} updateSelectedCity={updateSelectedCity} />
      </Container>
      <MapComponent
        {...contactsData.mapSettings}
        marks={pins}
      />
      <SignupBanner
        title='Остались вопросы?'
        descriptor='Мы ответим на все интересующие вопросы и поможем в любых даже сложных случаях'
        noWarning={true}
        specialFormComponent={<ContactForm
          warning={<p className={css.warning}>
            <IconLock className={css.iconLock} />
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с <Link className={css.link} to='/'>политикой</Link> ознакомлен
          </p>}
        />}
      />
    </>
  )
}

export default Contacts
