import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

function returnText(number) {
    return number > 1
        ? 's'
        : '';
}

function ListHeader({creator, collaborators, toggleContextMenu, showUserProfile,moving}) {
  let {picture, nickname} = creator;
  const semantics = returnText(collaborators);
  return (
    <View style={styles.ListHeader}>
      <View style={styles.leftContent}>
        <Image
          source={picture ? {uri: picture} : require('../../../../images/default_avatar.png')}
          style={styles.ListHeaderAvatar}
        />
        <Text
          style={styles.ListHeaderUsername} onPress={() => showUserProfile()}
        >
          {'@' + nickname}{collaborators > 0 ? ' & ' + collaborators + ' other' + semantics + '.' : ''}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.rightContent}
        onPress={() => toggleContextMenu('list')}
      >
        <IoniconIcon style={styles.ListHeaderMore} name='ios-more'/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    ListHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    leftContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ListHeaderAvatar: {
        width: 32,
        height: 32,
        borderRadius: 17.5
    },
    ListHeaderLock: {
        fontSize: 15,
        color: 'black'
    },
    ListHeaderUsername: {
        width: 200,
        paddingLeft: 5,
        fontFamily: 'Hind-Bold',
        fontSize: 15,
        color: 'white'
    },
    rightContent: {
        flex: 1,
        alignItems: 'flex-end'
    },
    ListHeaderMore: {
        fontSize: 30,
        color: 'white'
    }
});

export default ListHeader;
