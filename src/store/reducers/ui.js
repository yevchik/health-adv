import {
  SET_CONTENT_MODAL_OPEN,
  SET_IMAGE_MODAL_CLOSED,
  SET_IMAGE_MODAL_OPEN, SET_MODAL_CLOSED,
  SET_VIDEO_MODAL_CLOSED,
  SET_VIDEO_MODAL_OPEN
} from 'store/actions/actionTypes'

const initialState = {
  isModalOpen: false,
  videoFile: null,
  imageFile: null,
  content: null
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        videoFile: action.payload
      }
    case SET_VIDEO_MODAL_CLOSED:
      return {
        ...state,
        isModalOpen: false,
        videoFile: null
      }
    case SET_IMAGE_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        imageFile: action.payload
      }
    case SET_IMAGE_MODAL_CLOSED:
      return {
        ...state,
        isModalOpen: false,
        imageFile: null
      }
    case SET_MODAL_CLOSED:
      return {
        isModalOpen: false,
        videoFile: null,
        imageFile: null,
        content: null
      }
    case SET_CONTENT_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        content: action.payload
      }
    default:
      return state
  }
}
