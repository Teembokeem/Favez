import React, {PropTypes} from 'react';
import * as LoginState from './LoginState';
import HeaderBack from '../../components/globals/headerBack/headerBack';
import Login from '../../components/login/login';
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
    console.log('this is user', user)
    return (
      <View style={styles.container} >
        <HeaderBack back={this.back} />
        {/*<Login
          user={user}
        />*/}
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

export default LoginView;
