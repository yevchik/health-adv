import React, { Component } from 'react'
import ServicesAdaptive from 'Pages/HomePage/Services/ServicesAdaptive/ServicesAdaptive'
import ServicesDesktop from 'Pages/HomePage/Services/ServicesDesktop/ServicesDesktop'
import css from './Services.module.scss'

const Services = props => {
  return (
    <>
      <ServicesDesktop {...props} className={css.desktop} />
      <ServicesAdaptive {...props} className={css.adaptive} />
    </>
  )
}

export default Services
