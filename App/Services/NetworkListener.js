import {NetInfo, Alert} from 'react-native'

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
    }
  }
}

export default NetworkListener
