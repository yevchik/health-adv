import {
  SET_CURRENT_FONT_SIZE,
  SET_USER_DEVICE_TYPE
} from 'store/actions/actionTypes'

const initialState = {
  deviceType: null,
  config: {
    desktop: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_DESKTOP,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_DESKTOP
    },
    tablet: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_TABLET,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_TABLET
    },
    mobile: {
      baseSize: 10,
      baseWidth: process.env.REACT_APP_BASE_WIDTH_MOBILE,
      widthLimit: process.env.REACT_APP_WIDTH_LIMIT_MOBILE
    }
  },
  curFontSize: 10
}

export default function ElasticAdaptive (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_FONT_SIZE:
      return {
        ...state,
        curFontSize: action.payload
      }
    case SET_USER_DEVICE_TYPE:
      return {
        ...state,
        deviceType: action.payload
      }
    default:
      return state
  }
}
