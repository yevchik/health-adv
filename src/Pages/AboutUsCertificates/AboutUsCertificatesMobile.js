import React from 'react'
import css from './AboutUsCertificatesMobile.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import CertificatesListMobile
  from 'Pages/AboutUsCertificates/CertificatesList/CertificatesListMobile'
import LocationSelector from 'components/LocationSelector/LocationSelector'
import withModalMobile from 'hoc/withModalMobile'
import TestBannerMobile from 'components/TestBanner/TestBannerMobile'

const AboutUsCertificatesMobile = () => {
  const certificatesData = {
    banner: {
      bgImage: 'certificates__banner@desktop.jpg',
      bgImageMobile: 'certificates__banner@mobile.jpg',
      bgImageTablet: 'certificates__banner@tablet.jpg',
      title: 'Лицензии<br/>и сертификаты',
      descriptor: 'В данном разделе вы можете более подробно ознамиться с лизенциями и сертификатами врачей.'
    },
    list: [
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
      },
      {
        preview: 'license__preview.jpg',
        full: 'license__full.jpg',
        label: 'Приложение № 1 к лицензии № ФС-99-02-005179'
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
      label: 'Лицензии и сертификаты'
    }
  ]

  return (
    <>
      <BannerMobile {...certificatesData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <LocationSelector className={css.select} />
        <CertificatesListMobile className={css.list} list={certificatesData.list} />
        <PromoBlockMobile className={css.promo} />
      </ContainerMobile>
     <TestBannerMobile type='simple' />
    </>
  )
}

export default withModalMobile(AboutUsCertificatesMobile)
