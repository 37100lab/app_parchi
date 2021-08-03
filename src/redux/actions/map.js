import { SET_VIEW, SHOW_LOCATION_MODAL, DISMISS_LOCATION_MODAL } from './types'

export const setMapView = payload => ({
  type: SET_VIEW,
  payload,
})

export const showLocationModal = payload => ({
  type: SHOW_LOCATION_MODAL,
  payload,
})

export const dismissLocationModal = payload => ({
  type: DISMISS_LOCATION_MODAL,
})