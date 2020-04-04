import React from 'react'

const IconArrow = ({ className }) => (
  <svg className={className} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.645977 4.64643C0.450705 4.84168 0.450688 5.15826 0.645939 5.35353C0.841191 5.54881 1.15777 5.54882 1.35305 5.35357L0.645977 4.64643ZM4.99994 1L5.35349 0.646447C5.15824 0.451192 4.84167 0.451184 4.6464 0.646428L4.99994 1ZM8.64638 5.35355C8.84165 5.54882 9.15823 5.54882 9.35349 5.35355C9.54875 5.15829 9.54875 4.84171 9.35349 4.64645L8.64638 5.35355ZM1.35305 5.35357L5.35347 1.35357L4.6464 0.646428L0.645977 4.64643L1.35305 5.35357ZM4.64638 1.35355L8.64638 5.35355L9.35349 4.64645L5.35349 0.646447L4.64638 1.35355Z" />
  </svg>
)

export default React.memo(IconArrow)
