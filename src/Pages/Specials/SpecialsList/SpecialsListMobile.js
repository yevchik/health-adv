import React from 'react'
import css from './SpecialsListMobile.module.scss'
import classnames from 'classnames'
import ButtonShowMore from 'components/ButtonShowMore/ButtonShowMore'
import AdvCardMobile from 'components/AdvCard/AdvCardMobile'

const SpecialsListMobile = ({
  className,
  list
}) => {
  const items = list.map((item, index) => (
    <li className={css.item} key={`Specials card#${index}`}>
      <AdvCardMobile {...item} />
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

export default SpecialsListMobile
