import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
        <ScrollView
          contentContainerStyle={styles.container}>
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
    marginBottom: 30
  },
  settingItem: {
    backgroundColor:'#FFF',
    borderBottomColor: '#EEE',
    borderBottomWidth: 0.5,
    height: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: ViewUtils.WINDOW_WIDTH
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
    width:30,
    flexDirection: 'row',
    alignItems:'center',
  },
  settingItemIcon: {
    fontSize: 23,
    color: '#cccccc'
  }
});

export default SettingsView;
