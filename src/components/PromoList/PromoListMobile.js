import React from 'react'
import PropTypes from 'prop-types'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import AdvCardMobile from 'components/AdvCard/AdvCardMobile'

const PromoListMobile = ({ className, data, isCompact }) => {
  return (
    <div className={className}>
      <SliderCardsMobile>
        {data.map((item, index) => (
          <div key={'card' + index}>
            <AdvCardMobile {...item} isCompact={isCompact} />
          </div>
        ))}
      </SliderCardsMobile>
    </div>
  )
}

PromoListMobile.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object)
}

export default React.memo(PromoListMobile)
