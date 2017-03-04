import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as FeedActions from './FeedState';
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
    this.props.dispatch(ListActions.setList(idx)).then(() => Actions.listShow());
  },

  setVisibilityHeaderMore() {
    this.props.dispatch(FeedActions.setVisibility());
  },

  selectContextItem(item) {
    switch (item) {
      case 'create':
        this.setVisibilityHeaderMore();
        return Actions.createList();
      case 'web':
        this.setVisibilityHeaderMore();
        return Actions.addFave();
      default :
        return Actions.createList();
      }
  },

  render() {
    const {index, lists, headerMore} = this.props;
    // const ds = this.state.dataSource;
    console.log(this.props)
    return (
      <View style={{flex: 1}}>
        <FeedHeader
          setVisible={this.setVisibilityHeaderMore}
          visible={headerMore}
          selectContextItem={this.selectContextItem}
        />
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
