import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  avatar: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    backgroundColor: Colors.silver,
    borderRadius: 3
  },
  login: {
    fontSize: 18,
    color: Colors.eggplant
  }
})
