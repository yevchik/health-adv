import React, { useEffect, useRef, useState } from 'react'
import css from 'Pages/DoctorDetails/ContentWithSidebar/ContentWithSidebar.module.scss'
import classnames from 'classnames'
import DoctorTopics from 'Pages/DoctorDetails/DoctorTopics/DoctorTopics'
import ScrollTriggers from 'components/ScrollTriggers/ScrollTriggers'
import { useSelector } from 'react-redux'
import SidePromo from 'containers/SidePromo/SidePromo'

const SCROLL_TO_ELEMENT_OFFSET = 50

const ContentWithSidebar = ({
  className,
  data,
}) => {
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const [areWaypointsDisabled, setWaypointStatus] = useState(false)
  const refs = useRef({})

  const scrollTriggers = data && data.content
    ? data.content.map(section => ({
      label: section.tab || section.title,
      type: section.type
    }))
    : []

  const [activeTab, setActiveTab] = useState(scrollTriggers[0].type)
  const createRef = (node, tab) => refs.current[tab] = node

  const handleClickTrigger = (waypoint) => {
    setWaypointStatus(true)
    setActiveTab(waypoint)

    const element = refs.current[waypoint]

    document.documentElement.scrollTo({
      // eslint-disable-next-line no-restricted-globals
      top: element.getBoundingClientRect().top + pageYOffset - SCROLL_TO_ELEMENT_OFFSET * fontSize / 10,
      behavior: 'smooth'
    })
  }

  const handleWheelScroll = () => {
    setWaypointStatus(false)
  }

  useEffect(() => {
    document.addEventListener('wheel', handleWheelScroll)
    return document.removeEventListener('wheel', handleWheelScroll)
  }, [])

  const content = (
    <DoctorTopics
      data={data.content}
      onEnterHandler={(type) => {
        if (areWaypointsDisabled) return null

        setActiveTab(type)
      }}
      createRef={createRef}
    />
  )

  return (
    <div className={classnames(css.wrapper, className)}>
      <div className={css.content}>
        { content }
      </div>
      <div className={css.stickyContainer}>
        <div className={css.sticky}>
          <ScrollTriggers
            activeTab={activeTab}
            list={scrollTriggers}
            onClick={(type) => handleClickTrigger(type)}
          />
          <SidePromo className={css.promo} />
        </div>
      </div>
    </div>

  )
}

export default React.memo(ContentWithSidebar)
