import React, {PropTypes} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux'

const NotificationView = React.createClass({
  propTypes: {},

  moveIntro() {
    Actions.intro()
  },

  render() {
    return (
      <View style={styles.container}>
        <Button title='Notification' onPress={this.moveIntro}>
        </Button>
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

export default NotificationView;
