import {
  SET_CURRENT_POSITION,
  SHOW_LOCATION_MODAL,
  DISMISS_LOCATION_MODAL,
} from './types'

export const setGps = payload => ({
  type: SET_CURRENT_POSITION,
  payload,
})

export const showLocationModal = payload => ({
  type: SHOW_LOCATION_MODAL,
  payload,
})

export const dismissLocationModal = payload => ({
  type: DISMISS_LOCATION_MODAL,
})
