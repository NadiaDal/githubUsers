import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.ember
  },
  followerCard: {
    justifyContent: 'center',
    width: Metrics.screenWidth / 2 - 6,
    margin: 3,
    backgroundColor: Colors.snow
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})
