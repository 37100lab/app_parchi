import { DISMISS_LOCATION_MODAL, SET_VIEW, SHOW_LOCATION_MODAL } from '../actions/types'

const initialState = {
  center: [45.438351, 10.99171],
  zoom: 14,
  locationClicked: null,
  showModal: false
}

const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VIEW:
      return { ...state, center: [payload.lat, payload.lng] }
    case SHOW_LOCATION_MODAL:
      return { ...state, locationClicked: payload.locationClicked, showModal: true}
    case DISMISS_LOCATION_MODAL:
      return { ...state, showModal: false}
    default:
      return state
  }
}

export default mapReducer
