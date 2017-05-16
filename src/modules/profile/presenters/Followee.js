import React from 'react'
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const renderIf = condition => element => condition ? element : null
export default function Followee({followee, onPressFollow, onPressRemove, isFollowing}) {
  const {username, image, uiStatus} = followee

  return <View style={styles.base}>
    <View style={styles.avatarWrapper}>
      <Image source={image ? {uri: image} : require('../../../../images/default_avatar.png')}
        style={styles.avatar}
      />
    </View>
    <View style={styles.info}>
      <Text style={styles.t1}>@{username}</Text>
      <Text style={styles.t2}></Text>
      <Text style={styles.t3}>Based on your favez</Text>
    </View>

    <View style={styles.wrapper1}>
      {renderIf(!uiStatus || uiStatus === 'followFail')(<TouchableOpacity onPress={onPressFollow}>
        <View style={[styles.followBtnView, (isFollowing ? styles.followBtnGreen:null)]}>
          <MCIcon style={styles.followBtnIcon} name={isFollowing ? 'account-check' : 'account-plus'} />
        </View>
      </TouchableOpacity>)}

      {renderIf(uiStatus === 'followRequesting')(<View style={styles.indicatorWrapper}>
        <ActivityIndicator
          animating={true}
          style={[styles.indicator, {height: 90}]}
          size={'small'}
        />
      </View>)}

      {renderIf(uiStatus === 'followSuccess')(<Text
        style={styles.followingText}
      >Following</Text>)}
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
  wrapper1: {
    justifyContent: 'center',
    width: 65
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
    position: 'absolute',
    bottom: 10,
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
  followBtnGreen: {
    backgroundColor: '#4CAF4E'
  },
  followBtnIcon: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center'
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
  },
  indicatorWrapper: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  followingText: {
    color: 'green',
    fontSize: 13
  }
})
