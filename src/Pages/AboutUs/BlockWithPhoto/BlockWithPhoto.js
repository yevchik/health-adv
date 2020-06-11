import React from 'react'
import css from './BlockWithPhoto.module.scss'
import Heading from 'components/Heading/Heading'
import { images } from 'index'
import classnames from 'classnames'

const BlockWithPhoto = ({
  className,
  data
}) => {
  const { title, data: blockData} = data
  const { description, quote, doctor } = blockData

  return (
    <section className={classnames(css.wrapper, className)}>
      <Heading className={css.title} content={title} type='standard' />
      <div className={css.description} dangerouslySetInnerHTML={{ __html: description }} />
      {quote && <blockquote className={css.quote} dangerouslySetInnerHTML={{__html: quote}} />}
      <figure className={css.card}>
        <img src={images('./' + doctor.photo)} alt="" className={css.photo} />
        <figcaption className={css.label}>
          <p className={css.name}>
            { doctor.name }
          </p>
          <p className={css.rank}>
            { doctor.rank }
          </p>
        </figcaption>
      </figure>
    </section>
  )
}

export default BlockWithPhoto

