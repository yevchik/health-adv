import React from 'react'
import css from './DoctorBannerMobile.module.scss'
import classnames from 'classnames'
import { images } from 'index'
import Heading from 'components/Heading/Heading'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'

const DoctorBannerMobile = ({
  breadcrumbs,
  data,
  reviewsQuantity
}) => {
  const {
    photo,
    name,
    speciality = '',
    address = '',
    experience = ''
  } = data

  return (
    <>
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} classContainer={css.breadcrumbs} />
        <div className={css.text}>
          <Heading content={name} className={css.title}  />
          <p className={css.speciality}>
            { speciality }
          </p>
          <ul className={css.list}>
            {address &&
              <li className={classnames(css.item, css.itemAddress)} dangerouslySetInnerHTML={{ __html: address }} />
            }
            {reviewsQuantity > 0 &&
              <li className={classnames(css.item, css.itemReviews)} dangerouslySetInnerHTML={{ __html: `Отзывы: ${reviewsQuantity}` }} />
            }
            {experience &&
              <li className={classnames(css.item, css.itemExperience)} dangerouslySetInnerHTML={{ __html: experience }} />
            }
          </ul>
        </div>
        <div className={css.frame}>
          <img className={css.photo} src={images('./' + photo)} alt={`Фото ${name}`} />
        </div>
      </ContainerMobile>
    </>
  )
}

export default DoctorBannerMobile
