import React, {PropTypes} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import FavoriteHeader from '../../components/favorite/favoriteHeader/favoriteHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import List from '../../components/globals/list/list';
import Card from '../../components/globals/card/card';
import ContextMenu from '../../modules/modals/contextMenu/contextMenu';


const FavoriteView = React.createClass({
  propTypes: {},
  renderList() {
    const {myLists, myCollabs, selectedTab, user} = this.props;
    switch (selectedTab) {
      case 'your lists':
      console.log('1', myLists)
        return renderListChildren(myLists, 'list');
      case 'collabs':
      console.log('2')
        return renderListChildren(myCollabs, 'list');
      case 'liked':
      console.log('3')
        return renderListChildren(myLists, 'card');
      default :
        return null;
    }
    function renderListChildren(listSet, childType) {
      switch (childType) {
        case 'list':
        console.log('hello')
          return (
            listSet.map((list, index) => (
                <List
                  list={list}
                  user={user}
                  key={'list ' + index}
                >
                </List>
            ))
          );
        case 'card':
        default :
          /*return (
            this.props.favez.map((fave, index) => (
                <Card
                  key={'fave ' + index}
                  card={fave}
                  track={index}
                  moving={this.moving}
              />
            ))
          );*/
          return null;
      }

    }
  },
  setFilter(view, tab) {
    this.props.dispatch(UIActions.setViewTab(view, tab));
  },

  toggleContextMenu() {
    this.props.dispatch(UIActions.toggleContextMenu('favorite', 'header'));
  },

  renderModal() {
    const {headerContextMenu} = this.props;
    const {visible, set} = headerContextMenu;
    console.log('rendering modal', visible)
    return visible
    ? (
      <ContextMenu
        toggleContextMenu={this.toggleContextMenu}
        visible={visible}
        items={set}
      />
    )
    : null;
  },

  render() {
    const {tabs, selectedTab} = this.props;
    const child = this.renderList();
    console.log('this props', this.props)
    return (
      <View style={styles.container}>
        {this.renderModal()}
        <ScrollView
        >
          <FavoriteHeader
            toggleContextMenu={this.toggleContextMenu}
          />
          <Header title={'FAVEZ'} />
          <HeaderTabs
            view={'favorite'}
            setFilter={this.setFilter}
            selected={selectedTab}
            tabs={tabs}
          />
          <View
            style={styles.contentContainer}
          >
            {child}
          </View>
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    backgroundColor: '#e9e9e9',
    marginBottom: 30,
    padding: 10,
    paddingTop: 15,
    alignItems: 'center'
  }
});

export default FavoriteView;
