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

const SearchHeaderIcons = React.createClass({

  render() {
    const {showTopics} = this.props
    return (
    <View style={[styles.feedNavHeader]}>
      <TouchableOpacity
          style={styles.headerLeftButton}
          onPress={() => showTopics()}
      >
          <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back'/>
      </TouchableOpacity>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  feedNavHeader: {

    elevation: 4,
    width: 375,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: APPBAR_HEIGHT
  },
  headerLeftButton: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start'
  },
  flexMiddle: {
    flex: 6
  },
  headerLeftButtonIcon: {
    fontSize: 25,
    color: '#fff'
  },
  headerRightButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  headerRightButtonIcon: {
    fontSize: 25,
    color: '#fff',
  }
});

export default SearchHeaderIcons;
