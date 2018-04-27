import { put, select } from 'redux-saga/effects'
import { startup, selectQuery } from '../../App/Sagas/StartupSagas'
import UsersActions from '../../App/Redux/UsersRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('watches for the right action', () => {
  const query = {
    since: 0,
    per_page: 40
  }
  const step = stepper(startup())
  expect(step()).toEqual(select(selectQuery))
  expect(step(query)).toEqual(put(UsersActions.usersRequest(query)))
})
