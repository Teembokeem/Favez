import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

function Line({fave, browseFave, index}) {
  const user = (fave.user && fave.user.length) ? fave.user : {f1: 'Unknown'}
  return (
    <View style={styles.FaveContainer}>
      <View style={styles.FaveHeader}>
        {/*TODO: grab user image? <Image />*/}
        <Text style={styles.FaveUsername}>@{user.f1}: </Text>
        <Text style={styles.FaveUserDescription}>{fave.description ? fave.description : ''}</Text>
      </View>
      <TouchableOpacity
        style={styles.FaveInfoContainer}
        onPress={() => browseFave(index)}
      >
        <Image style={styles.FaveInfoIcon} source={{uri: fave.image}}/>
        <View style={styles.FaveInfoTextContainer}>
          <Text style={styles.FaveInfoName}>{fave.name}</Text>
          <Text ellipsizeMode={'tail'} numberOfLines={1} style={styles.FaveInfoLink}>{fave.link}</Text>
        </View>
      </TouchableOpacity>
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
  FaveContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 17
  },
  FaveHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  FaveUsername: {
    fontFamily: 'Hind-Bold',
    fontSize: 18
  },
  FaveUserDescription: {
    fontFamily: 'Hind-Light',
    fontSize: 15
  },
  FaveInfoContainer: {
    flex: 1,
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: 'row'
  },
  FaveInfoIcon: {
    width: 75,
    height: 75,
    borderColor: '#f8f8f8',
    borderWidth: 0.8,
    borderRadius: 7,
    flex: 1
  },
  FaveInfoTextContainer: {
    flex: 4,
    paddingLeft: 10,
    justifyContent: 'center'
  },
  FaveInfoName: {
    fontFamily: 'Hind-Bold',
    fontSize: 18,
    lineHeight: 22
  },
  FaveInfoLink: {
    fontFamily: 'Hind-Regular',
    color: '#b8b8b8'
  }
});

export default Line;
