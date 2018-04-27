import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
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
  renderErrorMsg = () => {
    return (
      <Text style={styles.error}>The search result is not available</Text>
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
    const { users, error } = this.props
    return (
      <View style={styles.container}>
        {error ? this.renderErrorMsg() : (users === null || users.length === 0 ? this.renderLoader() : this.renderUserProfiles())}
        {this.props.fetching && this.renderLoader()}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data,
    fetching: state.followers.fetching,
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
