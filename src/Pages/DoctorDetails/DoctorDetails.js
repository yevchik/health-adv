import React from 'react'
import css from './DoctorDetails.module.scss'
import classnames from 'classnames'
import DoctorBanner from './DoctorBanner/DoctorBanner'
import { HOME_PAGE } from 'Pages/Routes'

const DoctorDetails = () => {
  const doctorData = {
    banner: {
      photo: 'doctor__banner-photo@desktop.png',
      name: 'Кирова Ирина Михайловна',
      speciality: 'Детский стоматолог',
      address: 'Рязань, ул. Громовой, д.&nbsp;40',
      experience: 'Опыт врачебной работы более 15 лет'
    },
    reviews: [
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
    ],
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

  return (
    <section>
      <DoctorBanner breadcrumbs={breadcrumbs} data={doctorData.banner} reviewsQuantity={doctorData.reviews.length} />
    </section>
  )
}

export default DoctorDetails
