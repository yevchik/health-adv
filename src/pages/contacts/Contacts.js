import React, { useEffect, useState } from 'react'
import css from './Contacts.module.scss'
import Container from 'components/Grid/Container'
 import { HOME_PAGE } from 'utils/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import Heading from 'components/Heading/Heading'
import ContactsTabs from 'pages/contacts/ContactsTabs/ContactsTabs'
import Banner from 'components/Banner/Banner'
import MapComponent from 'components/Map/Map'
import SignupBanner from 'components/SignupBanner/SignupBanner'
import ContactForm from 'components/SignupBanner/ContactForm/ContactForm'
import IconLock from 'assets/icons/IconLock'
import Link from 'next/link'

const Contacts = ({contacts}) => {
  const contactsData = {
    banner: {
      bgImage: 'contacts__banner@desktop.jpg',
      title: 'Контакты',
      descriptor: 'Выбирайте подходящую клинику рядом с&nbsp;домом или работой, и&nbsp;записывайтесь на&nbsp;приём.',
    },
    title: 'Филиалы клиники',
    list: contacts,
    mapSettings: {
      zoom: 8,
      center: contacts.length ? [contacts[0].latitude, contacts[0].longitude] : [55.126557, 38.750870]
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

  const pins = contactsData.list.map(item => [item.latitude, item.longitude])
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
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с 
              <Link href='/'><a className={css.link}> политикой </a></Link> ознакомлен
          </p>}
        />}
      />
    </>
  )
}

export default Contacts
