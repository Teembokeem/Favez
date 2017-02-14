import React, {PropTypes} from 'react';
import * as FeedState from './FeedState';
import {
  Text,
  View,
  ListView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Card from '../../components/card/card';

// import * as NavigationState from '../../modules/navigation/NavigationState';

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

  increment(index) {
    console.log('fook')
    // Actions.counter({type: 'shit'})
    this.props.dispatch(FeedState.increment(this.props.cards, index)) 
  },

  moving() {
    console.log('movinggggg')
    Actions.counter()
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
            moving={this.moving}
            increment={this.increment}>
          </Card>
        
        }
      >
      </ListView>
    );
  },
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
