import { SET_VIDEO_MODAL_CLOSED, SET_VIDEO_MODAL_OPEN } from 'store/actions/actionTypes'

export const openVideoModal = videoFile => {
  return {
    type: SET_VIDEO_MODAL_OPEN,
    payload: videoFile
  }
}

export const closeVideoModal = () => {
  return {
    type: SET_VIDEO_MODAL_CLOSED
  }
}
