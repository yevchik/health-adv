import React from 'react'
import ServicesAdaptive from 'Pages/HomePage/Services/ServicesAdaptive/ServicesAdaptive'
import ServicesDesktop from 'Pages/HomePage/Services/ServicesDesktop/ServicesDesktop'
import css from './Services.module.scss'
import { useSelector } from 'react-redux'

const Services = props => {
  const type = useSelector(state => state.elastic.deviceType)

  return type === 'desktop'
    ? <ServicesDesktop {...props} className={css.desktop} />
    : <ServicesAdaptive {...props} className={css.adaptive} />
}

export default Services
