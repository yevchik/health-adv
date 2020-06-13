import React from 'react'
import css from './TopicAdvise.module.scss'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import AdviseCardMobile from 'components/AdviseCard/AdviseCardMobile'
import Heading from 'components/Heading/Heading'

const TopicAdviseMobile = ({
  title,
  topicData
}) => {
  const slides = topicData.map((card, index) => (
    <div key={`Advised item#${index}`}>
      <AdviseCardMobile
        label={card.label}
        url={card.url}
      />
    </div>
  ))

  return (
    <>
      <Heading content={title} type='standard' tag='h3' />
      <SliderCardsMobile className={css.slider}>
        { slides }
      </SliderCardsMobile>
    </>
  )
}

export default TopicAdviseMobile
