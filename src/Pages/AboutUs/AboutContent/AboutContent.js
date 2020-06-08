import React from 'react'
import css from './AboutContent.module.scss'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import BlockWithPhoto from 'Pages/AboutUs/BlockWithPhoto/BlockWithPhoto'
import BlockGallery from 'Pages/AboutUs/BlockGallery/BlockGallery'
import BlockPrinciples from 'Pages/AboutUs/BlockPrinciples/BlockPrinciples'
import BlockStats from 'Pages/AboutUs/BlockStats/BlockStats'

const AboutContent = ({
  breadcrumbs,
  className,
  data,
}) => {
  const content = data.map((category, index) => {
    switch (category.type) {
      case 'mission':
        return (
          <BlockWithPhoto
            data={category}
            key={`About content section #${index}`}
          />
        )
      case 'gallery':
        return (
          <BlockGallery
            className={css.gallery}
            data={category}
            key={`About content section #${index}`}
          />
        )
      case 'principles':
        return (
          <BlockPrinciples
            className={css.principles}
            data={category}
            key={`About content section #${index}`}
          />
        )
      case 'stats':
        return (
          <BlockStats
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
      <Breadcrumbs className={css.breadcrumbs} dataArray={breadcrumbs} />
      <div className={css.content}>
        { content }
      </div>
    </div>
  )
}

export default AboutContent
