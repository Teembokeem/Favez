import React, {PropTypes} from 'react';
import * as ListShowState from './ListShowState';
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
import Line from '../../components/globals/fave/line';
import Info from '../../components/globals/fave/info';
import Card from '../../components/globals/card/card';

const ListShowView = React.createClass({
  propTypes: {},
  componentWillMount() {
    // this.setState({ready: false})\
    console.log('hello', this.props)
    return this.props.dispatch(ListShowState.fetchSimilarList(this.props.list.id));
  },

  componentWillReceiveProps(nextProps) {
    // this.setState({ready: !nextProps.loading});
  },


  moving() {
    Actions.subbar();
  },

  setFilter(val) {
    this.props.dispatch(ListShowState.setFilter(val));
  },

  renderChildren() {
    switch (this.props.selected) {
      case 'info':
        return (
          <Info
            fave={this.props.list}
          />
        );
      case 'favez':
        return this.props.list._favez && Array.isArray(this.props.list._favez)
        ? (
          this.props.list._favez.map((fave, index) => (
            <Line
              fave={fave}
              key={'fave ' + index}
            />
          ))
        )
        : (null);
      case 'similar':
        return (
          this.props.similar.map((fave, index) => (
              <Card
                key={'fave ' + index}
                card={fave}
                track={index}
                moving={this.moving}
            />
          ))
        );
      default :
        return null;
    }
  },


  render() {
    // if (!this.state.ready) return null;
    const {index, list, selected, similar} = this.props;
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

    return (
      <View style={{flex: 1}}>
        <ListShowHeader />
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <Header title={list.name}/>
          <HeaderTabs
            setFilter={this.setFilter}
            selected={selected}
            tabs={['favez', 'info', 'similar']}
          />
          {this.renderChildren()}
        {/*<Text>{list.description}</Text>*/}
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
    justifyContent: 'flex-start',
    // paddingBottom: 50,
    alignItems: 'center',
    flex: 1
    // justifyContent: 'center'
  },
});

export default ListShowView;
