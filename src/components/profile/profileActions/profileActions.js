import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const ProfileActions = React.createClass({

  openFavoriteModal() {
    Actions.FavoriteModal();
  },

  render() {
    return (
    <View style={styles.ProfileActionsContainer}>
        <TouchableOpacity style={styles.ProfileActionsButton1}>
          <Text>{'icon here'}</Text>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileActionsButton2}>
          <Text>{'icon here'}</Text>
          <Text></Text>
        </TouchableOpacity>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  ProfileActionsContainer: {
    // alignItems: 'center',
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    elevation: 4,
    // flex: 1,
    width: 375,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flex1: {
    height: 35,
    flex: 1,
    paddingLeft: 20
  },
  headerLeftButtonIcon: {
    width: 35,
    fontSize: 30,
    color: '#000000',
    alignSelf: 'flex-start'
  },
  flex2: {
    flex: 1,
    paddingRight: 20
  },
  headerRightButtonIcon: {
    height: 35,
    width: 35,
    fontSize: 25,
    // top: 30,
    // margin: 10,
    color: '#000000',
    alignSelf: 'flex-end'
  },
  placeHolder: {
    marginLeft: 20
  }

});

export default ProfileActions;
