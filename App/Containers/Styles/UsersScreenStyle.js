import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkishGreen
  },
  loaderContainer: {
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    flex: 1,
    backgroundColor: Colors.darkishGreen,
    opacity: 0.6
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
  url: {},
  error: {
    fontSize: 18,
    color: Colors.text
  }
})
