import { put } from 'redux-saga/effects'
import UsersActions from '../Redux/UsersRedux'
import { Metrics } from '../Themes'
const { screenHeight } = Metrics

export function * startup (api, action) {
  try {
    const query = {
      page: 1,
      per_page: parseInt(screenHeight / 100 * 3, 10)
    }
    yield put(UsersActions.usersRequest(query))
  } catch (error) {
    console.log(error)
  }
}
