import React from 'react'
import css from './BlockWithPhotoMobile.module.scss'
import Heading from 'components/Heading/Heading'
import { images } from 'index'
import classnames from 'classnames'

const BlockWithPhotoMobile = ({
  className,
  data
}) => {
  const { title, data: blockData} = data
  const { description, quote, doctor } = blockData

  return (
    <section className={classnames(css.wrapper, className, { [css.wrapperNoQuote]: !quote })}>
      <Heading className={css.title} content={title} type='standard' />
      <div className={css.description} dangerouslySetInnerHTML={{ __html: description }} />
      {quote && <blockquote className={css.quote} dangerouslySetInnerHTML={{__html: quote}} />}
      <figure className={css.card}>
        <div className={css.frame}>
          <img src={images('./' + doctor.photo)} alt="" className={css.photo} />
        </div>
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

export default BlockWithPhotoMobile

