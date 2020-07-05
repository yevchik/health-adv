import React, { useEffect, useState } from 'react'
import css from './ContactsTabsMobile.module.scss'
import TabCityMobile from 'components/TabCity/TabCityMobile'
import TabLocationMobile from 'components/TabLocation/TabLocationMobile'
import ContactsCardMobile from 'Pages/Contacts/ContactsCard/ContactsCardMobile'

const ContactsTabsMobile = ({
  data,
  selectedCity,
  updateSelectedCity
}) => {
  const [selectedLocation, updateSelectedLocation] = useState(0)

  useEffect(() => {
    updateSelectedLocation(0)
  }, [selectedCity])

  if (!data) return null

  const cities = Object.keys(data).map((city, index) => (
    <TabCityMobile
      className={css.city}
      isActive={city === selectedCity}
      label={city}
      onClick={() => updateSelectedCity(city)}
      key={`City selection tab ${city} - ${index}`}
    />
  ))

  const selectedCityLocationData = data && selectedCity
    ? <ContactsCardMobile {...data[selectedCity][selectedLocation]} key={`Location address ${selectedCity} - ${selectedLocation}`} />
    : []

  return (
    <section>
      <div className={css.cities}>
        <div className={css.citiesWrapper}>
          { cities }
        </div>
      </div>
      <div className={css.locations}>
        <div className={css.locationsWrapper}>
          {selectedCity &&
            data[selectedCity].map((location, index) => (
              <div key={`Location tab ${selectedCity}-${index}`}>
                <TabLocationMobile
                  className={css.location}
                  isActive={selectedLocation === index}
                  label={location.address}
                  onClick={() => updateSelectedLocation(index)}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className={css.content}>
        { selectedCityLocationData }
      </div>
    </section>
  )
}

export default ContactsTabsMobile
