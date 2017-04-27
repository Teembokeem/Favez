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
  return (
    <TouchableOpacity
      style={styles.InvitationContainer}
    >
      <View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  InvitationContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    width: 375,
    paddingLeft: 15,
    paddingRight: 15,
    height: 75,
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: '#d8d8d8'
  }
});

export default Invitation;
