import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UsersRedux'

test('usersRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.usersRequest())
  expect(state.fetching).toBe(true)
})

test('usersSuccess', () => {
  const payload = [{login: 'sdfdfs', html_url: ''}]
  const state = reducer(INITIAL_STATE, Actions.usersSuccess(payload))
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
  expect(state.data).toEqual(payload)
})

test('usersFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.usersFailure())
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})

