import React from 'react'
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const renderIf = condition => element => condition ? element : null
export default function Follower({follower, onPressBlock, onPressRemove, isFollower}) {
  const {username, image, profile} = follower

  return <View style={styles.base}>
    <View style={styles.avatarWrapper}>
      <Image source={image ? {uri: image} : require('../../../../images/default_avatar.png')}
        style={styles.avatar}
      />
    </View>
    <View style={styles.info}>
      <Text style={styles.t1}>@{username}</Text>
      <Text style={styles.t2}>{profile}</Text>
    </View>

    <View style={styles.wrapper1}>
      <TouchableOpacity onPress={onPressBlock}>
        <View style={[styles.followBtnView, (isFollower ? null : styles.followBtnRed)]}>
          <MCIcon style={styles.followBtnIcon} name={isFollower ? 'account' : 'account-off'} />
        </View>
      </TouchableOpacity>
    </View>

    {renderIf(!isFollower)(<View style={styles.wrapper}>
      <TouchableOpacity onPress={onPressRemove}>
        <View style={styles.closeBtnView}>
          <Image
            style={styles.closeImg}
            source={require('../../../../images/close.png')}/>
        </View>
      </TouchableOpacity>
    </View>)}

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
  wrapper1: {
    justifyContent: 'center',
    width: 80
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
    paddingTop: 15,
  },
  t1: {
    fontFamily: 'OpenSans-Extrabold',
    fontWeight:'bold'
  },
  t2: {
    color: '#bbbbbb',
    fontSize: 13,
    fontFamily: 'OpenSans-Semibold',
    marginTop:4
  },
  followBtnView: {
    backgroundColor: '#0076ff',
    width: 65,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  followBtnRed: {
    backgroundColor: '#BB0000'
  },
  followBtnIcon: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center'
  },
  closeBtnView: {
    marginRight: 15
  },
  closeImg: {
    width: 18, height: 18
  }
})
