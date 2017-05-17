import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';

function ListFooter(search) {

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
        onPress={() => Alert.alert('Subscribe to list goes here')}
        style={styles.ListFooterSettingsContainer}
      >
         <Ionicon style={styles.ListFooterSettings} name={search ? "ios-bookmark-outline":"ios-settings"}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.ListFooterCommentsContainer}
        onPress={() => Alert.alert('View comments here')}
      >
        <EntypoIcon style={styles.ListFooterComments} name='message'/>
      </TouchableOpacity>
    </View>
  );
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
