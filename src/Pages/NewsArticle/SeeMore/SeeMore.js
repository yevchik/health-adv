import React from 'react'
import css from './SeeMore.module.scss'
import { createSubArrays } from 'utils'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import SliderCards from 'components/SliderCards/SliderCards'
import InfoCard from 'components/InfoCard/InfoCard'

const SeeMore = ({
  className,
  title,
  list
}) => {
  const structuredList = createSubArrays(list, 3)

  const listItems = structuredList.map((sublist, index) => {
    const innerList = sublist.map((item, innerIndex) => (
      <div className={css.item} key={`See more item#${innerIndex}`}>
        <InfoCard
          className={css.item}
          tag='div'
          label={item.label}
          date={item.date}
          url={item.url}
        />
      </div>
    ))

    return (
      <div className={css.slideWrapper} key={`Sublist #${index}`}>
        {innerList}
      </div>
    )
  })

  return (
    <Container className={className}>
      <Heading content={title} />
      <SliderCards
        className={css.slider}
        controlsType='styledNoFractions'
        slides={1}
      >
        { listItems }
      </SliderCards>
    </Container>
  )
}

export default SeeMore
