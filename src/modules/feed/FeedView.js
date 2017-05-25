import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as userActions from '../../redux/user/userActions';
import * as UIActions from '../../redux/ui/uiActions';
import * as FeedState from './FeedState';

import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from '../../components/globals/card/card';
import FeedHeader from '../../components/feed/feedHeader/feedHeader';
import ContextMenu from '../../modules/modals/contextMenu/contextMenu';
import * as FavezActions from '../../redux/fave/faveActions';
import { showSubscribedlists, showFollowedlists, addrecentClickedFollow, checkOwnerIdinFollowList } from '../../utils/userFollow';

let subscribedListsIds = [];
let followedListsIds = [];
let followedUserIds = [];
const FeedView = React.createClass({
  propTypes: {},
  componentWillMount() {
    this.props.dispatch(FavezActions.requestFullFave());
    this.props.dispatch(ListActions.getListbyRelationAction("subscribed"));

    if (this.props.user.favez) {
      this.props.dispatch(userActions.requestFollowingUsersList(this.props.user.favez.id));
      this.props.dispatch(ListActions.getMyLists());
      this.props.dispatch(FavezActions.getSelffavez());
    }
  },
  componentDidMount() { },

  browseFave(fave) {
    this.props.dispatch(UIActions.browseFave(fave))
    .then(() => Actions.addFaveBrowse({viewFave: true}));
  },
  showUserProfile(userId) {
    Actions.profile({userId:userId});
  },
  moving(idx) {
    this.props.dispatch(ListActions.getDetailedList(idx)).then(() => Actions.listShow());
  },
  userLikeDislike(action, id) {
    if (action == "like") {
      this.props.dispatch(ListActions.sendListLikeDislike(id));
    }
  },
  userSubscribe(id, action) {
    if (id == "subsrciptions") {
      this.props.dispatch(FeedState.subscribeList(action, 2));
      //  this.props.dispatch(ListActions.createlistRelationAction(action, 2));
    }
    if (id == "unsubscribe") {
      this.props.dispatch(FeedState.unsubscribelist(action, 2));
    }
  },
  userFollow(id, action) {
    if (id == "follow") {
      this.props.dispatch(FeedState.followUser(action));
    }
    if (id == "unfollow") {
      this.props.dispatch(FeedState.unFollowUser(action));
    }
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
      default:
        return Actions.createList();
    }
  },

  renderModal() {
    const { headerContextMenu } = this.props;
    const { visible, set } = headerContextMenu;
    return visible
      ? (<ContextMenu toggleContextMenu={this.toggleContextMenu} visible={visible} items={set} />)
      : null;
  },
  userFollowUnFollow(action,detailList){
    if (action === "follow") {
        this.props.dispatch(userActions.followUserCardAction(detailList));
    } else if(action === "unfollow"){
          this.props.dispatch(userActions.unFollowUserCardAction(detailList));
    }
  },


  render() {
    const { lists, subscribedlists, followedusers, user,followingUsers } = this.props;
    return (
      <View style={{
        flex: 1
      }}>
        {this.renderModal()}
        <FeedHeader user={user} toggleContextMenu={this.toggleContextMenu} />
        <ScrollView contentContainerStyle={styles.container}>
          {lists.map(this.renderCard)}
        </ScrollView>
      </View>
    );
  },
  renderCard(card, idx) {
    if (this.props.followingUsers.length > 0) {
    followedUserIds = showFollowedlists(this.props.followingUsers);
  }
    return (
      <Card
        key={'feed ' + idx}
        card={card}
        track={idx}
        showUserProfile={this.showUserProfile}
        moving={this.moving}
        userSubscribeAction={this.userSubscribe}
        userAction={this.userLikeDislike}
        browseFave={this.browseFave}
        showProfile={() => this.showProfile(card.owner)}
        onUserAction={() => this.onUserAction(card)}
        userActionData={{type: 'follow_unfollow', data: this.isFollowedbyUser(card)}}
      />
    );
  },
  isFollowedbyUser(card) {
    return followedUserIds.indexOf(card.owner) != -1
  },

  onUserAction(card) {
    if(!!this.props.userLoggedIn && this.props.userLoggedIn.auth0) {
      if(this.isFollowedbyUser(card)) this.userFollowUnFollow("unfollow", card)
      else this.userFollowUnFollow("follow", card)
    } else Actions.login();
  },


  showProfile(userId) {
    Actions.profile({userId});
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9',
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
  }
});

export default FeedView;
