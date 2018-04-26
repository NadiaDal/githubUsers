import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10
  },
  profile: {
    flexDirection: 'row',
    width: Metrics.screenWidth - 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
    backgroundColor: Colors.silver,
    borderRadius: 10
  },
  login: {
    fontSize: 20,
    color: Colors.darkishGreen
  },
  url: {}
})
