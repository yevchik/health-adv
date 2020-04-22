import React from 'react'
import AdvCard from 'components/AdvCard/AdvCard'
import SliderCards from 'components/SliderCards/SliderCards'

const PromoList = ({ className, data }) => {
  return (
    <div className={className}>
      <SliderCards>
        {data.map((item, index) => (
          <div key={'card' + index}>
            <AdvCard {...item} />
          </div>
        ))}
      </SliderCards>
    </div>
  )
}

export default React.memo(PromoList)
