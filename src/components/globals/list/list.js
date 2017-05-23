import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import ListHeader from './listHeader';
import ListBody from './listBody';
import ListFooter from './listFooter';

function List({list, user, toggleContextMenu, moving, index, showUserProfile,taxonomy, onSelectTaxonomy, onUserAction, userActionData}) {

  const {collaborators, name, _favez, topics, tags, bg_image} = list;
  const userData = user.auth0 ? user.favez : user;

  return (
    <View
      style={styles.ListContainer}
    >
      <View style={styles.fadeLayer} />
      <Image
          source={bg_image
            ? {uri: bg_image}
            : require('../../../../images/default_list_picture.png')}
          style={styles.ListBackground}
      />
      <ListHeader
        user={userData}
        displayName={userData.f2 ? userData.f2 : userData.username}
        userImage={userData.f3 ? userData.f3 : userData.image}
        toggleContextMenu={toggleContextMenu}
        collaborators={collaborators ? collaborators.length : 0}
        showUserProfile={showUserProfile}
        moving={moving}
        id={list.id}
      />
      <ListBody
        name={name}
        index={index}
        moving={moving}
        id={list.id}
        topics={topics}
        tags={tags}
        taxonomy={taxonomy}
        onSelectTaxonomy={onSelectTaxonomy}
      />
    <ListFooter
      ListId={list.id}
      onUserAction={onUserAction}
      userActionData={userActionData} />
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
  }
});

export default List;
