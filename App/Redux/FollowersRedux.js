import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  followersRequest: ['currentUser'],
  followersSuccess: ['payload'],
  followersFailure: null
})

export const FollowersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  payload: null,
  error: false,
  currentUser: {}
})

/* ------------- Selectors ------------- */

export const FollowersSelectors = {
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {currentUser}) =>
  state.merge({ fetching: true, currentUser })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: false, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FOLLOWERS_REQUEST]: request,
  [Types.FOLLOWERS_SUCCESS]: success,
  [Types.FOLLOWERS_FAILURE]: failure
})
