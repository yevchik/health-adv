import React from 'react'
import css from './VacanciesListMobile.module.scss'
import classnames from 'classnames'
import AccordeonMobile from 'components/Accordeon/AccordeonMobile'
import ButtonShowMoreMobile from 'components/ButtonShowMore/ButtonShowMoreMobile'
import SimpleListMobile from 'components/SimpleList/SimpleListMobile'

const VacanciesListMobile = ({
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
        <SimpleListMobile
          className={css.sublist}
          list={section.sublist}
        />
      </React.Fragment>
    ))

    return (
      <li className={css.item} key={`Vacancy item#${index}`}>
        <AccordeonMobile
          answerClassName={css.vacancyWrapper}
          backgroundMobile={vacancy.backgroundMobile}
          backgroundTablet={vacancy.backgroundTablet}
          questionTag='h3'
          question={vacancy.title}
          observer={observer}
        >
          { content }
        </AccordeonMobile>
      </li>
    )
  })

  return (
    <>
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
      <ButtonShowMoreMobile className={css.buttonMore} />
    </>
  )
}

export default VacanciesListMobile
