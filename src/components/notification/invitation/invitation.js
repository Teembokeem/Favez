import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Button from './Button.js'
import {toDuration} from '../../../utils/timeUtils.js'

const renderIf = cond => elm => cond ? elm : null
export default function Invitation({invitation, onAccept, onReject}) {
  const {
    created,
    fromUserAvatar,
    name,
    owner,
    message,
    image,

    status
  } = invitation;

  return <View style={styles.base}>

    <View style={styles.invite}>
        <Image style={styles.avatar}
          source={fromUserAvatar ? {uri: fromUserAvatar} : require('../../../../images/default_avatar.png')}
        />

        <Text style={styles.InviteeTextContainer}>
          <Text style={styles.bold}>@{owner}</Text>{' '}
          <Text style={styles.normal}>has invited you to{'\n'}collaborate:</Text>{' '}
          <Text style={styles.grey}>{toDuration(created)}</Text>
        </Text>
    </View>

    <View style={styles.msg}>
        <Text style={styles.normal}>
          {message}
        </Text>
    </View>

    <View style={styles.info}>
      <Image style={styles.infoImg} source={image ? {uri: image} : require('../../../../images/default_list_picture.png')}/>

      <View style={styles.infoTextWrapper}>
        <Image style={styles.lock} source={{uri: 'lock.png'}}/>
        <Text style={styles.bold}>{name}</Text>
      </View>
    </View>

    {renderIf(status === 'accepted' || status === 'rejected')(<View style={styles.actions}>
      {renderIf(status === 'accepted')(<Text style={styles.accepted}>Accepted!</Text>)}
      {renderIf(status === 'rejected')(<Text style={styles.rejected}>Rejected!</Text>)}
    </View>)}

    {renderIf(status !== 'accepted' && status !== 'rejected')(<View style={styles.actions}>
      <Button
        disabled={status === 'accepting' || status === 'rejecting'}
        onPress={onReject}
        icon='whitecross.png'
        title='REJECT'
        bgColor = '#ff3824'
      />
      <View style={{width: 30}}/>
      <Button
        disabled={status === 'accepting' || status === 'rejecting'}
        onPress={onAccept}
        icon='tick.png'
        title='ACCEPT'
        bgColor = '#4caf4e'
      />
    </View>)}
  </View>
}

const avatarSize = 55
const styles = StyleSheet.create({
  base: {
    //height: 200,
    borderBottomWidth: 5,
    borderColor: '#f6f6f6'
  },
  invite: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef'
  },
  avatar: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    marginRight: 10
  },
  msg: {
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 10
  },
  info: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    alignItems: 'center'
  },
  infoTextWrapper: {
    flexDirection: 'row'
  },
  infoImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10
  },
  lock: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  normal: {
    fontFamily: 'OpenSans'
  },
  bold: {
    fontFamily: 'OpenSans-Extrabold'
  },
  grey: {
    color: '#a4a4a4'
  },
  accepted: {
    fontFamily: 'OpenSans',
    textAlign: 'center',
    color: '#4caf4e'
  },
  rejected: {
    fontFamily: 'OpenSans',
    textAlign: 'center',
    color: '#ff3824'
  }
});

