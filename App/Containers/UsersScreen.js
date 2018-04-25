import React, { Component } from 'react'
import { ScrollView, View, Text, KeyboardAvoidingView, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/UsersScreenStyle'

class UsersScreen extends Component {
  renderLoader = () => {
    return (
      <ActivityIndicator
        size={'large'}
        color={Colors.bloodOrange}
      />
    )
  }

  renderUserProfiles = () => {
    const {users} = this.props
    return (
      <FlatList
        keyExtractor={(item, index) => index}
        data={users}
        numColumns={1}
        horizontal={false}
        renderItem={this.renderPhoto}
        onEndReached={this.loadNext}
      />
    )
  }

  loadNext = () => {
    // const {query} = this.props
    // const nextPage = {...query, page: query.page + 1}
    // this.props.search(nextPage)
  }

  renderPhoto = ({item}) => {
    console.log(item)
    return (
      <TouchableOpacity
        onPress={() => {}}
      >
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={{uri: item.avatar_url}}
          />
          <View>
            <Text style={styles.login}>{item.login}</Text>
            <Text>{item.html_url}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    const { users } = this.props
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>UsersScreen</Text>
          {users === null ? this.renderLoader() : this.renderUserProfiles()}
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)
