// flow
import React from 'react'
import {View, Image, Text} from 'react-native'
import styles from './Styles/UserCardStyles'

type UserProps = {
  item: Object
}

export default function UserCard (props: UserProps) {
  const {item} = props
  return (
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
      </View>
    </View>
  )
}
