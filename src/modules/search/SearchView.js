import React, {PropTypes} from 'react';
import * as SearchState from './SearchState';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SearchHeader from '../../components/search/searchHeader/searchHeader';
import FavoriteHeader from '../../components/favorite/favoriteHeader/favoriteHeader';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Header from '../../components/globals/header/header';
import LocationSpecifier from '../../components/search/locationSpecifier/locationSpecifier';
import Category from '../../components/search/category/category';
import Card from '../../components/globals/card/card';

const SearchView = React.createClass({
  propTypes: {},

  back() {
    Actions.pop();
  },

  setFilter(val) {
    this.props.dispatch(SearchState.setFilter(val));
  },

  setTopic(val) {
    console.log('val', val)
    this.props.dispatch(SearchState.setTopic(val));
  },

  renderSearchCategories(categories, index) {
    return (
      <View>
        <Header
          title={'Topics'} />
        <LocationSpecifier
        />
        {categories.map((category, idx) => (
          <Category
            key={'category' + idx}
            category={category}
            track={index}
            moving={this.setTopic}
          />
        ))}
      </View>
    )
  },

  renderSearchTopic(){
    return (
      <View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <FavoriteHeader
            toggleMenu={() => this.setTopic(null)}
          />
          <Header title={'FAVEZ'} />
          <HeaderTabs
            setFilter={this.setFilter}
            selected={this.props.selected}
            tabs={['lists', 'sites', 'products', 'filter']}
          />
            {this.renderChildren()}
        </ScrollView>
      </View>
    )
  },

  renderChildren() {
    switch (this.props.selected) {
      case 'lists':
      case 'sites':
      case 'filter':
        console.log(this.props.lists, 'this lists')
        return (
          this.props.lists.map((card, idx) => (
            <Card
              key={'feed ' + idx}
              card={card}
              track={idx}
              moving={this.moving}
            />
          ))
        );
      case 'products':
        return (
          this.props.favez.map((fave, index) => (
            <Card
              key={'fave ' + index}
              card={fave}
              track={index}
              moving={this.moving}
              increment={this.increment}
            />
          ))
        );
      default :
        return null;
    }
  },

  render() {
    const {index, categories, topic} = this.props;
    console.log('this is teh current topic', topic)

    return (
      <View style={styles.container}>

        <ScrollView
          contentContainerStyle={styles.container}
        >
          <SearchHeader />
          {
            topic
            ? this.renderSearchTopic()
            : this.renderSearchCategories(categories, index)
          }
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    backgroundColor: '#e9e9e9',
    marginBottom: 30,
    padding: 10,
    paddingTop: 15,
    alignItems: 'center'
  }
});

export default SearchView;
