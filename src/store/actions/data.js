import { SAVE_DATA, SET_DOCTORS_FILTER, UPDATE_DOCTORS_FILTER } from 'store/actions/actionTypes'

export const ShowAll = {
  value: 'show all',
  label: 'Все '
}

export const saveData = data => {
  return {
    type: SAVE_DATA,
    payload: data
  }
}

export const setDoctorsFilter = data => {
  return dispatch => {
    const processedData = {
      regions: [],
      expertise: [],
      names: []
    }

    const filter = {}

    data.forEach(doctor => {
      const doctorRegion = {
        label: doctor.region,
        value: doctor.region
      }

      const doctorExpertise = {
        label: doctor.expertise,
        value: doctor.expertise
      }

      const doctorName = {
        label: doctor.name,
        value: doctor.name
      }

      if (processedData.regions.findIndex(item => item.value === doctorRegion.value) === -1) {
        processedData.regions.push(doctorRegion)
      }

      if (processedData.expertise.findIndex(item => item.value === doctorExpertise.value) === -1) {
        processedData.expertise.push(doctorExpertise)
      }

      if (processedData.names.findIndex(item => item.value === doctorName.value) === -1) {
        processedData.names.push(doctorName)
      }
    })

    Object.keys(processedData).forEach(dataType => {
      if (processedData[dataType].length > 0) {
        switch (dataType) {
          case 'regions':
            processedData[dataType].unshift({
              value: ShowAll.value,
              label: ShowAll.label + 'регионы'
            })
            break
          case 'expertise':
            processedData[dataType].unshift({
              value: ShowAll.value,
              label: ShowAll.label + 'специализации'
            })
            break
          default:
            processedData[dataType].unshift({
              value: ShowAll.value,
              label: ShowAll.label + 'врачи'
            })
            break
        }

        filter[dataType] = processedData[dataType].find(item => item.value === ShowAll.value)
      }
    })

    dispatch({
      type: SET_DOCTORS_FILTER,
      payload: {
        data: processedData,
        filter
      }
    })
  }
}

export const updateDoctorsFilter = (newValue, filterType) => {
  return {
    type: UPDATE_DOCTORS_FILTER,
    payload: {
      value: newValue,
      type: filterType
    }
  }
}
