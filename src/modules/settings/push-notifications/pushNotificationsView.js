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

class PushNotificationsView extends React.Component {

  componentWillMount() {

  }

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

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView>
          <Header title={'PUSH \nNOTIFICATIONS'}/>
          <View style={styles.contentContainer}>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("Enable")}
            </View>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("Announcements","Special announcements from favez")}
              {this.renderSettingItem("Recommendations","Lists we think you'd like")}
            </View>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("New Follower","When someone starts following you")}
              {this.renderSettingItem("Follow request (private profile)","When someone requests to following you")}
              {this.renderSettingItem("Accepted follow request","When someone accepts your request")}
              {this.renderSettingItem("Friends on favez","When a contact or fb friends joins favez")}
              {this.renderSettingItem("New friend list","When someone you follow makes a list")}
            </View>

            <View style={styles.settingsGroup}>
              {this.renderSettingItem("New list follower","When someone follows a list by you")}
              {this.renderSettingItem("Collaboration invitation","When someone invites you to collab")}
              {this.renderSettingItem("Collaboration response","When someone accepts your invitation")}
              {this.renderSettingItem("New comment","When someone comments in your list")}
              {this.renderSettingItem("Mentions & replies","When someone mentions you or replies")}
            </View>

          </View>
        </ ScrollView>
      </View>
    );
  }

  renderSettingItem(title, description) {

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
          <Switch style={styles.switchStyle} />
        </View>
      </View>
    )

  }

}

export default PushNotificationsView;
