import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const window = Dimensions.get('window');

const SearchHeader = React.createClass({

  render() {
    return (
    <View style={[styles.feedNavHeader]}>
        <TouchableOpacity
            style={styles.headerLeftButton}
        >
            {/*<IoniconIcon style={styles.headerLeftButtonIcon} name="md-list-box"/>*/}
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.headerSearchBar}
        >
            {/*<FontAwesomeIcon style={styles.searchBarIcon} name="search"/>*/}

        </TouchableOpacity>
        <TouchableOpacity
            style={styles.headerRightButton}
            onPress={Actions.pop}
        >
          <Text style={styles.headerRightCancel}>Cancel</Text>
        </TouchableOpacity>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  feedNavHeader: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: window.width,
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    // paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT
  },
  headerLeftButton: {
    flex: 1
  },
  headerSearchBar: {
    // width: 240,
    // marginLeft: 20,
    // marginRight: 20,
    // paddingLeft: 5,
    // paddingRight: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    height: 35,
    flex: 5
  },
  headerRightButton: {
    flex: 1
  },
  headerRightCancel: {
    fontFamily: 'Hind-Medium',
    fontSize: 17
  }

});

export default SearchHeader;
