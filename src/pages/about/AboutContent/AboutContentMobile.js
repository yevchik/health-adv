import React from 'react'
import css from './AboutContentMobile.module.scss'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import BlockWithPhotoMobile from 'pages/about/BlockWithPhoto/BlockWithPhotoMobile'
import LocationSelector from 'components/LocationSelector/LocationSelector'
import BlockGalleryMobile from 'pages/about/BlockGallery/BlockGalleryMobile'
import BlockPrinciplesMobile from 'pages/about/BlockPrinciples/BlockPrinciplesMobile'
import BlockStatsMobile from 'pages/about/BlockStats/BlockStatsMobile'

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
