import React from 'react'
import css from './BlockGallery.module.scss'
import Heading from 'components/Heading/Heading'
import SliderCards from 'components/SliderCards/SliderCards'
import { images } from 'index'
import classnames from 'classnames'

const BlockGallery = ({
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
      <Heading content={title} type='standard' />
      <SliderCards className={css.slider}>
        { items }
      </SliderCards>
    </section>
  )
}

export default BlockGallery
