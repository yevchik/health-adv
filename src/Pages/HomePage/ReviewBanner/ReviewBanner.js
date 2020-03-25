import React from 'react'
import css from './ReviewBanner.module.scss'
import Container from 'components/Grid/Container'
import { useSelector } from 'react-redux'
import { images } from 'App'
import IconQuotes from 'assets/icons/IconQuotes'

const ReviewBanner = ({ className, bgImages, quote, author }) => {
  // TODO Refactor all redux access / request operations to React hooks
  const type = useSelector(state => state.elastic.deviceType)
  let backgroundImage

  switch (type) {
    case 'mobile':
      backgroundImage = `url("${ images('./' + bgImages.mobile) }")`
      break
    case 'tablet':
      backgroundImage = `url("${ images('./' + bgImages.tablet) }")`
      break
    default:
      backgroundImage = `url("${ images('./' + bgImages.desktop) }")`
      break
  }

  return (
    <section className={css.section} style={{ backgroundImage: backgroundImage }}>
      <Container className={css.container}>
        <IconQuotes className={css.icon} />
        <blockquote className={css.quote} dangerouslySetInnerHTML={{ __html: quote }} />
        <cite className={css.author} dangerouslySetInnerHTML={{ __html: author }} />
      </Container>
    </section>
  )
}

export default ReviewBanner
