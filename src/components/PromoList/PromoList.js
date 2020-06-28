import React from 'react'
import AdvCard from 'components/AdvCard/AdvCard'
import SliderCards from 'components/SliderCards/SliderCards'
import css from './PromoList.module.scss'
import classnames from 'classnames'

const PromoList = ({ className, data, isCompact = false }) => {
  return (
    <div className={classnames(css.promo, className)}>
      <SliderCards sliderEffect={'scroll'} slides={3} controlsType={'styledNoFractions'}>
        {data.map((item, index) => (
          <div key={'card' + index}>
            <AdvCard {...item} isCompact={isCompact} />
          </div>
        ))}
      </SliderCards>
    </div>
  )
}

export default React.memo(PromoList)
