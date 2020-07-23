import React from 'react'
import css from './SpecialsList.module.scss'
import AdvCard from 'components/AdvCard/AdvCard'
import classnames from 'classnames'
import ButtonShowMore from 'components/ButtonShowMore/ButtonShowMore'

const SpecialsList = ({
  className,
  list
}) => {
  const items = list.map((item, index) => (
    <li className={css.item} key={`Specials card#${index}`}>
      <AdvCard {...item} />
    </li>
  ))

  return (
    <section>
      <h2 className='visuallyHidden'>Акции и предложения</h2>
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
      <ButtonShowMore className={css.buttonMore} />
    </section>
  )
}

export default SpecialsList
