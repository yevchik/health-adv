import React from 'react'

const IconBurger = ({ className }) => (
  <svg className={className} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M0 0H22V1.5H0V0ZM0 6H22V7.5H0V6ZM22 12H0V13.5H22V12Z" />
  </svg>
)

export default React.memo(IconBurger)
