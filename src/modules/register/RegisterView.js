import React from 'react';
import * as UserActions from '../../redux/user/userActions';
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

  register(data) {
    this.props.dispatch(UserActions.register(data))
  },

  render() {
    return (
      <View style={styles.container} >
         <BackHeader
          back={Actions.pop}
        />
        <Header
          title={'Register'}
        />
        <RegisterForm
          register={this.register}
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
