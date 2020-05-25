import React from 'react'
import css from './SidePromo.module.scss'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { images } from 'index'
import { useDispatch } from 'react-redux'
import { openVideoModal } from 'store/actions'
import { Link } from 'react-router-dom'
import SliderCards from 'components/SliderCards/SliderCards'
import AdvCard from 'components/AdvCard/AdvCard'

const SidePromo = ({
  className,
  materials,
  ads
}) => {
  const dispatch = useDispatch()

  const materialsItems = materials.map((item, index) => {
    return (
      <div className={css.card} onClick={() => dispatch(openVideoModal(item.file))}>
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
                style='thin'
              />
            </div>
          ))}
        </SliderCards>
      </div>
    </div>
  )
}

export default SidePromo
