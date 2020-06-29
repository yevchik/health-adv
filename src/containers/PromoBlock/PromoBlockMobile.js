import React from 'react'
import css from './PromoBlockMobile.module.scss'
import PromoListMobile from 'components/PromoList/PromoListMobile'
import Heading from 'components/Heading/Heading'

const PromoBlockMobile = ({ className, title = 'Акции', isCompact }) => {
  const promoData = [
    {
      type: 'teeth',
      url: '/',
      color: '#f4785d',
      duration: 'Акция до 24 января',
      title: 'Керамические виниры',
      price: 'от <span>20 000</span> рублей'
    },
    {
      type: 'implant-single',
      url: '/',
      color: '#c58ddf',
      duration: 'Акция до 24 января',
      title: 'Имплант с&nbsp;установкой',
      price: 'от <span>95 000</span> рублей'
    },
    {
      type: 'implants-jaw',
      url: '/',
      color: '#c58ddf',
      duration: 'Акция до 24 января',
      title: 'Все зубы сразу «под ключ»',
      price: 'от <span>120 000</span> рублей'
    },
    {
      type: 'implant-single',
      url: '/',
      color: '#7486e6',
      duration: 'Акция до 24 января',
      title: 'Имплант с&nbsp;установкой',
      price: 'от <span>95 000</span> рублей'
    },
  ]


  return (
    <div className={className}>
      <Heading content={title} type='standard' />
      <PromoListMobile data={promoData} className={css.promo} isCompact={isCompact} />
    </div>
  )
}

export default PromoBlockMobile
