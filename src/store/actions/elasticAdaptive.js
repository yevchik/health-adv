import { SET_CURRENT_FONT_SIZE } from 'store/actions/actionTypes'

export const setFontSize = data => {
  return {
    type: SET_CURRENT_FONT_SIZE,
    payload: data
  }
}
