import React from 'react'
import css from './NewsMobile.module.scss'
import Heading from 'components/Heading/Heading'
import { Link } from 'react-router-dom'
import { images } from 'index'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'
import ContainerMobile from 'components/Grid/ContainerMobile'
import { useSelector } from 'react-redux'
import { mediaCenterNewsQuantity } from 'utils/const'

const NewsMobile = ({ list, imageMobile, imageTablet }) => {
  const deviceType = useSelector(state => state.elastic.deviceType)
  const image = deviceType === 'mobile' ? imageMobile : imageTablet
  console.log(imageMobile)

  const news = list.map((item, index) => {
    if (index < mediaCenterNewsQuantity.adaptive) {
      return (
        <li className={css.item} key={`News item #${index}`}>
          <Link className={css.link} to={item.url}>
            <Descriptor className={css.descriptor} label={item.label} />
            <Date className={css.date} label={item.date} />
          </Link>
        </li>
      )
    }
    return null
  })

  return (
    <section className={css.section}>
      <ContainerMobile className={css.container}>
        <Heading content='Новости' className='visuallyHidden'  />
        <ul className={css.list}>
          { news }
        </ul>
        {image &&
          <img className={css.image} src={images('./' + image)} alt='Иллюстрация к новостному разделу' />
        }
      </ContainerMobile>
    </section>
  )
}

export default NewsMobile
