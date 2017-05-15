import React from 'react';
import {Actions} from 'react-native-router-flux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
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
    const {self, followedUser} = this.props;
    let followUnfollowStyle = followedUser ? styles.redButton: styles.blueButton;
    return (
    <View style={styles.ProfileActionsContainer}>
        <TouchableOpacity
          style={[styles.ProfileActionsButton1, followUnfollowStyle]}
          onPress={self?Actions.editProfile: null}
        >
          <SimpleLineIcon style={styles.ProfileActionsButton1Icon} name={self ? 'pencil' : 'user-follow'} />
          <Text style={styles.ProfileActionsButton1Text}>{self ? 'EDIT PROFILE' : followedUser ? 'UNFOLLOW':'FOLLOW'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={self?Actions.invitePeople: null}
          style={styles.ProfileActionsButton2}>
          <SimpleLineIcon style={styles.ProfileActionsButton2Icon} name={self?'notebook':'envelope-letter'} />
          <Text style={styles.ProfileActionsButton2Text}>{self ? ' INVITE FRIENDS' : 'INVITE TO COLLAB'}</Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  ProfileActionsButton1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: '#0076ff'
  },
  ProfileActionsButton1Icon: {
    fontSize: 15,
    margin:5,
    color: 'white'
  },
  ProfileActionsButton1Text: {
    fontFamily: 'Hind-Bold',
    fontSize: 14,
    marginLeft:5,
    color: 'white'
  },
  ProfileActionsButton2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    justifyContent: 'center',
    padding: 5,
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: 'black'
  },
  ProfileActionsButton2Icon: {
    fontSize: 15,
    margin:5,
    color: 'white'
  },
  ProfileActionsButton2Text: {
    fontFamily: 'Hind-Bold',
    fontSize: 14,
    marginLeft:5,
    color: 'white'
  },
  redButton: {
    backgroundColor: '#CC0000'
  },
  blueButton: {
    backgroundColor: '#0076ff'
  }
});

export default ProfileActions;
