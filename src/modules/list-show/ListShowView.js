import React, {PropTypes} from 'react';
import * as ListShowState from './ListShowState';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Alert,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import ListShowHeader from '../../components/list-show/listShowHeader/listShowHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import FooterTabs from '../../components/globals/footerTabs/footerTabs';
import Line from '../../components/globals/fave/line';
import Info from '../../components/globals/fave/info';
import Card from '../../components/globals/card/card';
const window = Dimensions.get('window');

const ListShowView = React.createClass({
  propTypes: {},
  componentWillMount() {
    // this.setState({ready: false})\
    return this.props.dispatch(ListShowState.fetchSimilarList(this.props.list.id));
  },

  componentWillReceiveProps(nextProps) {
    // this.setState({ready: !nextProps.loading});
  },

  moving() {
    Actions.subbar();
  },

  setFilter(view, tab) {
    this.props.dispatch(UIActions.setViewTab(view, tab));
  },

  browseFave(idx) {
    this.props.dispatch(UIActions.browseList(this.props.list._favez, idx))
    .then(() => Actions.addFaveBrowse({viewList: true}));
  },

  renderChildren() {
    switch (this.props.selectedTab) {
      case 'info':
        return (
          <Info
            list={this.props.list}
          />
        );
      case 'favez':
        return this.props.list._favez && Array.isArray(this.props.list._favez)
        ? (
          this.props.list._favez.map((fave, index) => (
            <Line
              fave={fave}
              index={index}
              browseFave={this.browseFave}
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
    const {index, list, selected, similar, selectedTab, tabs} = this.props;
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
        icon: 'comment-text-outline',
        action: 'outbound'
      }
    ];

    return (
      <View style={{flex: 1}}>
        <View style={styles.ListBackgroundImageContainer}>
          <View style={styles.ListBackgroundOverlay}></View>
          <Image
            style={styles.ListBackgroundImage}
            source={list._favez ? {uri: list._favez[0].image} : require('../../../images/default_list.png')}/>
        </View>
        <ListShowHeader />
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <Header title={list.name}/>
          <HeaderTabs
            view={'listShow'}
            setFilter={this.setFilter}
            selected={selectedTab}
            tabs={tabs}
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
  ListBackgroundImageContainer: {
    position: 'absolute',
    width: window.width,
    height: 200,
    overflow: 'hidden'
  },
  ListBackgroundOverlay: {
    position: 'absolute',
    height: 200,
    width: window.width,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 3
  },
  ListBackgroundImage: {
    width: window.width,
    height: 300,
    position: 'absolute',
    top: 0
    // maxHeight: 100
  }
});

export default ListShowView;
