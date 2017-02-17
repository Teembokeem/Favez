import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
// import NotificationHeader from './NotificationHeader';
// import NotificationBody from './NotificationBody';
// import NotificationFooter from './NotificationFooter';

function renderNotificationBody(notification) {
  console.log('rendering', notification)
  switch (notification.type) {
    case 'invitation_accept':
      console.log('invitation_accept!')
      return (
        <View
          style={styles.NotificationBodyContainer}
        >
          <Text
            style={styles.NotificationBodyAllText}
          >
            <Text
              style={styles.NotificationBodyUsername}
            >{'@' + notification.fromUser.username}</Text>
            <Text
              style={styles.NotificationBodyNormalText}
            >{' has accepted your invitation to collaborate on '}</Text>
            <Text
              style={styles.NotificationBodyListName}
            >{notification.body.list_ref.name.toUpperCase() + ' '}</Text>
            <Text
              style={styles.NotificationBodyTime}
            >{notification.timeAgo}</Text>
          
          </Text>
        </View>
      );
    case 'follow':
      return (
        <View
          style={styles.NotificationBodyContainer}
        >
          <Text
            style={styles.NotificationBodyAllText}
          >
            <Text
              style={styles.NotificationBodyUsername}
            >
              {'@' + notification.fromUser.username}
            </Text>
            <Text
              style={styles.NotificationBodyNormalText}
            >{' starte4d following you. '}</Text>
            <Text
              style={styles.NotificationBodyTime}
            >{notification.timeAgo}</Text>
          </Text>
        </View>
      );
    case 'comment':
      return (
        <View
          style={styles.NotificationBodyContainer}
        >
          <Text
            style={styles.NotificationBodyText}
          >
            <Text
              style={styles.NotificationBodyUsername}
            >
              {'@' + notification.fromUser.username}
            </Text>
            <Text
              style={styles.NotificationBodyNormalText}
            >{' commented: '}</Text>
            <Text
              style={styles.NotificationBodyNormalText}
            >{notification.body.message + ' '}</Text>
            <Text
              style={styles.NotificationBodyTime}
            >{notification.timeAgo}</Text>
          </Text>
        </View>
      );
    case 'new_user':
      return (
        <View
          style={styles.NotificationBodyContainer}
        >
          <Text
            style={styles.NotificationBodyText}
          >
            <Text
              style={styles.NotificationBodyNormalText}
            >
              {' Your contact Petra is now on favez as: '}
            </Text>
            <Text
              style={styles.NotificationBodyUsername}
            >{'@' + notification.fromUser.username + ' '}</Text>
            <Text
              style={styles.NotificationBodyTime}
            >{notification.timeAgo}</Text>
          
          </Text>
        </View>
      );
    case 'favez_like':
      return (
        <View
          style={styles.NotificationBodyContainer}
        >
          <Text
            style={styles.NotificationBodyText}
          >
            <Text
              style={styles.NotificationBodyUsername}
            >
              {'@' + notification.fromUser.username}
            </Text>
            <Text
              style={styles.NotificationBodyNormalText}
            >{' liked a link in '}</Text>
            <Text
              style={styles.NotificationBodyListName}
            >{notification.body.list_ref.name.toUpperCase() + ' '}</Text>
            <Text
              style={styles.NotificationBodyTime}
            >{notification.timeAgo}</Text>
          
          </Text>
        </View>
      );
    case 'invitation_request':
      return (
        <View
          style={styles.NotificationBodyContainer}
        >
          <Text
            style={styles.NotificationBodyText}
          >{'@' + notification.fromUser.username}</Text>
          <Text
            style={styles.NotificationBodyText}
          >{' has invited you to collaborate.'}</Text>
          <Text
            style={styles.NotificationBodyText}
          >{notification.timeAgo}</Text>
        </View>
      );
    default:
      return null;
  }
}

function renderNotificationSymbol(notification) {
  switch (notification.type) {
    case 'invitation_accept':
    case 'comment':
    case 'favez_like':
      return (
        <View
          style={styles.NotificationSymbolContainer}
        >
          <Image source={notification.body.list_ref.picture}/>
        </View>
      );
    case 'follow':
      return (
        <View
          style={styles.NotificationSymbolContainer}
        >
          <View>
            <FAIcon name='group'/>
          </View>
        </View>
      );
    case 'new_user':
      return (
        <View
          style={styles.NotificationSymbolContainer}
        >
          <View>
            <FAIcon name='user'/>
          </View>
        </View>
      );
    default:
      return null;
  }
}

function renderNotificationExtra(notification) {
  if (notification.type === 'invitation_request') {
    return (
      <View>
        <View>
          <Text>{'Hey man, let\'s make a great list toegether.'}</Text>
        </View>
        <View>
          <View>
            <Image style={styles.NotificationFromUser} source={{uri: notification.body.list_ref.picture}}/>
          </View>
          <View>
            <FAIcon name='lock'/>
          </View>
          <View>
            <Text>{notification.body.list_ref.name.toUpperCase()}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <FAIcon name='close'/>
            <Text>{'Reject'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FAIcon name='check'/>
            <Text>{'Accept'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
}

function Notification({notification}) {
  console.log('hi categories', notification);
  const {toUser, fromUser, type, body} = notification;
  const notificationBody = renderNotificationBody(notification);
  const notificationSymbol = renderNotificationSymbol(notification);
  const notificationExtra = renderNotificationExtra(notification);
  return (
    <TouchableOpacity
      style={styles.NotificationContainer}
    >
      <View>
        <Image style={styles.NotificationFromUser} source={{uri: notification.fromUser.avatar}}/>
      </View>
      {notificationBody}
      {notificationSymbol}
      {notificationExtra}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  NotificationContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    width: 375,
    paddingLeft: 15,
    paddingRight: 15,
    height: 75,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#d8d8d8'
  },
  NotificationFromUser: {
    width: 45,
    height: 45,
    borderRadius: 22
  },
  NotificationBodyContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    padding: 7,
    minWidth: 240,
  },
  NotificationBodyAllText: {
    fontFamily: 'Hind-Regular',
    fontSize: 15
  },
  NotificationBodyNormalText: {
    lineHeight: 22,
  },
  NotificationBodyUsername: {
    lineHeight: 22,
    fontFamily: 'Hind-Bold',
  },
  NotificationBodyListName: {
    lineHeight: 22,
    fontFamily: 'Hind-Bold',
    fontSize: 16
  },
  NotificationBodyTime: {
    lineHeight: 22,
    color: '#d8d8d8',
  },
  NotificationSymbolContainer: {
    flex: 1,
    width: 50
  }
});

export default Notification;
