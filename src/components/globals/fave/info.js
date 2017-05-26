import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import Header from '../header/header';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const window = Dimensions.get('window');

function organizeTaxonomies(taxonomy) {
  let obj = {topics: [], tags: []};
  taxonomy.forEach((tax, idx) => {
    tax.type === 1 ? obj['topics'].push(colorFinder(tax.taxonomy)) : obj['tags'].push(tax.taxonomy);

  });
  return obj;
}

function colorFinder(ref) {
  return categories.filter((category) => category.ref === ref)[0];
}

const categories = [
  {
    ref: 'art',
    semantic: 'Art',
    color: '#ff3824'
  },
  {
    ref: 'animals',
    semantic: 'Animals',
    color: '#ff6611'
  },
  {
    ref: 'business',
    semantic: 'Business',
    color: '#ff9600'
  },
  {
    ref: 'education',
    semantic: 'Education',
    color: '#ffa600'
  },
  {
    ref: 'entertainment',
    semantic: 'entertainment',
    color: '#ffbe00'
  },
  {
    ref: 'food',
    semantic: 'Food',
    color: '#ffcd00'
  },
  {
    ref: 'gaming',
    semantic: 'Gaming',
    color: '#c5c614'
  },
  {
    ref: 'health',
    semantic: 'Health',
    color: '#8cbf28'
  },
  {
    ref: 'hobbies',
    semantic: 'Hobbies',
    color: '#4caf4e'
  },
  {
    ref: 'lifestyle',
    semantic: 'Lifestyle',
    color: '#279e8d'
  },
  {
    ref: 'music',
    semantic: 'Music',
    color: '#0c89d7'
  },
  {
    ref: 'news',
    semantic: 'News',
    color: '#0076ff'
  },
  {
    ref: 'science',
    semantic: 'Science',
    color: '#075ae1'
  },
  {
    ref: 'shopping',
    semantic: 'Shopping',
    color: '#1b42ab'
  },
  {
    ref: 'sports',
    semantic: 'Sports',
    color: '#303093'
  },
  {
    ref: 'technology',
    semantic: 'Technology',
    color: '#4a2593'
  },
  {
    ref: 'travel',
    semantic: 'Travel',
    color: '#611e97'
  },
  {
    ref: 'xxx',
    semantic: 'XXX',
    color: 'black'
  }
];

function Info({list}) {
  const {description, picture, owner, taxonomy} = list;
  let topics = []
  let tags = []
  if ( taxonomy ) {
    let {topics, tags} = organizeTaxonomies(taxonomy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentHeaderContainer}>
        <Text style={styles.contentHeaderText}>{'DESCRIPTION'}</Text>
        <View style={styles.contentHeaderBar}></View>
      </View>
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={[styles.contentHeaderContainer, {paddingTop: 15, borderBottomWidth: 0.3, borderColor: '#a8a8a8', paddingBottom: 15}]}>
        <Text style={styles.contentHeaderText}>{'AUTHORS'}</Text>
        <View style={styles.contentHeaderBar}></View>
      </View>
      <View style={styles.authorContainer}>
        <View style={styles.authorImage}>
          <Image
            source={picture ? {uri: picture} : require('../../../../images/default_avatar.png')}
            style={styles.authorAvatar}
          />
        </View>
          {typeof owner === 'object'
          ? (
            <View style={styles.authorInfo}>
              <Text style={styles.authorUsername}>@{owner[0].f2}</Text>
              <Text style={styles.authorName}>{owner[0].f1}</Text>
            </View>
          )
          : (
            <View style={styles.authorInfo}>
              <Text style={styles.authorUsername}>@{owner}</Text>
              <Text style={styles.authorName}>{'Creator'}</Text>
            </View>
          )}
        <View style={styles.authorFollowContainer}>
          <MIcon style={styles.authorFollowIcon} name='person-add'/>
        </View>
      </View>
      <View style={[styles.contentHeaderContainer, {paddingTop: 15, borderBottomWidth: 0.3, borderColor: '#a8a8a8', paddingBottom: 15}]}>
        <Text style={styles.contentHeaderText}>{'TOPICS & TAGS'}</Text>
        <View style={styles.contentHeaderBar}></View>
      </View>
      <View style={styles.topicsContainer}>
      {topics.map((topic, idx) => (
        <View key={'topic ' + idx} style={styles.topicContainer}>
          <View style={[styles.topicColor, {backgroundColor: topic.color}]} />
          <Text style={[styles.topicText, {color: topic.color}]}>{topic.semantic}</Text>
        </View>
      ))}
      </View>
      <View style={styles.tagBox}>
            {tags.map((tag, indice) => (
              <View key={'tag ' + indice} style={styles.tagContainer}>
                <View style={styles.tagTextContainer}>
                  <Text
                    style={styles.tagText}
                  >
                    {'#' + tag.toUpperCase()}
                  </Text>
                </View>
              </View>
            ))}
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: window.width,
    // padding: 15,
    paddingTop: 5,
    overflow: 'hidden',
    // borderRadius: 10,
    marginBottom: 60
  },
  contentHeaderContainer: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: 'column'
  },
  contentHeaderText: {
    fontFamily: 'Hind-Bold',
    fontSize: 23
  },
  contentHeaderBar: {
    width: 50,
    height: 7,
    marginTop: 5,
    backgroundColor: '#e8e8e8'
  },
  descriptionText: {
    paddingLeft: 15,
    marginTop: 5,
    fontFamily: 'Hind-Medium',
    fontSize: 15
  },
  authorContainer: {
    borderBottomWidth: 0.3,
    borderColor: '#a8a8a8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5
  },
  authorImage: {
    flex: 2
  },
  authorAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28
  },
  authorInfo: {
    flex: 7,
    // paddingLeft: 10
  },
  authorUsername: {
    fontFamily: 'Hind-Bold'
  },
  authorName: {
    fontFamily: 'Hind-Medium',
    color: '#a8a8a8'
  },
  authorFollowContainer: {
    flex: 1
  },
  authorFollowIcon: {
    fontSize: 30
  },
  topicsContainer: {
    flexDirection: 'column',
    width: window.width,
    padding: 10
  },
  topicContainer: {
    paddingLeft: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  topicColor: {
    borderRadius: 10,
    width: 65,
    height: 65
  },
  topicText: {
    paddingLeft: 20,
    fontFamily: 'Hind-Bold',
    fontSize: 18
  },
  tagBox: {
    width: window.width,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // padding: 7,
  },
  tagContainer: {
    height: 30,
    paddingLeft: 14,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tagTextContainer: {
    borderWidth: 2.5,
    borderRadius: 8,
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderColor: '#a8a8a8',
    justifyContent: 'center'
  },
  tagText: {
    fontFamily: 'Hind-Bold',
    color: '#a8a8a8',
    fontSize: 14
  },
  tagIcon: {
    paddingLeft: 5,
    paddingBottom: 3,
    fontSize: 25,
    color: 'red'
  }
});

export default Info;
