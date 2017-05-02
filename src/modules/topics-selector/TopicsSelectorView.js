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
import * as ListActions from '../../redux/list/listActions';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/globals/header/header';
import TopicsSelectorHeader from '../../components/topics-selector/topicsSelectorHeader/topicsSelectorHeader';

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
    const {options} = this.props;
    console.log('options', options);
    const {topics} = options;

    return (
      <View style={styles.container}>
        <TopicsSelectorHeader />
        <ScrollView>
          <Header title={'Select Topics'}/>
          {this.categories.map((category, idx) => {
            let {semantic, color, ref} = category;
            return (
              <TouchableOpacity
                key={'category ' + idx}
                style={[styles.Category]}
                onPress={() => this.props.dispatch(ListActions.setNewListOptions({'topics': ref}))}
              >
                <View
                  style={[styles.CategoryColor, {backgroundColor: color}]}
                />
                <Text style={[styles.CategoryText, {color}]}>{semantic.toUpperCase()}</Text>
                <View style={styles.CategorySelectContainer}>
                  {topics && topics.indexOf(ref) > -1
                  ? (
                    <View style={styles.ListSelectSelected}>
                      <IoniconIcon style={styles.ListSelectSelectorIcon} name='md-checkmark-circle'/>
                    </View>
                  )
                  : (
                    <View style={styles.ListSelectDeselected}></View>
                  )}
                </View>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 65,
    flex: 1.5
  },
  CategoryText: {
    alignSelf: 'center',
    marginLeft: 20,
    fontFamily: 'Hind-Bold',
    fontSize: 18,
    flex: 5
  },
  CategorySelectContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ListSelectDeselected: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: '#e6e6e6',
    borderWidth: 3,
  },
  ListSelectSelected: {
    width: 26,
    height: 26,
  },
  ListSelectSelectorIcon: {
    fontSize: 31,
    color: '#4caf4e'
  },
});

export default TopicSelectorView;
