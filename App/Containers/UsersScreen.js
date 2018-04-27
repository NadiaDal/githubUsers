import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
import UsersActions from '../Redux/UsersRedux'
import FollowersActions from '../Redux/FollowersRedux'
import UserCard from '../Components/UserCard'
import {debounce} from '../Services'

// Styles
import styles from './Styles/UsersScreenStyle'

class UsersScreen extends Component {
  renderLoader = () => {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          style={styles.loader}
          size={50}
          color={Colors.silver}
        />
      </View>
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
        renderItem={this.renderUser}
        onEndReached={this.loadNext}
      />
    )
  }

  loadNext = () => {
    const {query} = this.props
    const since = query.since + query.per_page
    const nextPage = {...query, since }
    this.props.loadNext(nextPage)
  }

  renderErrorMsg = (msg) => {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.error}>{msg}</Text>
      </View>
    )
  }

  renderUser = ({item}) => {
    return (
      <TouchableOpacity
        onPress={debounce(() => this.props.getFollowers(item))}
      >
        <UserCard
          item={item}
        />
      </TouchableOpacity>
    )
  }

  render () {
    const { users, error, fetchingFollowers, fetchingUsers } = this.props
    return (
      <View style={styles.container}>
        {users.length > 0 && this.renderUserProfiles()}
        {error && users.length === 0 && this.renderErrorMsg('The search result is not available')}
        {(fetchingUsers || fetchingFollowers) && this.renderLoader()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
    fetchingFollowers: state.followers.fetching,
    fetchingUsers: state.users.fetching,
    error: state.users.error,
    query: state.users.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadNext: (query) => dispatch(UsersActions.usersRequest(query)),
    getFollowers: (login, currentUser) => dispatch(FollowersActions.followersRequest(login, currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)
