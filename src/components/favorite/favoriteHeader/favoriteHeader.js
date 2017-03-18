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
import ContextMenu from '../../../modules/modals/contextMenu/contextMenu';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const FavoriteHeader = React.createClass({

  openFavoriteModal() {
    Actions.FavoriteModal();
  },

  renderModal() {
    return (
      <ContextMenu
        setVisible={this.props.setVisible}
        visible={this.props.visible}
        selectContextItem={this.props.selectContextItem}
      />
    );
  },

  render() {
    const {toggleMenu} = this.props;
    return (
    <View style={[styles.feedNavHeader]}>
      <TouchableOpacity
          style={styles.headerLeftButton}
          onPress={toggleMenu}
      >
          <IoniconIcon style={styles.headerLeftButtonIcon} name='md-list-box'/>
      </TouchableOpacity>
      <View
        style={styles.flexMiddle}
      >

      </View>
      <TouchableOpacity
          style={styles.headerRightButton}
          onPress={() => renderModal()}
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
