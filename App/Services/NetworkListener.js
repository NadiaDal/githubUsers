import {NetInfo, Alert} from 'react-native'

class NetworkListener {
  static start () {
    NetInfo.getConnectionInfo().done((reach) => {
      NetworkListener._connectionDidChange(reach)
      console.log('Initial: ' + reach)
    })

    NetInfo.addEventListener(
      'connectionChange',
      handleConnectivityChange
    )

    function handleConnectivityChange (reach) {
      console.log('First change: ' + reach)
      NetworkListener._connectionDidChange(reach)
    }
  }

  static _connectionDidChange (state) {
    if (state === 'none') {
      Alert.alert('No internet connection')
    } else {
    }
  }
}

export default NetworkListener
