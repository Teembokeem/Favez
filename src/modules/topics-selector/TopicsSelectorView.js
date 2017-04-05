import React, {PropTypes} from 'react';
import * as TopicSelectorState from './TopicsSelectorState';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Header from '../../components/globals/header/header';
import TopicsSelectorHeader from '../../components/topics-selector/topicsSelectorHeader/topicsSelectorHeader';
import Category from '../../components/search/category/category';

const TopicSelectorView = React.createClass({
  propTypes: {},
  categories: [
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
  ],

  render() {

    return (
      <View style={styles.container}>
        <TopicsSelectorHeader />
        <ScrollView>
          <Header title={'Select Topics'}/>
          {this.categories.map((category, idx) => {
            let {semantic, color} = category;
            return (
              <TouchableOpacity
              key={'category ' + idx}
                style={[styles.Category]}
                onPress={() => moving(category)}
              >
                <View
                  style={[styles.CategoryColor, {backgroundColor: color}]}
                />
                <Text style={[styles.CategoryText, {color: color}]}>{semantic.toUpperCase()}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Category: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: 375,
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: 'row',
    marginBottom: 1
  },
  CategoryColor: {
    borderRadius: 10,
    width: 65,
    height: 65
  },
  CategoryText: {
    alignSelf: 'center',
    marginLeft: 20,
    fontFamily: 'Hind-Bold',
    fontSize: 18
  },
});

export default TopicSelectorView;
