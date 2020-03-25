import React from 'react'
import css from './PromoList.module.scss'
import AdvCard from 'components/AdvCard/AdvCard'
import classnames from 'classnames'
import Slider from 'components/Slider/Slider'

const PromoList = ({ className, data }) => {
  return (
    <div className={classnames(css.wrapper, className)}>
      <Slider>
        {data.map((item, index) => (
          <div key={index}>
            <AdvCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PromoList
