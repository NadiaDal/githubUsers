import { put } from 'redux-saga/effects'
import { startup } from '../../App/Sagas/StartupSagas'
import UsersActions from '../../App/Redux/UsersRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('watches for the right action', () => {
  const query = {
    page: 1,
    per_page: 40
  }
  const step = stepper(startup())
  expect(step()).toEqual(put(UsersActions.usersRequest(query)))
})
