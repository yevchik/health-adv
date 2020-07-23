import React, { useEffect, useState } from 'react'
import css from './ContactsMobile.module.scss'
 import { HOME_PAGE } from 'utils/Routes'
import Heading from 'components/Heading/Heading'
import IconLock from 'assets/icons/IconLock'
import Link from 'next/link'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import SignupBannerMobile from 'components/SignupBanner/SignupBannerMobile'
import ContactsTabsMobile from 'pages/contacts/ContactsTabs/ContactsTabsMobile'
import MapComponentMobile from 'components/Map/MapMobile'
import ContactFormMobile from 'components/SignupBanner/ContactForm/ContactFormMobile'

const ContactsMobile = ({contacts}) => {
  const contactsData = {
    banner: {
      bgImage: 'contacts__banner@desktop.jpg',
      bgImageMobile: 'contacts__banner@mobile.jpg',
      bgImageTablet: 'contacts__banner@tablet.jpg',
      title: 'Контакты',
      descriptor: 'Выбирайте подходящую клинику рядом с&nbsp;домом или работой, и&nbsp;записывайтесь на&nbsp;приём.',
    },
    title: 'Филиалы клиники',
    list: contacts,
    mapSettings: {
      zoom: 7,
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

  return (
    <>
      <BannerMobile {...contactsData.banner} />
      <ContainerMobile className={css.container} isDecorated>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <Heading
          className={css.title}
          content={contactsData.title}
          type='standard'
        />
        <ContactsTabsMobile
          data={data}
          selectedCity={selectedCity}
          updateSelectedCity={updateSelectedCity}
        />
      </ContainerMobile>
      <MapComponentMobile
        {...contactsData.mapSettings}
        marks={pins}
      />
      <SignupBannerMobile
        title='Остались вопросы?'
        descriptor='Мы ответим на все интересующие вопросы и поможем в любых даже сложных случаях'
        noWarning={true}
        specialFormComponent={<ContactFormMobile
          warning={<p className={css.warning}>
            <IconLock className={css.iconLock} />
            <span>
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с <Link href='/'><a className={css.link} >политикой</a></Link> ознакомлен
            </span>
          </p>}
        />}
      />
    </>
  )
}

export default ContactsMobile
