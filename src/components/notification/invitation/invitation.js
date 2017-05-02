import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

function Invitation({invitation}) {
  console.log('my invitation!', invitation);
  const {created, description, id, name, owner, user} = invitation;
  return (
    <View
      style={styles.InvitationContainer}
    >
      <View style={styles.InviteeContainer}>
        <View style={styles.InviteeAvatarContainer}>
          <Image style={styles.InviteeAvatar} source={user[0].f3 ? {uri: user[0].f3} : require('../../../../images/default_avatar.png')}/>
        </View>
        <View style={styles.InviteeTextContainer}>
          <Text>@{owner}</Text>
          <Text>has invited you to collaborate</Text>
          <Text>{created}</Text>
        </View>
      </View>
      <View style={styles.CommentContainer}>
        {/*TODO WHERE IS A SPOT FOR SENDING A MESSAGE*/}
      </View>
      <View style={styles.ListInfoContainer}>
        <View style={styles.ListInfoImageContainer}>
          <Image style={styles.ListImage} source={invitation._favez ? {uri: invitation._favez[0].image} : require('../../../../images/default_list_picture.png')}/>
        </View>
        <View style={styles.ListInfoTextContainer}>
          <Text>Lock Icon</Text>
          <Text>{name}</Text>
        </View>
      </View>
      <View style={styles.ActionContainer}>
        <View style={styles.rejectButtonContainer}>
          <TouchableOpacity>
            <Text>X</Text>
            <Text>Reject</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.acceptButtonContainer}>
            <TouchableOpacity>
              <Text>check</Text>
              <Text>Accept</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InvitationContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    // width: 375,
    paddingLeft: 15,
    paddingRight: 15,
    // height: 75,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#d8d8d8'
  }
});

export default Invitation;
