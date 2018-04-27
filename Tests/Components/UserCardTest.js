import 'react-native'
import React from 'react'
import UserCard from '../../App/Components/UserCard'
import renderer from 'react-test-renderer'

test('UserCard component renders correctly', () => {
  const item = {
    avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
    html_url: 'https://github.com/defunkt',
    login: 'defunkt'
  }
  const tree = renderer.create(<UserCard item={item} />).toJSON()
  expect(tree).toMatchSnapshot()
})
