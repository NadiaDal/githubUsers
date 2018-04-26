import { call, put, select } from 'redux-saga/effects'
import UsersActions from '../Redux/UsersRedux'

export function * getAllUsers (api, {query}) {
  const response = yield call(api.getUsers, query)
  if (response.ok) {
    yield put(UsersActions.usersSuccess(response.data, query))
  } else {
    yield put(UsersActions.usersFailure())
  }
}
