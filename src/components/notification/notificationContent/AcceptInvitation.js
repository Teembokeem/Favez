import React from 'react'
import {
  Text, StyleSheet, Image,
  TouchableOpacity
} from 'react-native'
import LeftAvatar from './layout/LeftAvatar.js'
import Center from './layout/Center.js'
import Right from './layout/Right.js'
import Wrapper from './layout/Wrapper.js'
import {toDuration} from '../../../utils/timeUtils.js'

export default function AcceptInvitation({
  notification,
  onPressRedirectToList
}) {
  const {
    fromUserAvatar,
    rightImage,
    userName = 'user name',
    listRef = 'List Ref',
    created = ''
  } = notification

  return <Wrapper>
    <LeftAvatar uri={fromUserAvatar}/>
    <Center>
      <Text
        style={styles.normal}
      >
        <Text
          style={styles.bold}
        >{'@' + userName}</Text>
        <Text
          style={styles.NotificationBodyNormalText}
        >{' has accepted your invitation to collaborate on '}</Text>
        <Text
          style={styles.bold}
        >{listRef.toUpperCase() + ' '}</Text>
        <Text
          style={styles.grey}
        >{toDuration(created)}</Text>
      </Text>
    </Center>
    <Right>
      <TouchableOpacity onPress={onPressRedirectToList}>
        <Image style={styles.img} source={{uri: rightImage}}/>
      </TouchableOpacity>
    </Right>
  </Wrapper>
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50
  },
  normal: {
    fontFamily: 'OpenSans'
  },
  bold: {
    fontFamily: 'OpenSans-Extrabold'
  },
  grey: {
    color: '#a4a4a4'
  }
})
