import React from 'react'
import css from './InterviewSpecialists.module.scss'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import classnames from 'classnames'
import { images } from 'index'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'
import { useDispatch } from 'react-redux'
import { openVideoModal } from 'store/actions'

const InterviewSpecialists = ({
  list
}) => {
  const dispatch = useDispatch()

  const interviews = list.map((item, index) => {
    return (
      <li
        className={classnames(css.item, {
          [css.itemLarge]: index === 0
        })}
        key={`Video interview with specialist #${index}`}
        onClick={() => dispatch(openVideoModal(item.video))}
      >
        <ButtonPlay
          className={css.trigger}
          handleClick={() => {}}
          background={`url("${ images('./' + item.previewImage) }")`}
          iconType={index === 0 ? 'circle' : 'square'}
        />
        <div className={css.text}>
          <Descriptor className={css.descriptor} label={item.label} />
          <Date className={css.date} label={item.date} />
        </div>
      </li>
    )
  })

  return (
    <section>
      <Container>
        <Heading content='Интервью со специалистами клиники' type='standard' className={css.title} />
        <ul className={css.list}>
          {interviews}
        </ul>
      </Container>
    </section>
  )
}

export default InterviewSpecialists
