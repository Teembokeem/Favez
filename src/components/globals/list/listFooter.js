import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

function ListFooter() {

  return (
     <View
      style={styles.ListFooterContainer}
     >
        <View
          style={styles.ListFooterShareContainer}
        >
          <EntypoIcon style={styles.ListFooterShare} name='share'/>
        </View>
        <View
          style={styles.ListFooterSettingsContainer}
        >
          <Ionicon style={styles.ListFooterSettings} name='ios-settings'/>
        </View>
        <View
          style={styles.ListFooterCommentsContainer}
        >
          <EntypoIcon style={styles.ListFooterComments} name='message'/>
        </View>
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
