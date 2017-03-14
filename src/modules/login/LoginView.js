import React, {PropTypes} from 'react';
import * as UserActions from '../../redux/user/userActions';
import {
  View,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import BackHeader from '../../components/globals/backHeader/backHeader';
import Header from '../../components/globals/header/header';
import LoginForm from '../../components/login/loginForm/loginForm';


const LoginView = React.createClass({

  login(data) {
    this.props.dispatch(UserActions.login(data));
  },

  componentDidUpdate() {
    const {user} = this.props;
    if (user.email) Actions.tabbar();
  },

  render() {
    const {user} = this.props;
    console.log('new user', user);
    return (
      <View style={styles.container} >
        <BackHeader
          back={Actions.pop}
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
