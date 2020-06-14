import React, { useEffect } from 'react'
import css from 'Pages/Doctors/Doctors.module.scss'
import Banner from 'components/Banner/Banner'
import { HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import DoctorsGallery from 'Pages/Doctors/DoctorsGallery/DoctorsGallery'
import Container from 'components/Grid/Container'
import TestBanner from 'components/TestBanner/TestBanner'
import { useDispatch } from 'react-redux'
import { setDoctorsFilter } from 'store/actions'
import DoctorsFilter from 'Pages/Doctors/DoctorsFilter/DoctorsFilter'

const Doctors = () => {
  const breadcrumbs = [
  {
    label: 'Главная',
      url: HOME_PAGE
  },
  {
    label: 'Врачи'
  }
]

  const doctorsListData = {
    banner: {
      bgImage: 'doctors__banner@desktop.jpg',
      title: 'Врачи',
      descriptor: 'Наш опыт заботы о&nbsp;клиентах основан на&nbsp;многолетней практике и&nbsp;стремлении сделать жизнь наших пациентов более полноценной.'
    },
    list: [
      {
        id: 0,
        photo: 'doctors__photo--1@desktop.png',
        name: 'Абдулатипов Рамзан Исмаилович',
        expertise: 'Стоматолог-терапевт',
        region: 'Рязань',
        location: 'ул. Громовой, д. 40',
        isBranchOffice: false,
      },
      {
        id: 1,
        photo: 'doctors__photo--2@desktop.png',
        name: 'Асламбекова Гюльнара Исааковна',
        expertise: 'Детский стоматолог',
        region: 'Вологда',
        location: 'ул. Ленина, д. 1',
        isBranchOffice: true,
      },
      {
        id: 2,
        photo: 'doctors__photo--3@desktop.png',
        name: 'Орджоникидзе Сталик Исламович',
        expertise: 'Отоларинголог',
        region: 'Казань',
        location: 'ул. Ленина, д. 1',
        isBranchOffice: true,
      },
      {
        id: 3,
        photo: 'doctors__photo--1@desktop.png',
        name: 'Абдулатипов Рамзан Исмаилович-2',
        expertise: 'Стоматолог-терапевт',
        region: 'Рязань',
        location: 'ул. Громовой, д. 40',
        isBranchOffice: false,
      },
      {
        id: 4,
        photo: 'doctors__photo--2@desktop.png',
        name: 'Асламбекова Гюльнара Исааковна-2',
        expertise: 'Детский стоматолог',
        region: 'Вологда',
        location: 'ул. Ленина, д. 1',
        isBranchOffice: true,
      },
      {
        id: 5,
        photo: 'doctors__photo--3@desktop.png',
        name: 'Орджоникидзе Сталик Исламович-2',
        expertise: 'Отоларинголог',
        region: 'Казань',
        location: 'ул. Ленина, д. 1',
        isBranchOffice: true,
      },
    ]
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDoctorsFilter(doctorsListData.list))
  }, [dispatch, doctorsListData.list])

  return (
    <>
      <Banner {...doctorsListData.banner} />
      <Container>
        <Breadcrumbs dataArray={breadcrumbs} className={css.breadcrumbs} />
        <DoctorsFilter />
        <DoctorsGallery data={doctorsListData.list} className={css.gallery} />
      </Container>
      <TestBanner type='simple' />
    </>
)
}

export default Doctors
