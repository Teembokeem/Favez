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

function List({list, user, toggleContextMenu, moving, index}) {
  console.log('inside List component', index)
  const {creator, collaborators, name, _favez, topics, tags} = list;
  return (
    <View
      style={styles.ListContainer}
    >
      <View
        style={styles.fadeLayer}
      ></View>
      <Image
          source={Array.isArray(_favez) && _favez.length > 0 ? {uri: _favez[0].image} : require('../../../../images/default_list_picture.png')}
          style={styles.ListBackground}
      />
      <ListHeader
        creator={user}
        toggleContextMenu={toggleContextMenu}
        /*collaborators={collaborators.length}*/
      />
      <ListBody
        name={name}
        index={index}
        moving={moving}
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
