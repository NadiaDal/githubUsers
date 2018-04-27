import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/FollowersRedux'

test('followersRequest', () => {
  const currentUser = 'sfdd'
  const state = reducer(INITIAL_STATE, Actions.followersRequest(currentUser))
  expect(state.fetching).toBe(true)
  expect(state.currentUser).toEqual(currentUser)
})

test('followersSuccess', () => {
  const payload = [{login: 'sdfdfs', html_url: ''}]
  const state = reducer(INITIAL_STATE, Actions.followersSuccess(payload))
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
  expect(state.payload).toEqual(payload)
})

test('followersFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.followersFailure())
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.payload).toEqual(null)
})

