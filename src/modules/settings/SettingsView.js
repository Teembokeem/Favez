import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Linking,
  Platform,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';
import Header from '../../components/globals/header/header';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import CountryPicker from '../../components/globals/pickers/countryPicker/countryPicker';

import * as Utils from '../../utils/Utils';
import * as EmailUtils from '../../utils/emailUtils';
import * as UserActions from '../../redux/user/userActions';
import * as UiActions from '../../redux/ui/uiActions';

class SettingsView extends React.Component {

  componentWillMount() {
    this.handleUserAuth();
  }

  componentDidUpdate() {
    this.handleUserAuth();
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

  toggleNSFW() {
    this.props.dispatch(UserActions.toggleNSFWSetting());
  }

  togglePrivate() {
    this.props.dispatch(UserActions.togglePrivateSetting());
  }

  onChangeCountry(country) {
    this.props.dispatch(UserActions.saveLocation({country}));
  }

  setCountryPickerVisibility(toggleState) {
    this.props.dispatch(UiActions.setPickerVisibility('countryPicker', toggleState));
  }

  requestLogout() {
    this.props.dispatch(UserActions.logout());
  }

  render() {

    const {user, settings, countryPicker, location} = this.props;
    const loggedUser = user && user.auth0 ? user.favez : null;
    const {nsfw, priv} = Utils.toJS(settings);
    const {set: countries, visible: countryPickerVisibility} = Utils.toJS(countryPicker);
    const selectedCountry = Utils.toJS(location).country;

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView>
          <Header title={'Settings'}/>
          <View style={styles.contentContainer}>

            <View style={styles.settingsGroup}>
              <TouchableOpacity
                onPress={() => Actions.invitePeople()}
                style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Discover & Invite People</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Actions.editProfile()}
                style={styles.settingItem}>
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
                    <Text style={styles.settingItemLabel}>LOCATION</Text>
                    {(Platform.OS == 'ios')? (
                      <Text onPress={() => this.setCountryPickerVisibility(true)} style={styles.settingItemText}>
                        {selectedCountry ? Utils.getCountryByCode(selectedCountry, countries):'Select Location'}
                      </Text>
                    ): null}
                    <CountryPicker
                      style={styles.countryPicker}
                      countries={countries}
                      onChangeCountry={this.onChangeCountry.bind(this)}
                      selectedCountry={selectedCountry}
                      visible={countryPickerVisibility}
                      open={() => this.setCountryPickerVisibility(true)}
                      close={() => this.setCountryPickerVisibility(false)} />
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
                  <Switch style={styles.switchStyle} onValueChange={this.togglePrivate.bind(this)} value={priv}/>
                </View>
              </View>
              <View style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Show NSFW</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <Switch style={styles.switchStyle} onValueChange={this.toggleNSFW.bind(this)} value={nsfw}/>
                </View>
              </View>
            </View>

            <View style={styles.settingsGroup}>
              <TouchableOpacity
                onPress={() => Actions.pushNotifications()}
                style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Push Notification Settings</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Actions.ManageBlock()}
                style={styles.settingItem}>
                <View style={styles.settingItemContentContainer}>
                  <Text style={styles.settingItemText}>Blocked & Hidden</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.settingsGroup}>
              <TouchableOpacity onPress={this.sendMail} style={styles.settingItem}>
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
                  <Text style={[styles.settingItemText, styles.deleteAccountText]}>Delete Account</Text>
                </View>
                <View style={styles.settingItemIconContainer}>
                  <IoniconIcon style={styles.settingItemIcon} name='md-arrow-forward'/>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.logoutButtonContainer}>
              <TouchableOpacity onPress={() => this.requestLogout()} style={styles.logoutTextContainer}>
                <Text style={styles.logoutText}>Log out</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ ScrollView>
      </View>
    );
  }

  sendMail() {

    EmailUtils.requestSendMail().catch(err => console.error('An error occurred', err));
  }

  handleUserAuth() {
    if (Object.keys(Utils.toJS(this.props.user)).length == 0) Actions.intro();
  }

}

export default SettingsView;
