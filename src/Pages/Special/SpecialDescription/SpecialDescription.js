import React from 'react'
import css from './SpecialDescription.module.scss'
import Heading from 'components/Heading/Heading'
import { encode, decode } from 'he'
import { images } from 'index'

const SpecialDescription = ({
  title,
  duration,
  description,
  image
}) => {
  return (
    <section className={css.section}>
      <Heading content={title} type='standard' />
      <p className={css.duration} dangerouslySetInnerHTML={{ __html: encode(decode(duration)) }} />
      <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: encode(decode(description)) }} />
      <img src={images('./' + image)} alt={title} className={css.image} />
    </section>
  )
}

export default SpecialDescription
