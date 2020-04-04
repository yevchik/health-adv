import React from 'react'
import css from './About.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import mapPin from 'assets/images/map-pin.svg'
import { useSelector } from 'react-redux'
import Button from 'components/Button/Button'

const About = ({
  title,
  descriptor,
  feature,
  offices,
  map
}) => {
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const type = useSelector(state => state.elastic.deviceType)

  const mapData = {
    center: map.center,
    zoom: map.zoom
  }

  const pinData = {
    width: 23 * fontSize / 10,
    height: 33 * fontSize / 10,
    get offsetLeft () {
      return -this.width / 2
    },
    get offsetTop () {
      return -this.height
    }
  }

  return (
    <section className={css.section}>
      <Container className={css.container}>
        <Heading className={css.title} content={title} />
        <p className={css.descriptor} dangerouslySetInnerHTML={{__html: descriptor}} />
        <div className={css.feature}>
          <h3 className={css.subtitle}>
            {feature.subtitle}
          </h3>
          <p className={css.subdescriptor} dangerouslySetInnerHTML={{__html: feature.descriptor}} />
        </div>
        <div className={css.offices}>
          <h3 className={css.subtitle}>
            {offices.subtitle}
          </h3>
          <ul className={css.list}>
            {offices.list.map((address, index) => (
              <li className={css.item} dangerouslySetInnerHTML={{__html: address}} key={index} />
            ))}
          </ul>
          <Button className={css.linkAll}  url='/contacts' btnStyle='decorated' label='Контакты' />
        </div>
      </Container>
      <Container className={css.mapContainer}>
        {/*<YMaps>*/}
        {/*  <Map*/}
        {/*    defaultState={mapData}*/}
        {/*    className={css.map}*/}
        {/*    instanceRef={ ref => { ref && type !== 'desktop' && ref.behaviors.disable('drag') }}*/}
        {/*  >*/}
        {/*    {map.markers.map((marker, index) => (*/}
        {/*      <Placemark*/}
        {/*        geometry={marker}*/}
        {/*        options={{*/}
        {/*          iconLayout: 'default#image',*/}
        {/*          iconImageHref: mapPin,*/}
        {/*          iconImageSize: [pinData.width, pinData.height],*/}
        {/*          iconImageOffset: [pinData.offsetLeft, pinData.offsetTop]*/}
        {/*        }}*/}
        {/*        key={index}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </Map>*/}
        {/*</YMaps>*/}
      </Container>
    </section>
  )
}

export default About
