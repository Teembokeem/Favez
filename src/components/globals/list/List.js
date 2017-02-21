import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import ListHeader from './listHeader';
import ListBody from './listBody';
import ListFooter from './listFooter';

function List({list}) {
  const {creator, collaborators, name, picture, topics, tags} = list;
  return (
    <View
      style={styles.ListContainer}
    >
      <View
        style={styles.fadeLayer}
      ></View>
      <Image
          source={{uri: picture}}
          style={styles.ListBackground}
      />
      <ListHeader
        creator={creator}
        collaborators={collaborators.length}
      />
      <ListBody
        name={name}
        topics={topics}
        tags={tags}
      />
      <ListFooter />
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

export default List;
