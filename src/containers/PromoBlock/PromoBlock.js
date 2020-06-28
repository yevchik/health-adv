import React from 'react'
import css from './PromoBlock.module.scss'
import Heading from 'components/Heading/Heading'
import PromoList from 'components/PromoList/PromoList'

const PromoBlock = ({ className, title = 'Акции', isCompact }) => {
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
      <PromoList
        data={promoData}
        className={css.promo}
        isCompact={isCompact}
      />
    </div>
  )
}

export default PromoBlock
