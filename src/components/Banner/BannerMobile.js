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
  extraBlock,
  special,
  title,
}) => {
  const deviceType = useSelector(state => state.elastic.deviceType)
  const image = deviceType === 'mobile' ? bgImageMobile : bgImageTablet
  const titleProcessed = deviceType === 'mobile' ? title : title.split('<br/>').join(' ')

  return (
    <div className={css.wrapper} style={{ backgroundImage: image ? `url("${ images('./' + image) }")` : 'none' }}>
      <ContainerMobile className={css.container}>
        <h1 className={css.title} dangerouslySetInnerHTML={{ __html: titleProcessed }}  />
        { comment }
        { descriptor && !special && <p className={css.descriptor} dangerouslySetInnerHTML={{__html: descriptor}} /> }
        { descriptor && special &&
        <div className={css.textWrapper}>
          <p className={css.special} dangerouslySetInnerHTML={{ __html: special }} />
          <p className={css.descriptor} dangerouslySetInnerHTML={{__html: descriptor}} />
        </div>
        }
        { extraBlock }
      </ContainerMobile>
    </div>
  )
}

export default BannerMobile
