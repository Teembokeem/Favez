import React, {PropTypes} from 'react';
import * as LoginState from './LoginState';
import HeaderBack from '../../components/globals/headerBack/headerBack';
import Form from '../../components/login/login';
import {
  Text,
  View,
  ListView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const LoginView = React.createClass({

  back() {
    Actions.pop()
  },

  render() {
    const {user} = this.props
    return (
      <View >
        <HeaderBack back={this.back} />
        <Form
        
        />
      </View>
    );
  }
});

export default LoginView;
