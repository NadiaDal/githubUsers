import { call, put } from 'redux-saga/effects'
import UsersActions from '../Redux/UsersRedux'

export function * getAllUsers (api, action) {
  const query = {
    page: 1,
    per_page: 100
  }
  const response = yield call(api.getUsers, query)
  if (response.ok) {
    yield put(UsersActions.usersSuccess(response.data))
  } else {
    yield put(UsersActions.usersFailure())
  }
}
