import React, { Component } from 'react'
import css from './ServicesAdaptive.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import PromoList from 'components/PromoList/PromoList'
import AccordeonList from 'components/AccordeonList/AccordeonList'

class ServicesAdaptive extends Component {
  render () {
    const { title, list, ads } = this.props

    return (
      <section>
        <Container className={css.container}>
          <Heading content={title} />
          <PromoList className={css.ads} data={ads} />
          <AccordeonList list={list} />
        </Container>
      </section>
    )
  }
}

export default ServicesAdaptive
