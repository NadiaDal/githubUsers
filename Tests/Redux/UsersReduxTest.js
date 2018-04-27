import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UsersRedux'

test('usersRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.usersRequest())
  expect(state.fetching).toBe(true)
})

test('usersSuccess', () => {
  const payload = [{login: 'sdfdfs', html_url: ''}]
  const query = {
    page: 1,
    per_page: 40
  }
  const state = reducer(INITIAL_STATE, Actions.usersSuccess(payload, query))
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
  expect(state.query).toBe(query)
  expect(state.payload).toBe(payload)
})
