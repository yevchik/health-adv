import React from 'react'
import css from './TableRowMobile.module.scss'
import classnames from 'classnames'

const TableRowMobile = ({
  className,
  keyClassName,
  valueClassName,
  cellKey,
  cellValue,
  index
}) => {
  return (
    <tr className={classnames(css.row, className, { [css.rowDark]: index % 2 === 0 })}>
      <td className={classnames(css.key, keyClassName)}>
        { cellKey }
      </td>
      <td className={classnames(css.value, valueClassName)} dangerouslySetInnerHTML={{ __html: cellValue }} />
    </tr>
  )
}

export default TableRowMobile
