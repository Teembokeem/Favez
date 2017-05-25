import React from 'react';
import {Actions} from 'react-native-router-flux';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 0;

const renderIf = condition => element => condition ? element : null;

const ProfileHeader = React.createClass({

  openFavoriteModal() {
    Actions.FavoriteModal();
  },

  render() {
    return (
    <View style={[styles.ProfileHeader]}>
        <View style={styles.flex1}>
          {renderIf(!this.props.self)(
            <TouchableOpacity
                style={styles.headerLeftButton}
                onPress={() => Actions.pop()}>
                <IoniconIcon style={styles.headerButtonIcon} name='md-arrow-round-back'/>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.flex2}>
          {renderIf(this.props.self)(
            <TouchableOpacity
                onPress={() => Actions.userSettings()}
                style={styles.headerRightButton} >
                <IoniconIcon style={styles.headerButtonIcon} name="ios-settings"/>
            </TouchableOpacity>
          )}          
        </View>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  ProfileHeader: {
    backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',
    elevation: 4,
    width: 375,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT
  },
  flex1: {
    flex: 1,
    paddingLeft: 20,
    alignItems: 'flex-start'
  },
  flex2: {
    flex: 1,
    paddingRight: 20,
    alignItems: 'flex-end'
  },
  headerLeftButton: {
    alignSelf: 'flex-start'
  },
  headerRightButton: {
    alignSelf: 'flex-end'
  },
  headerButtonIcon: {
    height: 35,
    width: 35,
    fontSize: 30,
    color: '#000000'
  },
  placeHolder: {
    marginLeft: 20
  }

});

export default ProfileHeader;
