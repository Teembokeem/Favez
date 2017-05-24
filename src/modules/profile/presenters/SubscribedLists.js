import React from 'react'
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  ActivityIndicator,ScrollView
} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';



export default function SubscribedLists({list,key,blockedlist,subscribedlists}) {

  return <View style={styles.base}>
    <View style={styles.avatarWrapper}>
      <Image source={require('../../../../images/default_avatar.png')}
        style={styles.avatar} />
    </View>
    <View style={styles.info}>

      <Text style={styles.listName} >{list.name}</Text>

    </View>

    {renderIf(subscribedlists === 'subscribedlists')(    <View style={styles.icons}>
          <FontAwesomeIcon name="bookmark"  backgroundColor="green"></FontAwesomeIcon>

        </View>)}
{renderIf(blockedlist === 'blockedlist')(<TouchableOpacity >
  <View style={styles.followedBtnView}>
  <FontAwesomeIcon name="eye-slash" />
  </View>
</TouchableOpacity>)}


    </View>

}

const avatarD = 60
const styles = StyleSheet.create({
  base: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginBottom: 5

  },
  listName: {
    color: '#000',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold'
  },
  icons: {
    padding: 10,

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
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3
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
