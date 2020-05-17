import React from 'react'
import css from './News.module.scss'
import Heading from 'components/Heading/Heading'
import { Link } from 'react-router-dom'
import { images } from 'index'
import Container from 'components/Grid/Container'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'

const News = ({ list, image }) => {
  const news = list.map((item, index) => (
    <li className={css.item} key={`News item #${index}`}>
      <Link className={css.link} to={item.url}>
        <Descriptor className={css.descriptor} label={item.label} />
        <Date className={css.date} label={item.date} />
      </Link>
    </li>
  ))

  return (
    <section>
      <Container className={css.container}>
        <Heading content='Новости' className='visuallyHidden'  />
        <ul className={css.list}>
          { news }
        </ul>
        <img className={css.image} src={images('./' + image)} alt='Иллюстрация к новостному разделу' />
      </Container>
    </section>
  )
}

export default News
