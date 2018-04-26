// flow
import React from 'react'
import {TouchableOpacity, View, Image, Text, ActivityIndicator} from 'react-native'
import _ from 'lodash'
import styles from './Styles/UserCardStyles'
import { Colors } from '../Themes'

type UserProps = {
  onPress: Function,
  item: Object,
  fetching: Boolean
}

export const debounce = (f, time = 500) => {
  return _.debounce(f, time)
}

export default function UserCard (props: UserProps) {
  const {onPress, item, fetching} = props
  const loader = (
    <ActivityIndicator
      style={styles.loader}
      size={40}
      color={Colors.darkishGreen}
    />
  )
  return (
    <TouchableOpacity
      onPress={debounce(() => onPress(item))}
    >
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: item.avatar_url}}
        />
        <View>
          <Text style={styles.login}>{item.login}</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode={'head'}
            style={styles.url}
          >{item.html_url}
          </Text>
          {fetching ? loader : null}
        </View>
      </View>
    </TouchableOpacity>
  )
}
