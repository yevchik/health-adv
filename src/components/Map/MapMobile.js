import React from 'react'
import css from './MapMobile.module.scss'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import { useSelector } from 'react-redux'
import mapPin from 'assets/images/map-pin.svg'
import classnames from 'classnames'

const MapComponentMobile = ({
  className,
  marks = [],
  center,
  zoom,
}) => {
  const fontSize = useSelector(state => state.elastic.curFontSize)

  const mapData = {
    center: center,
    zoom: zoom
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

  const pinsList = marks.map((marker, index) => (
    <Placemark
      geometry={marker}
      options={{
        iconLayout: 'default#image',
        iconImageHref: mapPin,
        iconImageSize: [pinData.width, pinData.height],
        iconImageOffset: [pinData.offsetLeft, pinData.offsetTop]
      }}
      key={index}
    />
  ))

  return (
    <div className={classnames(css.wrapper, className)}>
      <YMaps>
        <Map
          defaultState={mapData}
          className={css.map}
        >
          { pinsList }
        </Map>
      </YMaps>
    </div>
  )
}

export default MapComponentMobile
