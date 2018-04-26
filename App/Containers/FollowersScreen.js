import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import styles from './Styles/FollowersScreenStyle'

class FollowersScreen extends Component {

  renderBackButton = () => {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={this.props.goBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    )
  }
  renderFollower = ({item}) => {
    return (
      <View style={styles.followerCard}>
        <Image
          style={styles.avatar}
          source={{uri: item.avatar_url}}
        />
        <Text>{item.login}</Text>
      </View>
    )
  }
  render () {
    return (
      <View style={styles.container}>
          <Text>FollowersScreen</Text>
          {this.renderBackButton()}
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.props.followers}
            numColumns={2}
            horizontal={false}
            renderItem={this.renderFollower}
          />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    followers: state.followers.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => dispatch(NavigationActions.back()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersScreen)
