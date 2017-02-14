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
import SearchHeader from '../../components/search/search';

const FeedView = React.createClass({
  propTypes: {},

  increment(index) {
    this.props.dispatch(FeedState.increment(this.props.cards, index)) 
  },

  moving() {
    console.log('movinggggg')
    Actions.subbar()
  },

  render() {
    const {index, cards} = this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return (
      <View>
        <SearchHeader />
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
      </View>
    );
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
