import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.sunflowerYellow
  },
  loader: {
    position: 'absolute'
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    backgroundColor: Colors.silver,
    borderRadius: 10
  },
  login: {
    fontSize: 20,
    color: Colors.darkishGreen
  },
  url: {
    padding: 5
  }
})
