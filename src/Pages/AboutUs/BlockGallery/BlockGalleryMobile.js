import React from 'react'
import css from './BlockGalleryMobile.module.scss'
import Heading from 'components/Heading/Heading'
import { images } from 'index'
import classnames from 'classnames'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'

const BlockGalleryMobile = ({
  className,
  data,
}) => {
  const { title, data: blockData } = data

  const items = blockData.list.map((item, index) => (
    <div className={css.slide} key={`About gallery item#${index}`}>
      <img className={css.image} src={images('./' + item.image)} alt={item.label} />
    </div>
  ))

  return (
    <section className={classnames(css.section, className)}>
      <Heading content={title} type='standard' tag='h3' />
      <SliderCardsMobile className={css.slider}>
        { items }
      </SliderCardsMobile>
    </section>
  )
}

export default BlockGalleryMobile
