import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as UIActions from '../../redux/ui/uiActions';
// import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Card from '../../components/globals/card/card';
import FeedHeader from '../../components/feed/feedHeader/feedHeader';
import ContextMenu from '../../modules/modals/contextMenu/contextMenu';

const FeedView = React.createClass({
  propTypes: {},

  componentWillMount() {
    this.props.dispatch(ListActions.getFullList());
    this.props.dispatch(ListActions.getMyLists());
  },

  moving(idx) {
    this.props.dispatch(ListActions.setList(idx)).then(() => Actions.listShow());
  },

  toggleContextMenu() {
    this.props.dispatch(UIActions.toggleContextMenu('feed', 'header'));
  },

  selectContextItem(item) {
    switch (item) {
      case 'create':
        this.toggleContextMenu();
        return Actions.createList();
      case 'form':
        this.toggleContextMenu();
        return Actions.addFaveForm();
      case 'web':
        this.toggleContextMenu();
        return Actions.addFaveBrowse();
      default :
        return Actions.createList();
      }
  },

  renderModal() {
    const {headerContextMenu} = this.props;
    const {visible, set} = headerContextMenu;
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
    const {lists} = this.props;
    // const ds = this.state.dataSource;
    console.log(this.props)
    return (
      <View style={{flex: 1}}>
        {this.renderModal()}
        <FeedHeader
          toggleContextMenu={this.toggleContextMenu}
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
