import React from 'react';
import {Actions} from 'react-native-router-flux';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 0;

const TopicsSelectorHeader = React.createClass({
  render() {
    return (
    <View style={[styles.TopicsSelectorHeader]}>
        <View
          style={styles.flex1}
        >
          <TouchableOpacity
            onPress={Actions.pop}
              style={styles.headerLeftButton}
          >
            <IoniconIcon style={styles.headerLeftButtonIcon}name='md-arrow-round-back'/>
          </TouchableOpacity>
        </View>
        <View
          style={styles.flex2}
        >
          <TouchableOpacity
              style={styles.headerRightButton}
          >
          </TouchableOpacity>
        </View>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  TopicsSelectorHeader: {
    backgroundColor: 'transparent',
    width: 375,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: STATUSBAR_HEIGHT,
    maxHeight: APPBAR_HEIGHT + 10
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
    color: '#000000',
    alignSelf: 'flex-end'
  }

});

export default TopicsSelectorHeader;
