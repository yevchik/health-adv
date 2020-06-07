import React from 'react'
import css from './DoctorCardMobile.module.scss'
import { images } from 'index'
import { Link } from 'react-router-dom'

const DoctorCardMobile = ({
  photo,
  name,
  expertise,
  region,
  location,
  isBranchOffice,
  url
}) => {
  return (
    <Link className={css.link} to={url}>
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
    </Link>
  )
}

export default DoctorCardMobile
