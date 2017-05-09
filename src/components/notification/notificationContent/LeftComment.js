import React from 'react'
import {
  View, Text, StyleSheet, Image
} from 'react-native'
import LeftAvatar from './layout/LeftAvatar.js'
import Center from './layout/Center.js'
import Right from './layout/Right.js'
import Wrapper from './layout/Wrapper.js'
import {toDuration} from '../../../utils/timeUtils.js'

export default function AcceptInvitation({notification}) {
  const {
    fromUserAvatar,
    rightImage,
    userName = 'user name',
    message = '',
    created = '2m'
  } = notification
  return <Wrapper>
    <LeftAvatar uri={fromUserAvatar}/>
    <Center>
      <Text
        style={styles.normal}
      >
        <Text
          style={styles.bold}
        >
          {'@' + userName}
        </Text>
        <Text>{' commented: '}</Text>
        <Text>{message + ' '}</Text>
        <Text style={styles.grey}>{toDuration(created)}</Text>
      </Text>
    </Center>
    <Right>
      <Image style={styles.img} source={{uri: rightImage}}/>
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
