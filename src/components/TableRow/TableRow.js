import React from 'react'
import css from './TableRow.module.scss'
import classnames from 'classnames'

const TableRow = ({
  cellKey,
  cellValue,
  index,
}) => {
  return (
    <tr className={classnames(css.row, { [css.rowDark]: index % 2 === 0 })}>
      <td className={css.key}>
        { cellKey }
      </td>
      <td className={css.value} dangerouslySetInnerHTML={{ __html: cellValue }} />
    </tr>
  )
}

export default TableRow
