import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import VideoBannerType1 from 'Pages/HomePage/VideoBanner/VideoBannerType1/VideoBannerType1'

const VideoBanner = ({
  top,
  bottom,
}) => {
  const videoBannerType = useSelector(state => state.videoBanner.videoBannerType)

  return (
    <section>
      {videoBannerType === 1 && <VideoBannerType1 top={top} bottom={bottom} />}
    </section>
  )
}

VideoBanner.propTypes = {
  top: PropTypes.shape({
    slogan: PropTypes.string,
    previewLabel: PropTypes.string,
    modalVideo: PropTypes.string,
    modalVideoPreview: PropTypes.string,
  }),
  bottom: PropTypes.shape({
    sloganAdaptive: PropTypes.string,
    sloganDesktop: PropTypes.string,
    backgroundMobile: PropTypes.string,
    backgroundTablet: PropTypes.string,
    descriptor: PropTypes.string,
    videoBg: PropTypes.string,
  })
}

export default React.memo(VideoBanner)
