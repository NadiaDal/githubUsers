import { StackNavigator } from 'react-navigation'
import UsersScreen from '../Containers/UsersScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  UsersScreen: { screen: UsersScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'UsersScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
