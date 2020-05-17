import React from 'react'
import css from './InterviewPatients.module.scss'
import Heading from 'components/Heading/Heading'
import Container from 'components/Grid/Container'
import classnames from 'classnames'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { images } from 'index'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'
import ButtonShowMore from 'components/ButtonShowMore/ButtonShowMore'
import { openVideoModal } from 'store/actions'
import { useDispatch } from 'react-redux'

const InterviewPatients = ({
  className,
  list
}) => {
  const dispatch = useDispatch()

  const interviews = list.map((item, index) => {
    return (
      <li
        className={classnames(css.item, {
          [css.itemLarge]: index === 0
        })}
        key={`Video interview with patient #${index}`}
        onClick={() => dispatch(openVideoModal(item.video))}
      >
        <ButtonPlay
          className={css.trigger}
          handleClick={() => {}}
          background={`url("${ images('./' + item.previewImage) }")`}
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
      <Container className={css.container}>
        <Heading className={css.title} content='Интервью с пациентами' type='standard' />
        <ul className={classnames(css.list, className)}>
          {interviews}
        </ul>
        <ButtonShowMore className={css.btnShowMore} />
      </Container>
    </section>
  )
}

export default InterviewPatients
