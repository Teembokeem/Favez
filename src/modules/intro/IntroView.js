import React, {PropTypes} from 'react';
import * as IntroState from './IntroState';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';


/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
const IntroView = React.createClass({


  render() {

    return (
      <View style={styles.container}>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  }
});

export default IntroView;
