import React, {PropTypes} from 'react';
import * as UserActions from '../../redux/user/userActions';
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

  login(data){
    this.props.dispatch(UserActions.login(data))
  },

  render() {
    const {user} = this.props
    console.log('new user', user)
    return (
      <View style={styles.container} >
        <BackHeader
          back={this.back}
        />
        <Header
          title={'Login'}
        />
        <LoginForm
          login={this.login}
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
