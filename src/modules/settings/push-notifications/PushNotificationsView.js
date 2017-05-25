import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch
} from 'react-native';
import styles from '../styles';
import Header from '../../../components/globals/header/header';
import IoniconIcon from 'react-native-vector-icons/Ionicons';

import * as Utils from '../../../utils/Utils';
import * as UserActions from '../../../redux/user/userActions';

class PushNotificationsView extends React.Component {

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeftButtons}>
          <TouchableOpacity onPress={Actions.pop}>
            <IoniconIcon style={styles.headerButtonIcon} name='md-arrow-round-back'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {

    const {notificationSettings} = this.props;
    console.log('PUSH_NOTIFICATIONS_SETTINGS', Utils.toJS(notificationSettings));

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView>
          <Header title={'PUSH \nNOTIFICATIONS'}/>
          <View style={styles.contentContainer}>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("Enable", "", "enable")}
            </View>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("Announcements","Special announcements from favez", "announcements")}
              {this.renderSettingItem("Recommendations","Lists we think you'd like", "reccomendations")}
            </View>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("New Follower","When someone starts following you", "newFollower")}
              {this.renderSettingItem("Follow request (private profile)","When someone requests to following you", "followRequest")}
              {this.renderSettingItem("Accepted follow request","When someone accepts your request", "acceptedFollowRequest")}
              {this.renderSettingItem("Friends on favez","When a contact or fb friends joins favez", "friendsOnFavez")}
              {this.renderSettingItem("New friend list","When someone you follow makes a list", "newFriendList")}
            </View>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("New list follower","When someone follows a list by you", "newListFollower")}
              {this.renderSettingItem("Collaboration invitation","When someone invites you to collab", "collaborationInvitation")}
              {this.renderSettingItem("Collaboration response","When someone accepts your invitation", "collaborationResponse")}
              {this.renderSettingItem("New comment","When someone comments in your list", "newComment")}
              {this.renderSettingItem("Mentions & replies","When someone mentions you or replies", "mentionsAndReplies")}
            </View>

          </View>
        </ ScrollView>
      </View>
    );
  }

  togglePushNotificationsSetting(settingId) {
    console.log('togglePushNotificationsSetting request....', settingId);
    this.props.dispatch(UserActions.togglePushNotificationsSetting(settingId));
  }

  renderSettingItem(title, description, key) {

    const {notificationSettings} = this.props;
    let settingValue = Utils.toJS(notificationSettings)[key];

    return (
      <View style={styles.settingItem}>
        <View style={styles.settingItemContentContainer}>
          {(!description) ? (
            <Text style={styles.settingItemText}>{title}</Text>
          ) : (
            <View style={styles.settingItemWithLabel}>
              <Text style={styles.settingItemText}>{title}</Text>
              <Text style={styles.settingItemHintText}>{description}</Text>
            </View>
          )}
        </View>
        <View style={styles.settingItemIconContainer}>
          <Switch style={styles.switchStyle}
            onValueChange={() => this.togglePushNotificationsSetting(key)} value={settingValue} />
        </View>
      </View>
    )

  }

}

export default PushNotificationsView;
