import React from 'react'
import css from './DoctorTopicsMobile.module.scss'
import DoctorTopicMobile from 'pages/doctor_details/DoctorTopic/DoctorTopicMobile'
import classnames from 'classnames'

const DoctorTopicsMobile = ({
  className,
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
    <ul className={classnames(css.list, className)}>
      { items }
    </ul>

  )
}

export default DoctorTopicsMobile
