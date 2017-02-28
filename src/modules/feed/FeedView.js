import React from 'react';
import * as ListActions from '../../redux/list/listActions';
// import * as UIActions from '../../redux/ui/uiActions';
import {
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
    this.props.dispatch(ListActions.getFullList());
  },

  moving(idx) {
    this.props.dispatch(ListActions.setList(idx)).then(() => Actions.subbar());
    // Actions.subbar();
  },

  render() {
    const {index, lists} = this.props;
    // const ds = this.state.dataSource;
    console.log('lists', lists);
    return (
      <View style={{flex: 1}}>
        <FeedHeader />
        <ScrollView
          contentContainerStyle={styles.container}
        >
        {lists.map((card, idx) => (
          <Card
              key={'feed ' + idx}
              card={card}
              track={idx}
              moving={this.moving}
          />
        ))}
        </ ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#e9e9e9',
    // justifyContent: 'center',
    // height: 1000,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  },
});

export default FeedView;
