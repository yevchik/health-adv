import React from 'react'
import css from './AboutContentMobile.module.scss'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import BlockWithPhotoMobile from 'Pages/AboutUs/BlockWithPhoto/BlockWithPhotoMobile'
import LocationSelector from 'components/LocationSelector/LocationSelector'
import BlockGalleryMobile from 'Pages/AboutUs/BlockGallery/BlockGalleryMobile'
import BlockPrinciplesMobile from 'Pages/AboutUs/BlockPrinciples/BlockPrinciplesMobile'
import BlockStatsMobile from 'Pages/AboutUs/BlockStats/BlockStatsMobile'

const AboutContentMobile = ({
  breadcrumbs,
  className,
  data,
}) => {
  const content = data.map((category, index) => {
    switch (category.type) {
      case 'mission':
        return (
          <BlockWithPhotoMobile
            data={category}
            key={`About content section #${index}`}
          />
        )
      case 'gallery':
        return (
          <BlockGalleryMobile
            className={css.gallery}
            data={category}
            key={`About content section #${index}`}
          />
        )
      case 'principles':
        return (
          <BlockPrinciplesMobile
            className={css.principles}
            data={category}
            key={`About content section #${index}`}
          />
        )
      case 'stats':
        return (
          <BlockStatsMobile
            className={css.stats}
            data={category}
            key={`About content section #${index}`}
          />
        )
      default:
        return null
    }
  })

  return (
    <div className={className}>
      <BreadcrumbsMobile dataArray={breadcrumbs} />
      <LocationSelector className={css.select} />
      <div className={css.content}>
        { content }
      </div>
    </div>
  )
}

export default AboutContentMobile
