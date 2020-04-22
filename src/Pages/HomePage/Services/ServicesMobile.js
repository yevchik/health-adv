import React from 'react'
import css from './ServicesMobile.module.scss'
import Heading from 'components/Heading/Heading'
import AccordeonListMobile from 'components/AccordeonList/AccordeonListMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import PromoListMobile from 'components/PromoList/PromoListMobile'

const ServicesMobile = ({
  className,
  title,
  list,
  ads
}) => {
  return (
    <section className={className}>
      <ContainerMobile className={css.container}>
        <Heading content={title} />
        <PromoListMobile className={css.ads} data={ads} />
        <AccordeonListMobile list={list} />
      </ContainerMobile>
    </section>
  )
}

export default React.memo(ServicesMobile)
