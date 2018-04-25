import { put } from 'redux-saga/effects'
import UsersActions from '../Redux/UsersRedux'

// exported to make available for tests

// process STARTUP actions
export function * startup (api, action) {
  try {
    yield put(UsersActions.usersRequest())
  } catch (error) {
    console.log(error)
  }
}
