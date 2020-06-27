import React from 'react'
import css from './ReviewCard.module.scss'
import { useDispatch } from 'react-redux'
import { decodeHTMLCharacters } from 'utils'
import { MAX_COMMENT_PREVIEW_LENGTH } from 'utils/const'
import { openContentModal } from 'store/actions/ui'
import classnames from 'classnames'

const ReviewCard = (props) => {
  const dispatch = useDispatch()
  const {
    name,
    date,
    text,
    doctor,
    services,
    isModal = false
  } = props

  let pureText = ''
  let isButtonRequired = false

  if (!isModal) {
    pureText = decodeHTMLCharacters(text)
    isButtonRequired = pureText.length > MAX_COMMENT_PREVIEW_LENGTH
    pureText = pureText.length > MAX_COMMENT_PREVIEW_LENGTH
      ? pureText.slice(0, MAX_COMMENT_PREVIEW_LENGTH) + '&hellip;'
      : text
  }

  const handleOpenModal = () => {
    dispatch(openContentModal(<ReviewCard {...props} isModal={true} />))
  }

  return (
    <article className={classnames(css.card, { [css.cardModal]: isModal })}>
      <p className={css.name}>
        { `${name}, ${date}` }
      </p>
      <p className={css.text} dangerouslySetInnerHTML={{ __html: isModal ? text : pureText }} />
      {isButtonRequired &&
        <button
          className={css.buttonMore}
          type='button'
          onClick={handleOpenModal}
        >
          Отзыв полностью
        </button>
      }
      <div className={css.legend}>
        <p className={css.info}>
          { doctor }
        </p>
        <p className={css.info}>
          { services }
        </p>
      </div>
    </article>
  )
}

export default ReviewCard
