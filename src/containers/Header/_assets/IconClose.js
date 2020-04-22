import React from 'react'

const IconClose = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L19 19" />
    <path d="M19 1L0.999998 19" />
  </svg>
)

export default React.memo(IconClose)
