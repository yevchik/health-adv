import { SET_VIDEO_BANNER_TYPE } from 'store/actions/actionTypes'

const initialState = {
  videoBannerType: 1
}

export default function videoBannerReducer (state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO_BANNER_TYPE:
      console.log(action.payload)
      return {
        videoBannerType: action.payload
      }
    default:
      return state
  }
}
