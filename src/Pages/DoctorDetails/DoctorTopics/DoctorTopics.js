import React from 'react'
import css from './DoctorTopics.module.scss'
import { Waypoint } from 'react-waypoint'
import DoctorTopic from 'Pages/DoctorDetails/DoctorTopic/DoctorTopic'

export const WaypointOffsets = {
  TOP: '45%',
  BOTTOM: '50%'
}

const DoctorTopics = ({
  onEnterHandler,
  createRef,
  data
}) => {
  const items = data.map((topic, index) => {
    return (
      <div className={css.item} key={`Topic section #${index}`}>
        <Waypoint
          onEnter={() => onEnterHandler(topic.type)}
          topOffset={WaypointOffsets.TOP}
          bottomOffset={WaypointOffsets.BOTTOM}
        >
          <div ref={node => createRef(node, topic.type)}>
            <DoctorTopic data={topic} />
          </div>
        </Waypoint>
      </div>
    )
  })

  return (
    <>
      { items }
    </>

  )
}

export default DoctorTopics
