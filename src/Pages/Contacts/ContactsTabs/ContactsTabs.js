import React, { useEffect, useState } from 'react'
import css from './ContactsTabs.module.scss'
import classnames from 'classnames'
import Swiper from 'react-id-swiper'
import TabCity from 'components/TabCity/TabCity'
import ContactsCard from 'Pages/Contacts/ContactsCard/ContactsCard'
import TabLocation from 'components/TabLocation/TabLocation'
import IconArrowSlider from 'assets/icons/IconArrowSlider'

const ContactsTabs = ({
  data,
  selectedCity,
  updateSelectedCity
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedLocation, updateSelectedLocation] = useState(0)
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.activeIndex)
      })
    }
  }, [swiper])

  useEffect(() => {
    updateSelectedLocation(0)
    if (swiper) {
      swiper.slideTo(0)
    }
  }, [selectedCity, swiper])

  if (!data) return null

  const cities = Object.keys(data).map((city, index) => (
    <TabCity
      className={css.city}
      isActive={city === selectedCity}
      label={city}
      onClick={() => updateSelectedCity(city)}
      key={`City selection tab ${city} - ${index}`}
    />
  ))

  const selectedCityLocationData = data && selectedCity
    ? <ContactsCard {...data[selectedCity][selectedLocation]} key={`Location address ${selectedCity} - ${selectedLocation}`} />
    : []

  const goNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper) {
      if (swiper) swiper.slidePrev()
    }
  }

  const params = {
    slidesPerView: 4,
    allowTouchMove: false,
    getSwiper: setSwiper
  }

  return (
    <section>
      <div className={css.cities}>
        { cities }
      </div>
      <div className={css.locations}>
        {selectedCity &&
          <Swiper {...params}>
            {data[selectedCity].map((location, index) => (
              <div key={`Location tab ${selectedCity}-${index}`}>
                <TabLocation
                  isActive={selectedLocation === index}
                  label={location.address}
                  onClick={() => updateSelectedLocation(index)}
                />
              </div>
            ))}
          </Swiper>
        }
        {data[selectedCity].length > 4 &&
          <>
            <button
              className={classnames(css.button, css.buttonPrev, {
                [css.buttonDisabled]: swiper && swiper.isBeginning
              })}
              onClick={goPrev}
              type='button'
            >
              <IconArrowSlider className={css.icon} />
              Предыдущий слайд
            </button>
            <button
              className={classnames(css.button, css.buttonNext, {
                [css.buttonDisabled]: swiper && swiper.isEnd
              })}
              onClick={goNext}
              type='button'
            >
              <IconArrowSlider className={css.icon} />
              Следующий слайд
            </button>
          </>
        }
      </div>
      <div className={css.content}>
        { selectedCityLocationData }
      </div>
    </section>
  )
}

export default ContactsTabs
