import React from 'react'
import css from './TopicPricelistMobile.module.scss'
import Heading from 'components/Heading/Heading'
import TableRowMobile from 'components/TableRow/TableRowMobile'

const TopicPricelistMobile = ({
  title,
  topicData,
}) => {
  return (
    <>
      <Heading tag='h3' type='standard' content={title} />
      <table className={css.table}>
        <tbody>
        {topicData.map((row, index) => (
          <TableRowMobile
            className={css.row}
            cellKey={row.key}
            cellValue={row.value}
            index={index}
            key={`Pricelist table row#${index}`}
          />
        ))}
        </tbody>
      </table>
    </>
  )
}

export default TopicPricelistMobile
