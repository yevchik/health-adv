import React from 'react'
import css from './InterviewPatientsMobile.module.scss'
import Heading from 'components/Heading/Heading'
import classnames from 'classnames'
import { images } from 'index'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'
import { openVideoModal } from 'store/actions'
import { useDispatch } from 'react-redux'
import ButtonPlayMobile from 'components/ButtonPlay/ButtonPlayMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import ButtonShowMoreMobile from 'components/ButtonShowMore/ButtonShowMoreMobile'

const InterviewPatientsMobile = ({
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
        <ButtonPlayMobile
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
      <ContainerMobile className={css.container}>
        <Heading className={css.title} content='Интервью с пациентами' type='standard' />
        <div className={css.listWrapper}>
          <ul className={classnames(css.list, className)}>
            {interviews}
          </ul>
        </div>
        <ButtonShowMoreMobile className={css.btnShowMore} />
      </ContainerMobile>
    </section>
  )
}

export default InterviewPatientsMobile
