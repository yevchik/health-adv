import React from 'react'
import css from './TopicPortfolioMobile.module.scss'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import classnames from 'classnames'
import PortfolioCardMobile from 'components/PortfolioCard/PortfolioCardMobile'

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

  return (
    <div>
      {title &&
        <h3 className={css.title}>
          {title}
        </h3>
      }
      <SliderCardsMobile
        className={classnames(css.slider, css.sliderReviews)}
      >
        { slides }
      </SliderCardsMobile>
    </div>
  )
}

export default TopicPortfolioMobile
