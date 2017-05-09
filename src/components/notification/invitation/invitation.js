import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default function Invitation({invitation}) {
  console.log('my invitation!', invitation);
  const {created, description, id, name, owner, user} = invitation;
  return <View style={styles.base}>
    
    <View style={styles.invite}>
        <Image style={styles.avatar} 
          source={user[0].f3 ? {uri: user[0].f3} : require('../../../../images/default_avatar.png')}
        />
        
        <Text style={styles.InviteeTextContainer}>
          <Text style={styles.bold}>@{owner}</Text>{' '}
          <Text style={styles.normal}>has invited you to collaborate</Text>{' '}
          <Text style={styles.grey}>{created}</Text>
        </Text>
    </View>
    
    <View style={styles.msg}>
        <Text style={styles.normal}>
          Hey man, let's make a greate list together.
        </Text>
    </View>

    <View style={styles.info}>
      <Image style={styles.infoImg} source={invitation._favez ? {uri: invitation._favez[0].image} : require('../../../../images/default_list_picture.png')}/>

      <View style={styles.infoTextWrapper}>
        <Image style={styles.lock} source={{uri: 'lock.png'}}/>
        <Text style={styles.bold}>{name}</Text>
      </View>
    </View>

    <View style={styles.ActionContainer}>
      <View style={styles.rejectButtonContainer}>
        <TouchableOpacity>
          <Text>X</Text>
          <Text>Reject</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.acceptButtonContainer}>
          <TouchableOpacity>
            <Text>check</Text>
            <Text>Accept</Text>
          </TouchableOpacity>
      </View>
    </View>
  </View>
}

const avatarSize = 55
const styles = StyleSheet.create({
  base: {
    //height: 200,
    borderBottomWidth: 1,
    borderColor: '#d8d8d8'
  },
  invite: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef'
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    marginLeft: 10,
    marginRight: 10
  },
  msg: {
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  info: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingTop: 10,
    paddingBottom: 10
  },
  infoTextWrapper: {
    flexDirection: 'row'
  },
  infoImg: {
    marginLeft: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  lock: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
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
});

