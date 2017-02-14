import React, {PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import {Actions} from 'react-native-router-flux'

const SearchView = React.createClass({
  propTypes: {},

  back() {
    Actions.pop()
  },

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.back} title='Back'/>
        <Text>
          Search
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

export default SearchView;
