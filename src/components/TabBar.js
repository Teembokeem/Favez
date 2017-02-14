import React, {PropTypes} from 'react';
import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const {PropTypes: NavigationPropTypes} = NavigationExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'red',
  },
  scenish: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  }
});

const TabBar = React.createClass({
  displayName: 'TabBar',
  propTypes: {
    tabs: NavigationPropTypes.navigationState.isRequired,
    height: PropTypes.number.isRequired,
    currentTabIndex: PropTypes.number.isRequired,
    switchTab: PropTypes.func.isRequired
  },

  render() {
    return (
      <View style={[styles.container, styles.scenish ]}>
        <Text>Tab this</Text>
        <Button onPress={Actions.pop}>Back</Button>
        <Button onPress={() => { Actions.tab1(); }}>Switch to tab1</Button>
        <Button onPress={() => { Actions.tab2(); }}>Switch to tab2</Button>
        <Button onPress={() => { Actions.tab3(); }}>Switch to tab3</Button>
        <Button onPress={() => { Actions.tab4(); }}>Switch to tab4</Button>
        <Button onPress={() => { Actions.tab5(); }}>Switch to tab5</Button>
        <Button onPress={() => { Actions.echo(); }}>push new scene</Button>
      </View>
    );
  }
});

export default TabBar;
