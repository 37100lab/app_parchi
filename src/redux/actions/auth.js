import { AUTH_ERROR, AUTH_USER } from './types'

export const register = formData => async dispatch => {
  try {
    const res = {}
    dispatch({
      type: AUTH_USER,
      payload: res.data,
    })
    localStorage.setItem('jwt', res.data.jwt)
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    })
  }
}

export const login = formData => async dispatch => {
  try {
    const res = {}
    dispatch({
      type: AUTH_USER,
      payload: res.data,
    })
    localStorage.setItem('jwt', res.data.jwt)
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    })
  }
}

export const logout = dispatch => {
  localStorage.removeItem('jwt')

  dispatch({
    type: AUTH_USER,
    payload: { user: null, jwt: null },
  })
}
