import React from 'react'
import css from './ReviewBanner.module.scss'
import Container from 'components/Grid/Container'
import { images } from 'index'
import IconQuotes from 'assets/icons/IconQuotes'
import PropTypes from 'prop-types'

const ReviewBanner = ({
  bgImages,
  quote,
  author
}) => {
  return (
    <section className={css.section}>
      <div className={css.bg} style={{ backgroundImage: `url("${ images('./' + bgImages.desktop) }")` }} />
      <Container className={css.container}>
        <IconQuotes className={css.icon} />
        <blockquote className={css.quote} dangerouslySetInnerHTML={{ __html: quote }} />
        <cite className={css.author} dangerouslySetInnerHTML={{ __html: author }} />
      </Container>
    </section>
  )
}

ReviewBanner.propTypes = {
  bgImages: PropTypes.shape({
    desktop: PropTypes.string
  }),
  quote: PropTypes.string,
  author: PropTypes.string
}

export default React.memo(ReviewBanner)
