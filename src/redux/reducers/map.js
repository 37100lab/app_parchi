import {
  DISMISS_LOCATION_MODAL,
  SET_CURRENT_POSITION,
  SHOW_LOCATION_MODAL,
} from '../actions/types'

const initialState = {
  center: [45.438351, 10.99171],
  zoom: 14,
  position: [],
  locationClicked: null,
  showModal: false,
}

const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_POSITION:
      return {
        ...state,
        position: payload,
      }
    case SHOW_LOCATION_MODAL:
      return {
        ...state,
        locationClicked: payload.locationClicked,
        showModal: true,
      }
    case DISMISS_LOCATION_MODAL:
      return { ...state, showModal: false }
    default:
      return state
  }
}

export default mapReducer
