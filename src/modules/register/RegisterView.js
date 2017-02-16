import React, {PropTypes} from 'react';
import * as RegisterState from './RegisterState';
import HeaderBack from '../../components/globals/headerBack/headerBack';
import Register from '../../components/register/register';

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
        <HeaderBack back={this.back} />
        <Register />
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

export default RegisterView;
