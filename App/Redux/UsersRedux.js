import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  usersRequest: ['query'],
  usersSuccess: ['payload', 'query'],
  usersFailure: null
})

export const UsersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  data: [],
  error: null,
  query: {}
})

/* ------------- Selectors ------------- */

export const UsersSelectors = {
  getUsers: state => state.data,
  getQuery: state => state.query
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) =>
  state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { payload, query } = action
  return state.merge({ fetching: false, error: null, data: [...state.data, ...payload], query })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USERS_REQUEST]: request,
  [Types.USERS_SUCCESS]: success,
  [Types.USERS_FAILURE]: failure
})
