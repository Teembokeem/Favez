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

const FavoriteHeader = React.createClass({

  openFavoriteModal() {
    Actions.FavoriteModal();
  },

  render() {
    const {toggleContextMenu, toggleMenu} = this.props;
    return (
    <View style={[styles.feedNavHeader]}>
      <TouchableOpacity
          style={styles.headerLeftButton}
          onPress={toggleMenu}
      >
          <IoniconIcon style={styles.headerLeftButtonIcon} name='md-list-box'/>
      </TouchableOpacity>
      <View style={styles.flexMiddle} />
      <TouchableOpacity
          style={styles.headerRightButton}
          onPress={() => toggleContextMenu('header')}
      >
          <EntypoIcon style={styles.headerRightButtonIcon} name='plus'/>
      </TouchableOpacity>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  feedNavHeader: {
    backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',
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
    fontSize: 30,
    color: '#000000'
  },
  headerRightButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  headerRightButtonIcon: {
    fontSize: 35,
    color: '#000000'
  }
});

export default FavoriteHeader;
