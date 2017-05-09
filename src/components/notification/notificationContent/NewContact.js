import React from 'react'
import {
  View, Text, StyleSheet, Image
} from 'react-native'
import LeftAvatar from './layout/LeftAvatar.js'
import Center from './layout/Center.js'
import Right from './layout/Right.js'
import Wrapper from './layout/Wrapper.js'

export default function AcceptInvitation({notification}) {
  const {
    fromUserAvatar,
    userName = 'user name',
    timeAgo = ''
  } = notification
  return <Wrapper>
    <LeftAvatar uri={fromUserAvatar}/>
    <Center>
      <Text style={styles.normal}>
        <Text>
          {' Your contact Petra is now on favez as: '}
        </Text>
        <Text style={styles.bold}>{'@' + userName + ' '}</Text>
        <Text style={styles.grey}>{timeAgo}</Text>
      </Text>
    </Center>
    <Right>
      <View style={styles.followBtnView}>
        <Image
          style={styles.followImg}
          source={{uri: 'following2.png'}}
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
    backgroundColor: '#4caf4e',
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  followImg: {
    width: 23, height: 23,
    resizeMode: 'contain'
  }
})
