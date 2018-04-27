import {NetInfo, Alert} from 'react-native'
import {store} from '../Containers/App'
import StartupAction from '../Redux/StartupRedux'

class NetworkListener {
  static start () {
    NetInfo.getConnectionInfo().done((connectionInfo) => {
      NetworkListener._connectionDidChange(connectionInfo)
    })

    NetInfo.addEventListener(
      'connectionChange',
      handleConnectivityChange
    )

    function handleConnectivityChange (connectionInfo) {
      NetworkListener._connectionDidChange(connectionInfo)
    }
  }

  static _connectionDidChange (connectionInfo) {
    if (connectionInfo.type === 'none') {
      Alert.alert('No internet connection')
    } else {
      store.dispatch(StartupAction.startup())
    }
  }
}

export default NetworkListener
