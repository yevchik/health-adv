import React from 'react'
import css from './SeeMoreMobile.module.scss'
import Heading from 'components/Heading/Heading'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import InfoCardMobile from 'components/InfoCard/InfoCardMobile'

const SeeMoreMobile = ({
  className,
  title,
  list
}) => {
  const listItems = list.map((item, index) => {
    return (
      <div className={css.item} key={`See more item#${index}`}>
        <InfoCardMobile
          className={css.item}
          tag='div'
          label={item.label}
          date={item.date}
          url={item.url}
        />
      </div>
    )
  })

  return (
    <div className={className}>
      <Heading content={title} />
      <SliderCardsMobile
        className={css.slider}
        controlsType='styledNoFractions'
        slides={1}
      >
        { listItems }
      </SliderCardsMobile>
    </div>
  )
}

export default SeeMoreMobile
