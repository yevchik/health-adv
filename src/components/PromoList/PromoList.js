import React from 'react'
import css from './PromoList.module.scss'
import AdvCard from 'components/AdvCard/AdvCard'
import classnames from 'classnames'
import SliderCards from 'components/SliderCards/SliderCards'

const PromoList = ({ className, data }) => {
  return (
    <div className={classnames(css.wrapper, className)}>
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
