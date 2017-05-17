import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 0;
const window = Dimensions.get('window');

const AddCollaboratorsHeader = React.createClass({

  render() {
    const {search} = this.props;
    return (
    <View style={styles.headerContainer}>
        <TouchableOpacity
            style={styles.headerLeftButton}
            onPress={Actions.pop}
        >
            <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back' />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.headerCenter}
        />
        <TouchableOpacity
            style={styles.headerRightButton}
        >
          <FAIcon style={styles.headerRightIcon} name='address-book'/>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.headerRightButton}
            onPress={search}
        >
          <FAIcon style={styles.headerRightIcon} name='search'/>
        </TouchableOpacity>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: window.width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT
  },
  headerLeftButton: {
    flex: 1
  },
  headerLeftButtonIcon: {
    // width: 35,
    fontSize: 30,
    color: '#000000',
    alignSelf: 'center'
  },
  headerCenter: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    height: 35,
    flex: 5
  },
  headerRightButton: {
    flex: 1,
    alignItems: 'center'
  },
  headerRightIcon: {
    // width: 35,
    fontSize: 25,
    color: '#000000'
  },
  headerRightCancel: {
    fontFamily: 'Hind-Medium',
    fontSize: 17
  }

});

export default AddCollaboratorsHeader;
