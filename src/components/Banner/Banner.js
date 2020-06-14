import React from 'react'
import css from './Banner.module.scss'
import { images } from 'index'
import Container from 'components/Grid/Container'
import classnames from 'classnames'

const Banner = ({
  bgImage,
  title,
  special,
  descriptor,
  comment
}) => {
  return (
    <div className={css.wrapper} style={{ backgroundImage: `url("${ images('./' + bgImage) }")` }}>
      <Container className={classnames(css.container, { [css.containerSpecial]: special })}>
        <h1 className={css.title} dangerouslySetInnerHTML={{ __html: title }}  />
        { descriptor && !special && <p className={css.descriptor} dangerouslySetInnerHTML={{__html: descriptor}} /> }
        { descriptor && special &&
          <div className={css.textWrapper}>
            <p className={css.special} dangerouslySetInnerHTML={{ __html: special }} />
            <p className={css.descriptor} dangerouslySetInnerHTML={{__html: descriptor}} />
          </div>
        }
        { comment }
      </Container>
    </div>
  )
}

export default Banner
