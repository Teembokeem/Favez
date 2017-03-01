import React from 'react';
import {Actions} from 'react-native-router-flux'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  NavigationExperimental,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  ActionSheetIOS
} from 'react-native';
import ContextMenu from '../../../modules/modals/contextMenu/contextMenu';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const ACTION_BUTTONS = [
  'Create New List',
  'Add fave from clipboard link',
  'Add fave from website',
  'Discover fave by topic',
  'Cancel'
];

const CANCEL_INDEX = 4;

const SearchHeader = React.createClass({

  openActionSheet() {
    // Actions.contextMenu({hello: 'hi'});
    ActionSheetIOS.showActionSheetWithOptions({
      options: ACTION_BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
    },
    (buttonIndex) => {
        if ( buttonIndex == 0 ) Actions.contextMenu({hello: 'hi'});
        if ( buttonIndex == 1 ) console.log('hi 1', buttonIndex);
        if ( buttonIndex == 2 ) console.log('hi 2', buttonIndex);
        if ( buttonIndex == 3 ) console.log('hi 3', buttonIndex);
        if ( buttonIndex == 4 ) console.log('hi 4', buttonIndex);


    //   this.setState({ clicked: ACTION_BUTTONS[buttonIndex] });
    });
  },
  openSearchModal() {
    Actions.searchModal();
  },
  renderModal() {

  },

  render() {
    console.log(this.props)
    return (
    <View style={[styles.feedNavHeader]}>
        <TouchableOpacity
            style={styles.headerLeftButton}
        >
            <IoniconIcon style={styles.headerLeftButtonIcon} name="md-list-box"/>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={this.openSearchModal}
            style={styles.headerSearchBar}
        >
            <FontAwesomeIcon style={styles.searchBarIcon} name="search"/>

        </TouchableOpacity>
        <TouchableOpacity
            style={styles.headerRightButton}
            onPress={() => this.props.setVisible()}
        >
            <EntypoIcon style={styles.headerRightButtonIcon} name="plus"/>
        </TouchableOpacity>
        <ContextMenu
            setVisible={this.props.setVisible}
            visible={this.props.visible}
        />
    </View>
    );
  }
});

const styles = StyleSheet.create({
    feedNavHeader: {
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',
        // borderBottomColor: 'rgba(0, 0, 0, .15)',
        // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
        elevation: 4,
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
        color: "#000000",
        alignSelf: 'center',
        justifyContent: 'center'
    },
    headerRightButtonIcon: {
        height: 35, 
        width: 35,
        fontSize: 35,
        marginLeft: 10,
        // margin: 10,
        color: "#000000",
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
        // textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        height: 35,
        // fontFamily: 'Hind-Medium'
    },
    searchBarIcon: {
        height: 24,
        fontSize: 20,
        // position: 'absolute',
        left: 0,
        color: "#a9a9a9",
        alignSelf: 'flex-start',
        margin: 5
    },
    placeHolder: {
        marginLeft: 20,
    }

});

export default SearchHeader;
