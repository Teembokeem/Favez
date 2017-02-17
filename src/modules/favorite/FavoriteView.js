import React, {PropTypes} from 'react';
import * as FavoriteState from './FavoriteState';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FavoriteHeader from '../../components/favorite/favoriteHeader/favoriteHeader';
import Header from '../../components/globals/header/Header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import List from '../../components/globals/list/List';

const FavoriteView = React.createClass({
  propTypes: {},
  renderChildren() {
    console.log('your props', this.props.selected);
    switch (this.props.selected) {
      case 'your lists':
        console.log('sending lists');
        return (
          this.props.lists.map((list, index) => (
              <List
                list={list}
                key={index}
              >
              </List>
          ))
        );
      default :
        return null;
    }
  },

  setFilter(val) {
    this.props.dispatch(FavoriteState.setFilter(val));
  },

  render() {
    const child = this.renderChildren();
    // const {faves, lists} = this.props;
    const selectedTab = this.props.selected;
    return (
      <View style={styles.container}>
        <ScrollView
        >
          <FavoriteHeader />
          <Header title={'FAVEZ'} />
          <HeaderTabs
            setFilter={this.setFilter}
            selected={selectedTab}
            tabs={['your lists', 'collabs', 'liked']}
          />
          <View
            style={styles.contentContainer}
          >
            {child}
          </View>
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

export default FavoriteView;
