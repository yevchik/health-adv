import { SET_VIDEO_MODAL_CLOSED, SET_VIDEO_MODAL_OPEN } from 'store/actions/actionTypes'

const initialState = {
  isModalOpen: false,
  videoFile: ''
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO_MODAL_OPEN:
      return {
        isModalOpen: true,
        videoFile: action.payload
      }
    case SET_VIDEO_MODAL_CLOSED:
      return {
        isModalOpen: false,
        videoFile: null
      }
    default:
      return state
  }
}
