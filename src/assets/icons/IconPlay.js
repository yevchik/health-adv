import React from 'react'

const IconPlay = ({ className }) => (
  <svg className={className} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className='circle__inner' cx="28.5" cy="28.5" r="22.5" />
    <circle className='circle__outer' cx="28.502" cy="28.5" r="27.998" transform="rotate(-180 28.502 28.5)" />
    <path className='icon__play' d="M35.5 27.134C36.1667 27.5189 36.1667 28.4811 35.5 28.866L26.5 34.0622C25.8333 34.4471 25 33.966 25 33.1962L25 22.8038C25 22.034 25.8333 21.5529 26.5 21.9378L35.5 27.134Z" />
  </svg>
)

export default IconPlay
