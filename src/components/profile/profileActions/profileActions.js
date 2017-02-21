import React from 'react';
import {Actions} from 'react-native-router-flux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
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
    const self = this.props.self;
    return (
    <View style={styles.ProfileActionsContainer}>
        <TouchableOpacity style={styles.ProfileActionsButton1}>
          <EvilIcon style={styles.ProfileActionsButton1Icon} name='pencil' />
          <Text style={styles.ProfileActionsButton1Text}>{self ? 'EDIT PROFILE' : 'FOLLOW'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileActionsButton2}>
          <FAIcon style={styles.ProfileActionsButton2Icon} name='address-book-o' />
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
    fontSize: 30,
    color: 'white'
  },
  ProfileActionsButton1Text: {
    fontFamily: 'Hind-Bold',
    fontSize: 14,
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
    fontSize: 20,
    color: 'white'
  },
  ProfileActionsButton2Text: {
    fontFamily: 'Hind-Bold',
    fontSize: 14,
    color: 'white'
  }

});

export default ProfileActions;
