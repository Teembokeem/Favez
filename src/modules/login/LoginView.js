import React, {PropTypes} from 'react';
import * as LoginState from './LoginState';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import BackHeader from '../../components/globals/backHeader/backHeader';
import Header from '../../components/globals/header/header';
import LoginForm from '../../components/login/loginForm/loginForm';


const LoginView = React.createClass({

  back() {
    Actions.pop();
  },

  render() {
    return (
      <View style={styles.container} >
        <BackHeader
          back={this.back}
        />
        <Header
          title={'Login'}
        />
        <LoginForm
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#f9f9f9',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  }
});

export default LoginView;
