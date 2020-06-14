import React, { useEffect } from 'react'
import css from 'containers/SidePromo/SidePromo.module.scss'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { images } from 'index'
import { useDispatch } from 'react-redux'
import { closeVideoModal, openVideoModal } from 'store/actions'
import { Link } from 'react-router-dom'
import SliderCards from 'components/SliderCards/SliderCards'
import AdvCard from 'components/AdvCard/AdvCard'

const SidePromo = () => {
  const promoData = {
    materials: [
      {
        type: 'video',
        preview: 'doctor__promo-video-preview@desktop.jpg',
        file: 'demo_video_1920_2.mp4',
        description: 'Какую зубную щетку использовать электронную или обычную?',
        date: '10 января 2020'
      },
      {
        type: 'article',
        preview: 'doctor__promo-article-preview@desktop.jpg',
        url: '/',
        description: 'Зачем использовать ирригатор?',
        date: '10 января 2020'
      },
    ],
    ads: [
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
  }

  const dispatch = useDispatch()
  const { ads, materials } = promoData

  useEffect(() => {
    dispatch(closeVideoModal())
  }, [dispatch])

  const materialsItems = materials.map((item, index) => {
    return (
      <div className={css.card} onClick={() => dispatch(openVideoModal(item.file))} key={`Materials item #${index}`}>
        {item.type === 'video' &&
          <>
            <ButtonPlay
              className={css.preview}
              background={`url("${images('./' + item.preview)}")`}
              iconType='square'
              handleClick={() => {}}
            />
            <p className={css.description} dangerouslySetInnerHTML={{ __html: item.description }} />
            <p className={css.date} dangerouslySetInnerHTML={{ __html: item.date }} />
          </>
        }
        {item.type === 'article' &&
          <>
            <Link className={css.link} to={item.url}>
              <img src={images('./' + item.preview)} className={css.preview} alt={`Фото к статье ${item.description}`} />
              <p className={css.description} dangerouslySetInnerHTML={{ __html: item.description }} />
              <p className={css.date} dangerouslySetInnerHTML={{ __html: item.date }} />
            </Link>
          </>
        }
      </div>
    )
  })

  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>
        Статьи по теме
      </h4>
      <div className={css.materials}>
        { materialsItems }
      </div>
      <div className={css.promo}>
        <h4 className={css.title}>
         Акции
        </h4>
        <SliderCards>
          {ads.map((item, index) => (
            <div className={css.slide} key={index}>
              <AdvCard
                {...item}
                styles='thin'
              />
            </div>
          ))}
        </SliderCards>
      </div>
    </div>
  )
}

export default SidePromo
