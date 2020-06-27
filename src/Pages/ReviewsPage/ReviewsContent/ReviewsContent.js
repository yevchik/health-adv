import React from 'react'
import css from './ReviewsContent.module.scss'
import { openVideoModal } from 'store/actions'
import { useDispatch } from 'react-redux'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { images } from 'index'
import IconDotsBgDark from 'assets/icons/IconDotsBgDark'
import ReviewCard from 'components/ReviewCard/ReviewCard'

const ReviewsContent = ({ list }) => {
  const dispatch = useDispatch()

  const items = list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return (
          <div className={css.card} onClick={() => dispatch(openVideoModal(item.video))} key={`Review item #${index}`}>
            <ButtonPlay
              className={css.preview}
              background={`url("${images('./' + item.preview)}")`}
              handleClick={() => {}}
            />
            <p className={css.name}>
              { `${item.client}, ${item.date}` }
            </p>
            <dl className={css.doctor}>
              <dt className={css.doctorInfo}>
                { `Специалист: ${item.specialist}` }
              </dt>
              <dd className={css.doctorInfo}>
                { `Услуги: ${item.services}` }
              </dd>
            </dl>
          </div>
        )
      case 'banner':
        return (
          <div className={css.bannerWrapper} key={`Review item #${index}`}>
            <div className={css.banner} key={`Review item #${index}`}>
              <IconDotsBgDark className={css.dotsTop} />
              <IconDotsBgDark className={css.dotsBottom} />
              <img className={css.photo} src={images('./' + item.photo)} alt={item.name} />
              <blockquote className={css.quote} dangerouslySetInnerHTML={{ __html: item.quote }} />
              <p className={css.quoteName}>
                { `${item.name}, ${item.date}` }
              </p>
            </div>
          </div>
        )
      case 'cards':
        const items = item.list.map((item, index) => (
          <li className={css.item} key={index}>
            <ReviewCard {...item} />
          </li>
        ))

        return (
          <ul className={css.list} key={`Review item #${index}`}>
            { items }
          </ul>
        )
      default: return null
    }
  })

  return (
    <div className={css.wrapper}>
      { items }
    </div>
  )
}

export default ReviewsContent
