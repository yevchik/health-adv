import React from 'react'
import css from './DoctorCard.module.scss'
import { images } from 'assets/index'
import Link from 'next/link'

const DoctorCard = ({
  photo,
  name,
  expertise,
  region,
  location,
  isBranchOffice,
  url
}) => {
  return (
    <Link href={url}>
      <a className={css.link}>
        <figure className={css.content}>
          <div className={css.frame}>
          <img className={css.photo} src={images('./' + photo)} alt={`Фотография врача ${name}`} />
          </div>
          <figcaption>
            <p className={css.name} dangerouslySetInnerHTML={{ __html: name }} />
            <p className={css.expertise} dangerouslySetInnerHTML={{ __html: expertise }} />
            <p className={css.location}>
              { isBranchOffice ? 'Филиал: ' : '' }
              { `${region} ${location}` }
            </p>
          </figcaption>
        </figure>
      </a>
    </Link>
  )
}

export default DoctorCard
