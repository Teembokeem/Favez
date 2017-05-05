import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default function Followee({onPressFollow, onPressRemove}) {
  return <View style={styles.base}>
    <View style={styles.avatarWrapper}>
      <Image source={require('../../../../images/default_avatar.png')}
        style={styles.avatar}
      />
    </View>
    <View style={styles.info}>
      <Text style={styles.t1}>@idy</Text>
      <Text style={styles.t2}>Indiana Jones</Text>
      <Text style={styles.t3}>Based on your favez</Text>
    </View>

    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPressFollow}>
        <View style={styles.followBtnView}>
          <Image
            style={styles.followImg}
            source={require('../../../../images/follow.png')}/>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPressRemove}>
        <View style={styles.closeBtnView}>
          <Image
            style={styles.closeImg}
            source={require('../../../../images/close.png')}/>
        </View>
      </TouchableOpacity>
    </View>
  </View>
}

const avatarD = 60
const styles = StyleSheet.create({
  base: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  avatarWrapper: {
    paddingTop: 8
  },
  wrapper: {
    justifyContent: 'center'
  },
  avatar: {
    width: avatarD,
    height: avatarD,
    borderRadius: avatarD / 2,
    marginLeft: 18,
    marginRight: 18
  },
  info: {
    flex: 1,
    paddingTop: 15
  },
  t1: {
    fontFamily: 'OpenSans-Extrabold'
  },
  t2: {
    color: '#bbbbbb',
    fontSize: 13,
    fontFamily: 'OpenSans-Semibold'
  },
  t3: {
    color: '#bbbbbb',
    marginTop: 8,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 12
  },
  followBtnView: {
    backgroundColor: '#0076ff',
    width: 65,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  followImg: {
    width: 23, height: 23,
    resizeMode: 'contain'
  },
  closeBtnView: {
    marginRight: 20
  },
  closeImg: {
    width: 18, height: 18,
    marginLeft: 20
  }
})
