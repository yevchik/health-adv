import React from 'react'
import css from './TopicPortfolioMobile.module.scss'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import classnames from 'classnames'
import PortfolioCardMobile from 'components/PortfolioCard/PortfolioCardMobile'
import { isMobileOnly } from 'react-device-detect'

const TopicPortfolioMobile = ({
  title,
  list
}) => {
  const slides = list.map(({ image, label }, index) => (
    <div className={css.card} key={`Portfolio item#${index}`}>
      <PortfolioCardMobile
        img={image}
        label={label}
      />
    </div>
  ))

  const content = isMobileOnly
    ? (
      <SliderCardsMobile
        className={classnames(css.slider, css.sliderReviews)}
      >
        { slides }
      </SliderCardsMobile>
    )
    : (
      <div className={css.list}>
        { slides }
      </div>
    )

  return (
    <div>
      {title &&
        <h3 className={css.title}>
          {title}
        </h3>
      }
      { content }
    </div>
  )
}

export default TopicPortfolioMobile
