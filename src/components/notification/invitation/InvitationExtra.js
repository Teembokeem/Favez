import React from 'react'
import {
  View, Text, Image, TouchableOpacity, StyleSheet
} from 'react-native'
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function InvitationExtra(notification) {
  if (notification.type === 'invitation_request') {
    return (
      <View>
        <View>
          <Text>{'Hey man, let\'s make a great list toegether.'}</Text>
        </View>
        <View>
          <View>
            <Image style={styles.NotificationFromUser} source={{uri: notification.body.list_ref.picture}}/>
          </View>
          <View>
            <FAIcon name='lock'/>
          </View>
          <View>
            <Text>{notification.body.list_ref.name.toUpperCase()}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <FAIcon name='close'/>
            <Text>{'Reject'}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FAIcon name='check'/>
            <Text>{'Accept'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  
})
