import React from 'react'
import css from './InterviewSpecialistsMobile.module.scss'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { images } from 'index'
import Heading from 'components/Heading/Heading'
import Descriptor from 'components/Descriptor/Descriptor'
import Date from 'components/Date/Date'
import { useDispatch } from 'react-redux'
import { openVideoModal } from 'store/actions'
import ContainerMobile from 'components/Grid/ContainerMobile'

const InterviewSpecialists = ({
  list
}) => {
  const dispatch = useDispatch()

  const interviews = list.map((item, index) => {
    return (
      <li
        className={css.item}
        key={`Video interview with specialist #${index}`}
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
      <ContainerMobile>
        <Heading content='Интервью со специалистами клиники' type='standard' className={css.title} />
      </ContainerMobile>
      <div className={css.listWrapper}>
        <ul className={css.list}>
          {interviews}
        </ul>
      </div>
    </section>
  )
}

export default InterviewSpecialists
