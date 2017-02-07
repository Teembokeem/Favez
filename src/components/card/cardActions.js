import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

const {PropTypes: NavigationPropTypes} = NavigationExperimental;

const CardActions = React.createClass({
  displayName: 'CardActions',
  propTypes: {
    // tabs: NavigationPropTypes.navigationState.isRequired,
    // height: PropTypes.number.isRequired,
    // currentTabIndex: PropTypes.number.isRequired,
    // switchTab: PropTypes.func.isRequired
  },

  render() {
    return (
      <TouchableOpacity style={[styles.card]}>
          <Text style={[styles.hello]}>Actions</Text>
      </TouchableOpacity>
    );
  }
});

const styles = StyleSheet.create({
  card: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // top: 0,
    // backgroundColor: '#eee',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  hello: {
          textAlign: 'center'
  },
});

export default CardActions;
