import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const FavoriteView = React.createClass({
  propTypes: {},

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Favorite
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

export default FavoriteView;
