import React, {PropTypes} from 'react';
import * as IntroState from './IntroState';
import * as auth0 from '../../services/auth0';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const IntroView = React.createClass({
   componentWillMount() {
    console.log('ok')
          // auth0.showLogin();
     
  },

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
