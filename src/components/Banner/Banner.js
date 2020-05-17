import React from 'react'
import css from './Banner.module.scss'
import { images } from 'index'
import Container from 'components/Grid/Container'

const Banner = ({
  bgImage,
  title,
  descriptor
}) => {
  return (
    <div className={css.wrapper} style={{ backgroundImage: `url("${ images('./' + bgImage) }")` }}>
      <Container className={css.container}>
        <h1 className={css.title} dangerouslySetInnerHTML={{ __html: title }}  />
        <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }}  />
      </Container>
    </div>
  )
}

export default Banner
