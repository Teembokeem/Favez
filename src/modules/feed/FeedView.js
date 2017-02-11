import React, {PropTypes} from 'react';
import * as FeedState from './FeedState';
import {
  Text,
  View,
  ListView,
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
      background: `rgba(255,255,255, 1)`
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
    const {index, cards} = this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return (
      // <View style={[styles.container, {backgroundColor: this.state.background}]}>
      <ListView 
        contentContainerStyle={styles.container}
        dataSource={ds.cloneWithRows(cards)}
        renderRow={(rowData) => 
          <Card
            key={index}
            card={rowData}
            track={index}
            increment={this.increment}>
          </Card>
        
        }
      >
      </ListView>
    );
  },

  componentWillUpdate() {
    console.log('hello')
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  },
});

export default FeedView;
