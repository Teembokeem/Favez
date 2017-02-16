import React, {PropTypes} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SearchHeader from '../../components/search/searchHeader/searchHeader';
import Header from '../../components/globals/header/Header';
import LocationSpecifier from '../../components/search/locationSpecifier/locationSpecifier';
import Category from '../../components/search/category/category';

const SearchView = React.createClass({
  propTypes: {},

  back() {
    Actions.pop();
  },

  render() {
    const {index, categories} = this.props;

    return (
      <View style={styles.container}>

        <ScrollView
          contentContainerStyle={styles.container}
        >
          <SearchHeader />
          <Header
            title={'Topics'} />
          <LocationSpecifier
          />
          {categories.map((category, idx) => (
            <Category
              key={'category' + idx}
              category={category}
              track={index}
              moving={this.moving}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 50,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

export default SearchView;
