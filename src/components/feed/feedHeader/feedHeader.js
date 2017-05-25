import React from 'react';
import {Actions} from 'react-native-router-flux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity
//   [1a]
//   ActionSheetIOS
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

// [1a]
// const ACTION_BUTTONS = [
//   'Create New List',
//   'Add fave from clipboard link',
//   'Add fave from website',
//   'Discover fave by topic',
//   'Cancel'
// ];

const FeedHeader = React.createClass({

// [1a] Currently not used, but will be useful for accessing bottom action tray on certain views.
// Please consult the Marvelapp.
//
//   openActionSheet() {
//     ActionSheetIOS.showActionSheetWithOptions(
//       {
//         options: ACTION_BUTTONS,
//         cancelButtonIndex: CANCEL_INDEX
//       },
//       (buttonIndex) => {
//         switch (buttonIndex) {
//           case 0:
//             return Actions.contextMenu({hello: 'hi'});
//           default:
//         }
//       }
//     );
//   },

  render() {
    const {user} = this.props
    return (
      <View style={[styles.feedNavHeader]}>
          <TouchableOpacity
            style={styles.headerLeftButton}
            onPress={Actions.ManageFeedList}
          >
            <IoniconIcon style={styles.headerLeftButtonIcon}  name='md-list-box'/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={Actions.searchModal}
            style={styles.headerSearchBar}
          >
            <FontAwesomeIcon style={styles.searchBarIcon} name='search'/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerRightButton}
            onPress={() => user.favez ? this.props.toggleContextMenu() : Actions.intro()}
          >
            <EntypoIcon style={styles.headerRightButtonIcon} name='plus'/>
          </TouchableOpacity>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  feedNavHeader: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT * 2
  },
  headerLeftButtonIcon: {
    height: 35,
    width: 35,
    fontSize: 30,
    marginLeft: 10,
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  headerRightButtonIcon: {
    height: 35,
    width: 35,
    fontSize: 35,
    marginLeft: 10,
    color: '#000000',
    alignSelf: 'center'
  },
  headerSearchBar: {
    width: 240,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    paddingRight: 20,
    backgroundColor: '#f8f8f6',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    height: 35
  },
  searchBarIcon: {
    height: 24,
    fontSize: 20,
    color: '#a9a9a9',
    alignSelf: 'flex-start',
    margin: 5
  }

});

export default FeedHeader;
