import React from 'react'
import css from './DoctorBanner.module.scss'
import classnames from 'classnames'
import Container from 'components/Grid/Container'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import { images } from 'index'
import Heading from 'components/Heading/Heading'

const DoctorBanner = ({
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
    <Container className={css.container}>
      <div className={css.text}>
        <Breadcrumbs dataArray={breadcrumbs} className={css.breadcrumbs} />
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
      <img className={css.photo} src={images('./' + photo)} alt={`Фото ${name}`} />
    </Container>
  )
}

export default DoctorBanner
