import React from 'react'
import css from './TableRowMobile.module.scss'
import classnames from 'classnames'

const TableRowMobile = ({
  className,
  cellKey,
  cellValue,
  index
}) => {
  return (
    <tr className={classnames(css.row, className, { [css.rowDark]: index % 2 === 0 })}>
      <td className={css.key}>
        { cellKey }
      </td>
      <td className={css.value} dangerouslySetInnerHTML={{ __html: cellValue }} />
    </tr>
  )
}

export default TableRowMobile
