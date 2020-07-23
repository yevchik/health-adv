import React from 'react'
import css from './ArticlesMobile.module.scss'
import Heading from 'components/Heading/Heading'
import ContainerMobile from 'components/Grid/ContainerMobile'
import InfoCardMobile from 'components/InfoCard/InfoCardMobile'

const ArticlesMobile = ({
  list
}) => {
  const cards = list.map((item, index) => (
    <InfoCardMobile {...item} className={css.item} key={`Article card #${index}`} />
  ))

  return (
    <section className={css.wrapper}>
      <ContainerMobile>
        <Heading content='Статьи' type='standard' className={css.title} />
      </ContainerMobile>
      <div className={css.listWrapper}>
        <ul className={css.list}>
          {cards}
        </ul>
      </div>
    </section>
  )
}

export default ArticlesMobile
