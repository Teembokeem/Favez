import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const ProfileView = React.createClass({
  propTypes: {},

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Profile View
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

export default ProfileView;
