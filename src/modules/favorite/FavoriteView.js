import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import * as ListActions from '../../redux/list/listActions';
import FavoriteHeader from '../../components/favorite/favoriteHeader/favoriteHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import List from '../../components/globals/list/list';
import Card from '../../components/globals/card/card';
import ContextMenu from '../../modules/modals/contextMenu/contextMenu';

const FavoriteView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
    this.props.dispatch(ListActions.getMyLists());
  },

  renderList(ref) {
    const {myLists, myCollabs, selectedTab} = this.props;
    switch (selectedTab) {
      case 'your lists':
        return this.renderListChildren(myLists, 'list', ref);
      case 'collabs':
        return this.renderListChildren(myCollabs, 'list', ref);
      case 'liked':
        return this.renderListChildren(myLists, 'card', ref);
      default :
        return null;
    }
  },
  renderListChildren(listSet, childType) {
    const {user} = this.props;
    const {auth0, favez} = user;
    switch (childType) {
      case 'list':
        return (
          listSet.map((list, index) => (
              <List
                list={list}
                user={auth0}
                moving={this.moving}
                key={'list ' + index}
                index={index}
                showUserProfile={() => this.showUserProfile(favez)}
                toggleContextMenu={this.toggleContextMenu}
              />
          ))
        );
      case 'card':
      default :
        return (
          this.props.favez.map((fave, index) => (
              <Card
                key={'fave ' + index}
                card={fave}
                track={index}
                moving={this.moving}
            />
          ))
        );
    }
  },
  setFilter(view, tab) {
    this.props.dispatch(UIActions.setViewTab(view, tab));
  },

  showUserProfile(user) {
    // switch (this.props.selectedTab) {
    //   case 'your lists':
    //   case 'liked':
    //     Actions.profile();
    //     break;
    //   case 'collabs':
    //     Actions.profile({userId:user.id});
    // }
    Actions.profile({userId:29});
  },

  toggleContextMenu(source) {
    this.props.dispatch(UIActions.toggleContextMenu('favorite', source));
  },

  renderModal(menu) {
    const {visible, set, ref} = menu;
    return visible
    ? (
      <ContextMenu
        toggleContextMenu={this.toggleContextMenu}
        visible={visible}
        source={ref}
        items={set}
      />
    )
    : null;
  },

  moving(idx) {
    const {selectedTab} = this.props;
    let list;
    switch (selectedTab) {
      case 'your lists':
        list = 'myLists';
        break;
      case 'collabs':
        list = 'collaborations';
        break;
      default:
        list = 'myLists';
        break;
    }
    this.props.dispatch(ListActions.setList(list, idx)).then(() => Actions.listShow());
  },

  render() {
    const {tabs, selectedTab, listContextMenu, headerContextMenu} = this.props;
    let selectedMenu;
    if (headerContextMenu.visible) {
      selectedMenu = headerContextMenu;
    } else {
      selectedMenu = listContextMenu;
    }
    let {ref} = selectedMenu;
    const child = this.renderList(ref);
    console.log('this props', this.props);
    return (
      <View style={styles.container}>
        {this.renderModal(selectedMenu)}
        <ScrollView
        >
          <FavoriteHeader
            toggleContextMenu={this.toggleContextMenu}
            source={ref}
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
