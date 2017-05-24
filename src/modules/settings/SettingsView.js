import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  Platform,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import UserActions from '../../redux/user/userActions';
import Header from '../../components/globals/header/header';
import IoniconIcon from 'react-native-vector-icons/Ionicons';

import * as ViewUtils from '../../utils/viewUtil';

class SettingsView extends React.Component {

  componentWillMount() {
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeftButtons}>
          <TouchableOpacity>
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
          <Header title={'Settings'}/>
          <View style={styles.contentContainer}>

            <View style={styles.settingsGroup}>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Discover & Invite People</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Edit Profile</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
              <View style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <View style={styles.settingItemWithLabel}>
                    <Text style={styles.settingItemHintText}>LOCATION</Text>
                    <Text style={styles.settingItemText}>Romania</Text>
                  </View>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </View>
              <View style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Private Profile</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <Switch style={styles.settingItemIcon}/>
                </View>
              </View>
              <View style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Show NSFW</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <Switch style={styles.settingItemIcon}/>
                </View>
              </View>
            </View>

            <View style={styles.settingsGroup}>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Push Notification Settings</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Blocked & Hidden</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsGroup}>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Contact Us</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsGroup}>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Change Password</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Delete Account</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.logoutButtonContainer}>
              <TouchableOpacity style={styles.logoutTextContainer}>
                <Text style={styles.logoutText}>Log out</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingTop: ViewUtils.STATUSBAR_HEIGHT,
    height: ViewUtils.APPBAR_HEIGHT,
    width: ViewUtils.WINDOW_WIDTH
  },
  headerLeftButtons: {
    flex:1,
    paddingLeft: 20,
    alignItems:'flex-start'
  },
  headerLeftButton: {
    alignSelf: 'flex-start'
  },
  headerRightButton: {
    paddingRight: 20,
    alignSelf: 'flex-end'
  },
  headerRightButtons: {
    flex:1,
    alignItems:'flex-end'
  },
  headerButtonIcon: {
    width: 35,
    fontSize: 30,
    marginTop: 10,
    color: '#000000'
  },
  contentContainer: {
    flex:1,
    backgroundColor: '#F4F4F4'
  },
  settingsGroup: {
    borderTopColor: '#EEE',
    borderTopWidth: 0.5,
    marginBottom: 25
  },
  settingItem: {
    backgroundColor:'#FFF',
    borderBottomColor: '#EEE',
    borderBottomWidth: 0.5,
    height: 54,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: ViewUtils.WINDOW_WIDTH
  },
  settingItemWithLabel: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  settingItemContentContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingItemText: {
    fontSize: 18,
    fontFamily: 'Hind-Medium',
  },
  settingItemIconContainer: {
    width:60,
    flexDirection: 'column',
    alignItems:'flex-end',
    marginRight:15
  },
  settingItemIcon: {
    fontSize: 23,
    alignSelf:'flex-end',
    color: '#cccccc'
  },
  settingItemHintText: {
    paddingTop:4,
    fontSize:12,
    fontWeight: 'bold',
    color: '#AAA'
  },
  deleteAccountText: {
    color: '#FF0000'
  },
  logoutButtonContainer: {
    flex:1,
    marginBottom:20
  },
  logoutTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Hind-Medium',
    color: '#888'
  }
});

export default SettingsView;
