import React from 'react'
import css from './VacanciesList.module.scss'
import classnames from 'classnames'
import Accordeon from 'components/Accordeon/Accordeon'
import SimpleList from 'components/SimpleList/SimpleList'
import ButtonShowMore from 'components/ButtonShowMore/ButtonShowMore'

const VacanciesList = ({
  className,
  list
}) => {
  const observer = []

  const items = list.map((vacancy, index) => {
    const content = vacancy.content.map((section, subindex) => (
      <React.Fragment key={`Vacancy section ${index} - ${subindex}`}>
        <h4 className={css.title}>
          { section.subtitle }
        </h4>
        <SimpleList
          className={css.sublist}
          list={section.sublist}
        />
      </React.Fragment>
    ))

    return (
      <li className={css.item} key={`Vacancy item#${index}`}>
        <Accordeon
          answerClassName={css.vacancyWrapper}
          background={vacancy.background}
          questionTag='h3'
          question={vacancy.title}
          observer={observer}
        >
          { content }
        </Accordeon>
      </li>
    )
  })

  return (
    <>
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
      <ButtonShowMore className={css.buttonMore} />
    </>
  )
}

export default VacanciesList
