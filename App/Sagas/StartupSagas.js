import { put, select } from 'redux-saga/effects'
import UsersActions, { UsersSelectors } from '../Redux/UsersRedux'
import { Metrics } from '../Themes'
const { screenHeight } = Metrics

const selectQuery = state => state.users.query

export function * startup (api, action) {
  try {
    let query = yield select(selectQuery)
    if (query === null) {
      query = {
        since: 0,
        per_page: parseInt(screenHeight / 100 * 3, 10)
      }
    }
    yield put(UsersActions.usersRequest(query))
  } catch (error) {
    console.log(error)
  }
}
