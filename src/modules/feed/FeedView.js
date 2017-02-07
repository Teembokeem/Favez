import React, {PropTypes} from 'react';
import * as FeedState from './FeedState';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Card from '../../components/card/card';

import * as NavigationState from '../../modules/navigation/NavigationState';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate navigation patterns.
 * @TODO remove this module in a live application.
 */
const FeedView = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    cards: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  },

  onNextPress() {
    const index = this.props.index;
    this.props.dispatch(NavigationState.pushRoute({
      key: `Feed_${index + 1}`,
      title: `Feed Screen #${index + 1}`
    }));
  },

  increment(index) {
    this.props.dispatch(FeedState.increment(this.props.cards, index)) 
  },

  render() {
    console.log(this.props.cards)
    const {index, cards} = this.props;

    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          track={index}
          increment={this.increment}>
        </Card>
        ))}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FeedView;
