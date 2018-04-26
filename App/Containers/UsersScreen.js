import React, { Component } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
import UsersActions from '../Redux/UsersRedux'
import FollowersActions from '../Redux/FollowersRedux'

// Styles
import styles from './Styles/UsersScreenStyle'

class UsersScreen extends Component {
  renderLoader = () => {
    return (
      <ActivityIndicator
        style={styles.loader}
        size={50}
        color={Colors.silver}
      />
    )
  }

  renderUserProfiles = () => {
    const {users} = this.props
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={users}
        numColumns={1}
        horizontal={false}
        renderItem={this.renderPhoto}
        onEndReached={this.loadNext}
      />
    )
  }

  loadNext = () => {
    const {query} = this.props
    const nextPage = {...query, page: query.page + 1}
    this.props.loadNext(nextPage)
  }

  renderPhoto = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.getFollowers(item.login)}
      >
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={{uri: item.avatar_url}}
          />
          <View>
            <Text style={styles.login}>{item.login}</Text>
            <Text style={styles.url}>{item.html_url}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    const { users } = this.props
    return (
      <View style={styles.container}>
          {users === null ? this.renderLoader() : this.renderUserProfiles()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
    query: state.users.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNext: (query) => dispatch(UsersActions.usersRequest(query)),
    getFollowers: (login) => dispatch(FollowersActions.followersRequest(login))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)
