import React from 'react';
import {Actions} from 'react-native-router-flux';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 15 : 20;

const SearchHeaderIcons = React.createClass({



  render() {

    return (
    <View style={[styles.feedNavHeader]}>
      <TouchableOpacity
          style={styles.headerLeftButton}
      >
          <IoniconIcon style={styles.headerLeftButtonIcon} name='md-list-box'/>
      </TouchableOpacity>
      <View style={styles.flexMiddle} />
      <TouchableOpacity
          style={styles.headerRightButton}
      >
          <IoniconIcon style={styles.headerRightButtonIcon} name='ios-more'/>
      </TouchableOpacity>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  feedNavHeader: {

    elevation: 4,
    width: 375,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: APPBAR_HEIGHT
  },
  headerLeftButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  flexMiddle: {
    flex: 6
  },
  headerLeftButtonIcon: {
    fontSize: 25,
    color: '#fff'
  },
  headerRightButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  headerRightButtonIcon: {
    fontSize: 25,
    color: '#fff',
  }
});

export default SearchHeaderIcons;
