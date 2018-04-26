import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.darkishGreen
  },
  followerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth / 3 - 6,
    margin: 3,
    backgroundColor: Colors.snow,
    borderRadius: 10,
    padding: 8
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButtonText: {
    fontSize: 18,
    padding: 10,
    color: Colors.text
  },
})
