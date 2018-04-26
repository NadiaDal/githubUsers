import { call, put, select } from 'redux-saga/effects'
import UsersActions from '../Redux/UsersRedux'
import FollowersActions from '../Redux/UsersRedux'

export function * getAllUsers (api, {query}) {
  const response = yield call(api.getUsers, query)
  if (response.ok) {
    yield put(UsersActions.usersSuccess(response.data, query))
  } else {
    yield put(UsersActions.usersFailure())
  }
}

export function * getFollowers(api, {login}) {
  const response = yield call(api.getFollowers, login)
  if (response.ok) {
    yield put(FollowersActions.followersSuccess(response.data, query))
  } else {
    yield put(FollowersActions.followersFailure())
  }
}
