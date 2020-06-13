import React, { useEffect } from 'react'
import css from './DoctorsMobile.module.scss'
import { HOME_PAGE } from 'Pages/Routes'
import { useDispatch } from 'react-redux'
import { setDoctorsFilter } from 'store/actions'
import BannerMobile from 'components/Banner/BannerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import DoctorsFilterMobile from 'Pages/Doctors/DoctorsFilter/DoctorsFilterMobile'
import DoctorsGalleryMobile from 'Pages/Doctors/DoctorsGallery/DoctorsGalleryMobile'
import TestBannerMobile from 'components/TestBanner/TestBannerMobile'

const DoctorsMobile = () => {
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
      bgImageMobile: 'doctors__banner@mobile.jpg',
      bgImageTablet: 'doctors__banner@tablet.jpg',
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
      <BannerMobile {...doctorsListData.banner} />
      <div className={css.wrapper}>
        <ContainerMobile className={css.container}>
          <BreadcrumbsMobile dataArray={breadcrumbs} className={css.breadcrumbs} />
          <DoctorsFilterMobile />
          <DoctorsGalleryMobile data={doctorsListData.list} className={css.gallery} />
        </ContainerMobile>
      </div>
      <TestBannerMobile type='simple' />
    </>
)
}

export default DoctorsMobile
