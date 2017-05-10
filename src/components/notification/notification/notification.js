import React from 'react';
import {
  View
} from 'react-native';
import AcceptInvitation from '../notificationContent/AcceptInvitation.js'
import StartedFollowing from '../notificationContent/StartedFollowing.js'
import LeftComment from '../notificationContent/LeftComment.js'
import NewContact from '../notificationContent/NewContact.js'
import Liked from '../notificationContent/Liked.js'

export default class Notification extends React.Component {
  renderNotificationByType(notification, onPressRedirectToList) {
    const {type} = notification
    switch (type) {
      case 1:
        return <AcceptInvitation
          notification={notification}
          onPressRedirectToList={onPressRedirectToList}
        />
      case 2:
        return <StartedFollowing notification={notification}/>
      case 3:
        return <LeftComment
          notification={notification}
          onPressRedirectToList={onPressRedirectToList}
        />
      case 4:
        return <NewContact notification={notification}/>
      case 5:
        return <Liked
          notification={notification}
          onPressRedirectToList={onPressRedirectToList}
        />
      default:
        console.warn('Unsupport notification type ' + type)
        return <View></View>
    }
  }
  render() {
    const {notification, onPressRedirectToList} = this.props
    return <View>
      {this.renderNotificationByType(notification, onPressRedirectToList)}
    </View>
  }
}

