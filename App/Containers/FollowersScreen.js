import React, { Component } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import UserCard from '../Components/UserCard'

import styles from './Styles/FollowersScreenStyle'

class FollowersScreen extends Component {

  renderBackButton = () => {
    return (
      <TouchableOpacity
        style={styles.backButton}
        onPress={this.props.goBack}>
        <Text style={styles.backButtonText}>Go Back</Text>
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
        {this.renderBackButton()}
        <UserCard
          item={this.props.currentUser}
        />
        <Text style={styles.backButtonText}>Followers</Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.props.followers}
          numColumns={3}
          horizontal={false}
          renderItem={this.renderFollower}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    followers: state.followers.payload,
    currentUser: state.followers.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => dispatch(NavigationActions.back()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowersScreen)
