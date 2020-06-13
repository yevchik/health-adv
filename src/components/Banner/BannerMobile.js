import React from 'react'
import css from './BannerMobile.module.scss'
import { images } from 'index'
import ContainerMobile from 'components/Grid/ContainerMobile'
import { useSelector } from 'react-redux'

const BannerMobile = ({
  bgImageMobile,
  bgImageTablet,
  comment,
  descriptor,
  title,
}) => {
  const deviceType = useSelector(state => state.elastic.deviceType)
  const image = deviceType === 'mobile' ? bgImageMobile : bgImageTablet

  return (
    <div className={css.wrapper} style={{ backgroundImage: image ? `url("${ images('./' + image) }")` : 'none' }}>
      <ContainerMobile className={css.container}>
        <h1 className={css.title} dangerouslySetInnerHTML={{ __html: title }}  />
        { comment }
        <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }}  />
      </ContainerMobile>
    </div>
  )
}

export default BannerMobile
