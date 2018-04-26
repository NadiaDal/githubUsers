import { put, call } from 'redux-saga/effects'
import { getAllUsers, getFollowers } from '../../App/Sagas/UsersSagas'
import UsersActions from '../../App/Redux/UsersRedux'
import FollowersActions from '../../App/Redux/FollowersRedux'
// import  NavigationActions  from 'react-navigation'

const stepper = (fn) => (mock) => fn.next(mock).value

const mockApi = {
  getUsers: () => Promise.resolve(),
  getFollowers: () => Promise.resolve()
}

const query = {
  page: 1,
  per_page: 40
}

test('success get users', () => {
  const step = stepper(getAllUsers(mockApi, {query}))
  expect(step()).toEqual(call(mockApi.getUsers, query))
  const response = {ok: true, data: []}
  expect(step(response)).toEqual(put(UsersActions.usersSuccess(response.data, query)))
})

test('fail get user', () => {
  const step = stepper(getAllUsers(mockApi, {query}))
  expect(step()).toEqual(call(mockApi.getUsers, query))
  const response = {ok: false}
  expect(step(response)).toEqual(put(UsersActions.usersFailure()))
})

test('success get followers', () => {
  const currentUser = {login: 'sdsdv'}
  const step = stepper(getFollowers(mockApi, {currentUser}))
  expect(step()).toEqual(call(mockApi.getFollowers, currentUser.login))
  const response = {ok: true, data: ['1']}
  expect(step(response)).toEqual(put(FollowersActions.followersSuccess(response.data)))
  // expect(step()).toEqual(put(NavigationActions.navigate({routeName: 'FollowersScreen'})))
})

test('fail get followers', () => {
  const currentUser = {login: 'sdsdv'}
  const step = stepper(getFollowers(mockApi, {currentUser}))
  expect(step()).toEqual(call(mockApi.getFollowers, currentUser.login))
  const response = {ok: false}
  expect(step(response)).toEqual(put(FollowersActions.followersFailure()))
})
