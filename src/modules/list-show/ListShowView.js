import React, {PropTypes} from 'react';
import * as ListShowState from './ListShowState';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Header from '../../components/globals/header/header';
import ListShowHeader from '../../components/list-show/listShowHeader/listShowHeader';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';

const ListShowView = React.createClass({
  propTypes: {},
  state: {
    ready: null
  },

  componentWillMount() {
    this.setState({ready: false})
    return this.props.dispatch(ListShowState.getFullList()) 
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ready: !nextProps.loading});
  },

  moving() {
    Actions.subbar();
  },

  render() {
    if (!this.state.ready) return null;
    const {index, list} = this.props;
    // const ds = this.state.dataSource;
    console.log('list', list)
    return (
      <View style={{flex: 1}}>
        <ListShowHeader />
        <ScrollView
          contentContainerStyle={styles.container}
        >
          <Header title={list.name}/>
          <HeaderTabs
            setFilter={this.setFilter}
            tabs={['your lists', 'collabs', 'liked']}
          />        
          {/*{list.map((card, idx) => (
          <Card
              key={'feed ' + idx}
              card={card}
              track={index}
              moving={this.moving}
          />
        ))}*/}
        <Text>{list.description}</Text>
        </ ScrollView>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // height: 1000,
    // paddingTop: 20,
    // marginTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  },
});

export default ListShowView;
