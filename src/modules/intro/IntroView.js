import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import * as NavigationState from '../../modules/navigation/NavigationState';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
const IntroView = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  },

  onNextPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Feed',
      title: 'Feed Screen'
    }));
  },

  onSignInPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Login',
      title: 'Login Screen'
    }));
  },
  onRegisterPress() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Register',
      title: 'Register Screen'
    }));
  },

  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'red'}]}>
        <Text onPress={this.onSignInPress}>
          SIGN IN
        </Text>
        <Text onPress={this.onRegisterPress}>
          BECOME A FAVER
        </Text>
        <Text onPress={this.onNextPress}>
          SKIP THIS STEP FOR NOW
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default IntroView;
