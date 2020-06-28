import { SAVE_DATA, SET_DOCTORS_FILTER, UPDATE_DOCTORS_FILTER } from 'store/actions/actionTypes'
import { updateObject } from 'utils'

const initialState = {
  fetchedData: [],
  filteredData: [],
  doctors: {
    data: {},
    filterState: {}
  }
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_DATA:
      return updateObject(state, { fetchedData: action.payload }, { filteredData: action.payload })
    case SET_DOCTORS_FILTER:
      return updateObject(state, { doctors: { data: action.payload.data, filterState: action.payload.filter } })
    case UPDATE_DOCTORS_FILTER:
      const { value, type} = action.payload
      const updatedFilterState = updateObject(state.doctors.filterState, { [type]: value })
      const updatedDoctors =  updateObject(state.doctors, { filterState: updatedFilterState })
      return updateObject(state, { doctors: updatedDoctors })
    default:
      return state
  }
}
