import { AUTH_ERROR, AUTH_USER } from '../actions/types'

const initialState = {
  jwt: '',
  user: null,
  error: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        jwt: payload.jwt,
        user: { ...payload.user, role: { ...payload.user.role } },
        error: null,
      }

    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
      }

    default:
      return state
  }
}

export default authReducer
