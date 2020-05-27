import React from 'react'
import css from './DoctorTopicsMobile.module.scss'
import DoctorTopicMobile from 'Pages/DoctorDetails/DoctorTopic/DoctorTopicMobile'

const DoctorTopicsMobile = ({
  data
}) => {
  const items = data.map((topic, index) => {
    return (
      <li className={css.item} key={`Topic section #${index}`}>
        <DoctorTopicMobile data={topic} />
      </li>
    )
  })

  return (
    <ul className={css.list}>
      { items }
    </ul>

  )
}

export default DoctorTopicsMobile
