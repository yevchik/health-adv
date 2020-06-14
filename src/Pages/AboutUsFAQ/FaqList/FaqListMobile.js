import React from 'react'
import css from './FaqListMobile.module.scss'
import ButtonShowMoreMobile from 'components/ButtonShowMore/ButtonShowMoreMobile'
import AccordeonMobile from 'components/Accordeon/AccordeonMobile'
import classnames from 'classnames'

const FaqListMobile = ({
  className,
  list = []
}) => {
  const observer = []

  const items = list.map(({ key, value }, index) => (
    <li className={css.item} key={index}>
      <AccordeonMobile
        question={key}
        answer={value}
        observer={observer}
      />
    </li>
  ))

  if (!list || list.length === 0) {
    return null
  }

  return (
    <>
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
      <ButtonShowMoreMobile className={css.buttonMore} />
    </>
  )
}

export default FaqListMobile
