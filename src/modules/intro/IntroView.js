import React, {PropTypes} from 'react';
import * as IntroState from './IntroState';
// import {showLogin} from '../../../services/auth0';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const IntroView = React.createClass({

  introMove(state) {
    return Actions[state]()
  },

  render() {

    return (
      <View style={styles.container}>
        <Button title='SIGN IN' onPress={() => this.introMove('login')}/>
        <Button title='BECOME A FAVER' onPress={() => this.introMove('register')} />
        <Button title='SKIP FOR NOW' onPress={() => this.introMove('tabbar')} />
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
