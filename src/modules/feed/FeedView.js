import React, {PropTypes} from 'react';
import * as FeedState from './FeedState';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Card from '../../components/globals/card/card';
import FeedHeader from '../../components/feed/feedHeader/feedHeader';

const FeedView = React.createClass({
  propTypes: {},

  componentWillMount() {
    this.props.dispatch(FeedState.getFullList()) 
  },

  increment(index) {
    this.props.dispatch(FeedState.increment(this.props.cards, index));
  },

  moving() {
    console.log('movinggggg');
    Actions.subbar();
  },

  render() {
    const {index, cards} = this.props;
    // const ds = this.state.dataSource;
    return (
      <View style={{flex: 1}}>
        <FeedHeader />
        <ScrollView
          contentContainerStyle={styles.container}
        >
        {cards.map((card, idx) => (
          <Card
              key={'feed ' + idx}
              card={card}
              track={index}
              moving={this.moving}
              increment={this.increment}
          />
        ))}
        </ ScrollView>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#f9f9f9',
    // justifyContent: 'center',
    // height: 1000,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  },
});

export default FeedView;
