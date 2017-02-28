import React, {PropTypes} from 'react';
// import * as ListShowState from './ListShowState';
import * as ListActions from '../../redux/list/listActions';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import ListShowHeader from '../../components/list-show/listShowHeader/listShowHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import FooterTabs from '../../components/globals/footerTabs/footerTabs';

const ListShowView = React.createClass({
  propTypes: {},
  componentWillMount() {
    // this.setState({ready: false})
    // return this.props.dispatch(ListActions.getFullList()) 
  },

  componentWillReceiveProps(nextProps) {
    // this.setState({ready: !nextProps.loading});
  },


  moving() {
    Actions.subbar();
  },

  render() {
    // if (!this.state.ready) return null;
    const {index, list} = this.props;
    const tabProps = [
      {
        name: 'share',
        icon: 'share',
        action: 'menu'
      },
      {
        name: 'bookmark',
        icon: 'bookmark-plus-outline',
        action: 'bool'
      },
      {
        name: 'message',
        icon: 'message-text',
        action: 'outbound'
      }
    ];
    // const ds = this.state.dataSource;
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
        <FooterTabs
          TabProps={tabProps}
        />
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
