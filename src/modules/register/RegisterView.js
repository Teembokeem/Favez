import React from 'react';
import * as RegisterState from './RegisterState';
import BackHeader from '../../components/globals/backHeader/backHeader';
import Header from '../../components/globals/header/header';
import RegisterForm from '../../components/register/registerForm/registerForm';

import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const RegisterView = React.createClass({
  back() {
    Actions.pop()
  },

  render() {
    return (
      <View style={styles.container} >
         <BackHeader
          back={this.back}
        />
        <Header
          title={'Register'}
        />
        <RegisterForm
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

export default RegisterView;
