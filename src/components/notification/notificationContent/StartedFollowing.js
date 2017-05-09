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
    userName = 'user name',
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
        >
          {'@' + userName}
        </Text>
        <Text>{' started following you. '}</Text>
        <Text
          style={styles.grey}
        >{toDuration(created)}</Text>
      </Text>
    </Center>
    <Right>
      <View style={styles.followBtnView}>
        <Image
          style={styles.followImg}
          source={{uri: 'follow.png'}}
        />
      </View>
    </Right>
  </Wrapper>
}

const styles = StyleSheet.create({
  normal: {
    fontFamily: 'OpenSans'
  },
  bold: {
    fontFamily: 'OpenSans-Extrabold'
  },
  grey: {
    color: '#a4a4a4'
  },
  followBtnView: {
    backgroundColor: '#0076ff',
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  followImg: {
    width: 23, height: 23,
    resizeMode: 'contain',
  }
})
