import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 0;
const window = Dimensions.get('window');

const SearchCollaboratorsSearchBar = React.createClass({

  render() {
    console.log(this.props);
    return (
    <View style={styles.headerContainer}>
      <View style={styles.SearchBarBox}>
        <View style={styles.SearchBarContainer} />
        <TextInput placeholder={'Type a user\'s name'} style={styles.SearchBar}/>
        <FAIcon style={styles.overlayIcon} name='search'/>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.bar} />
      </View>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // flex: 1,
    minHeight: 90,
    width: window.width,
    // position: 'relative',
    paddingBottom: 20
  },
  SearchBarBox: {
    flex: 1,
    width: window.width
  },
  SearchBarContainer: {
    // maxHeight: 40,
    backgroundColor: '#f8f8f6',
    width: .85 * window.width,
    borderRadius: 10,
    height: 40,
    left: .075 * window.width,
    position: 'absolute'
  },
  SearchBar: {
    flex: 1,
    maxHeight: 40,
    width: .9 * window.width,
    borderRadius: 10,
    paddingLeft: 64
  },
  overlayIcon: {
    position: 'absolute',
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 39,
    color: '#a8a8a8',
    backgroundColor: 'transparent'
  },
  barContainer: {
    paddingTop: 20,
    alignSelf: 'flex-start',
    paddingLeft: .075 * window.width
  },
  bar: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    height: 8,
    width: 60
  }
});

export default SearchCollaboratorsSearchBar;
