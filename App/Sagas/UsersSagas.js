import { call, put } from 'redux-saga/effects'
import UsersActions from '../Redux/UsersRedux'
import FollowersActions from '../Redux/FollowersRedux'
import { NavigationActions } from 'react-navigation'

export function * getAllUsers (api, {query}) {
  const response = yield call(api.getUsers, query)
  if (response.ok) {
    yield put(UsersActions.usersSuccess(response.data, query))
  } else {
    yield put(UsersActions.usersFailure())
  }
}

export function * getFollowers (api, {currentUser}) {
  const response = yield call(api.getFollowers, currentUser.login)
  if (response.ok) {
    yield put(FollowersActions.followersSuccess(response.data))
    yield put(NavigationActions.navigate({routeName: 'FollowersScreen'}))
  } else {
    yield put(FollowersActions.followersFailure())
  }
}
