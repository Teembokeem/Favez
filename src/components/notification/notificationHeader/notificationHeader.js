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
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 0;

const FavoriteHeader = React.createClass({

  openFavoriteModal() {
    Actions.FavoriteModal();
  },

  render() {
    return (
    <View style={[styles.feedNavHeader]}>
        <View
          style={styles.flex1}
        >
        </View>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  feedNavHeader: {
    // alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    elevation: 4,
    // flex: 1,
    width: 375,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT
  },
  flex1: {
    height: 35,
    flex: 1,
    paddingLeft: 20
  },
  headerLeftButtonIcon: {
    width: 35,
    fontSize: 30,
    color: '#000000',
    alignSelf: 'flex-start'
  },
  flex2: {
    flex: 1,
    paddingRight: 20
  },
  headerRightButtonIcon: {
    height: 35,
    width: 35,
    fontSize: 35,
    // top: 30,
    // margin: 10,
    color: '#000000',
    alignSelf: 'flex-end'
  },
  placeHolder: {
    marginLeft: 20
  }

});

export default FavoriteHeader;
