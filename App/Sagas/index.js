import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { UsersTypes } from '../Redux/UsersRedux'
import { FollowersTypes } from '../Redux/FollowersRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getAllUsers, getFollowers } from './UsersSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(UsersTypes.USERS_REQUEST, getAllUsers, api),
    takeLatest(FollowersTypes.FOLLOWERS_REQUEST, getFollowers, api)
  ])
}
