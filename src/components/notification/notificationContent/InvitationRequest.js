import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'
import Wrapper from './layout/Wrapper.js'

export default function AcceptInvitation({notification}) {
  return <Wrapper>
    <View
      style={styles.NotificationBodyContainer}
    >
      <Text
        style={styles.NotificationBodyText}
      >{'@' + notification.fromUser.username}</Text>
      <Text
        style={styles.NotificationBodyText}
      >{' has invited you to collaborate.'}</Text>
      <Text
        style={styles.NotificationBodyText}
      >{notification.timeAgo}</Text>
    </View>
  </Wrapper>
}

const styles = StyleSheet.create({
  
})
