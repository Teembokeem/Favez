import React from 'react';
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ActionSheetIOS
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;


const SearchHeader = React.createClass({
  render() {
    console.log(this.props)
    return (
    <View style={[styles.createListNavHeader]}>
        <TouchableOpacity
            style={styles.headerRightButton}
            onPress={Actions.pop}
        >
          <Text
            style={styles.headerText}
          >Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  createListNavHeader: {
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT
  },
  headerText: {
    fontFamily: 'Hind-Medium',
    fontSize: 18
  }

});

export default SearchHeader;
