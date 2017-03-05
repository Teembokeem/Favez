import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';


function Info({fave}) {
  return (
    <View>
      <Text>Description</Text>
      <Text>{fave.description}</Text>
      <Text>Authors</Text>
      <Text>{fave.owner}</Text>
      <Text>Topics and Tags</Text>
      <Text>Something here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 355,
    padding: 15,
    paddingTop: 5,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20
  },
  fadeLayer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 355,
    height: 400,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0
  },
  ListBackground: {
    width: 355,
    height: 400,
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    zIndex: -1
  },
});

export default Info;
