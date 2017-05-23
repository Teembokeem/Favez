import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

function ListFooter({ListId, onUserAction, userActionData}) {


  return (
     <View
      style={styles.ListFooterContainer}
     >
      <TouchableOpacity
        style={styles.ListFooterShareContainer}
        onPress={() => Alert.alert('Share dialog goes here')}
      >
        <EntypoIcon style={styles.ListFooterShare} name='share'/>
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => onUserAction() }
        style={styles.ListFooterSettingsContainer}
      >
        {renderUserActionIcon()}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ListFooterCommentsContainer}
        onPress={Actions.listComments}
      >
        <EntypoIcon style={styles.ListFooterComments} name='message'/>
      </TouchableOpacity>
    </View>
  );

  function renderUserActionIcon() {

    switch(userActionData.type) {
      case "subscribe_unsubscribe":
        return (
          <Ionicon style={styles.ListFooterSettings}
            name={userActionData.data ? "ios-bookmark" : "ios-bookmark-outline"}/>
        )
      case "user_collabs":
        break;
      case "edit_list":
        return (
          <Ionicon style={styles.ListFooterSettings} name={"ios-settings"}/>
        )
    }

  }
}

const styles = StyleSheet.create({
  ListFooterContainer: {
    paddingTop: 15,
    flex: 1,
    flexDirection: 'row'
  },
  ListFooterShareContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  ListFooterShare: {
    color: 'white',
    fontSize: 25
  },
  ListFooterSettingsContainer: {
    flex: 1,
    alignItems: 'center'
  },
  ListFooterSettings: {
    color: 'white',
    fontSize: 25

  },
  ListFooterCommentsContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  ListFooterComments: {
    color: 'white',
    fontSize: 25

  }
});

export default ListFooter;
