import { SET_VIDEO_BANNER_TYPE } from './actionTypes'

export const setVideoBannerType = number => {
  return {
    type: SET_VIDEO_BANNER_TYPE,
    payload: number
  }
}
