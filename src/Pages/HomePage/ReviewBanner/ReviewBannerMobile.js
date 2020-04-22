import React from 'react'
import css from './ReviewBannerMobile.module.scss'
import { useSelector } from 'react-redux'
import { images } from 'index'
import IconQuotes from 'assets/icons/IconQuotes'
import ContainerMobile from 'components/Grid/ContainerMobile'
import PropTypes from 'prop-types'

const ReviewBannerMobile = ({ bgImages, quote, author }) => {
  const type = useSelector(state => state.elastic.deviceType)
  let backgroundImage

  switch (type) {
    case 'mobile':
      backgroundImage = `url("${ images('./' + bgImages.mobile) }")`
      break
    default:
      backgroundImage = `url("${ images('./' + bgImages.tablet) }")`
      break
  }

  return (
    <section className={css.section}>
      <div className={css.bg} style={{ backgroundImage: backgroundImage }} />
      <ContainerMobile className={css.container}>
        <IconQuotes className={css.icon} />
        <blockquote className={css.quote} dangerouslySetInnerHTML={{ __html: quote }} />
        <cite className={css.author} dangerouslySetInnerHTML={{ __html: author }} />
      </ContainerMobile>
    </section>
  )
}


ReviewBannerMobile.propTypes = {
  bgImages: PropTypes.shape({
    mobile: PropTypes.string,
    tablet: PropTypes.string,
  }),
  quote: PropTypes.string,
  author: PropTypes.string
}

export default React.memo(ReviewBannerMobile)
