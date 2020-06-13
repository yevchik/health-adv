import React from 'react'
import css from './TopicFAQMobile.module.scss'
import AccordeonMobile from 'components/Accordeon/AccordeonMobile'
import Heading from 'components/Heading/Heading'

const TopicFAQMobile = ({
  title,
  topicData
}) => {
  const observer = []

  return (
    <>
      <Heading tag='h3' type='standard' content={title} />
      <ul className={css.accordeons}>
        { topicData.map((item, index) => (
          <li className={css.accordeon} key={`Accordeon item#${index}`}>
            <AccordeonMobile
              observer={observer}
              question={item.key}
              answer={item.value}
            />
          </li>
        )) }
      </ul>
    </>
  )
}

export default TopicFAQMobile
