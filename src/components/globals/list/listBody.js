import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

function ListBody({picture, name, topics, tags, moving, index}) {

  return (
    <View style={styles.ListBody}>
      <TouchableOpacity
        style={styles.ListBodyTitle}
        onPress={() => moving(index)}
      >
        <MaterialIcons style={styles.ListBodyLock} name='lock'/>
        <Text
          style={styles.ListBodyName}
        >
          {name.toUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={styles.ListBodyTags}>
        {/*{topics.map((topic, index) => (
          <View
            style={styles.ListBodyTopicContainer}
            key={'topic ' + index}
          >
            <Text
              style={styles.ListBodyTopic}
            >{topic.toUpperCase()}</Text>
          </View>
        ))}
        {tags.map((tag, index) => (
          <View
            style={styles.ListBodyTagContainer}
            key={'tag ' + index}
          >
            <Text
              style={styles.ListBodyTag}
            >{'#' + tag.toUpperCase()}</Text>
          </View>
        ))}*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ListBody: {
    // paddingTop: 5,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  ListBodyTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ListBodyLock: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'white'
  },
  ListBodyName: {
    fontFamily: 'Hind-Bold',
    fontSize: 20,
    color: 'white'
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end'
  },
  ListBodyTags: {
    marginTop: 40,
    flexDirection: 'row',
    overflow: 'hidden',
    height: 30
  },
  ListBodyTopicContainer: {
    backgroundColor: '#611e97',
    paddingLeft: 7,
    paddingRight: 7,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center'
  },
  ListBodyTopic: {
    color: 'white',
    fontFamily: 'Hind-Bold',
    fontSize: 13
  },
  ListBodyTagContainer: {
    marginLeft: 7,
    borderWidth: 2.5,
    borderColor: 'white',
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 7,
    alignItems: 'center'
  },
  ListBodyTag: {
    color: 'white',
    fontFamily: 'Hind-Bold',
    fontSize: 13
  }
});

export default ListBody;
