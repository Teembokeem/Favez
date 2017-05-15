import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as userActions from '../../redux/user/userActions';
import * as UIActions from '../../redux/ui/uiActions';
import * as FeedState from './FeedState';

import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Card from '../../components/globals/card/card';
import FeedHeader from '../../components/feed/feedHeader/feedHeader';
import ContextMenu from '../../modules/modals/contextMenu/contextMenu';
import * as FavezActions from '../../redux/fave/faveActions';
import {showSubscribedlists, showFollowedlists, addrecentClickedFollow, checkOwnerIdinFollowList} from '../../utils/userFollow';

let subscribedListsIds = [];
let followedListsIds = [];
const FeedView = React.createClass({
    propTypes: {},
    componentWillMount() {
        this.props.dispatch(FavezActions.requestFullFave());
        // this line needs work..... break shit
        // this.props.dispatch(ListActions.getMyLists());
        this.props.dispatch(FavezActions.getSelffavez());
        this.props.dispatch(ListActions.getListbyRelationAction("subscribed"));
        if ( this.props.user.favez ) this.props.dispatch(userActions.requestFollowingUsersList(this.props.user.favez.id));
    },
    componentDidMount() {},

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
        const {headerContextMenu} = this.props;
        const {visible, set} = headerContextMenu;
        return visible
            ? (<ContextMenu toggleContextMenu={this.toggleContextMenu} visible={visible} items={set}/>)
            : null;
    },

    render() {
        const {lists, subscribedlists, followedusers} = this.props;

        console.log("followed lists ini", lists);

        // const ds = this.state.dataSource;
        if (lists.length > 0 && subscribedlists.length > 0) {

            subscribedListsIds = showSubscribedlists(lists, subscribedlists);
        }

        if (followedusers && followedusers.length > 0) {
            console.log("all lists", lists);
            console.log("followed lists", followedusers);
            followedListsIds = showFollowedlists(followedusers);
            console.log("results new arr of obj21", followedListsIds);
        }
        if (this.props.recentFollowedUser.id > -1) {
            console.log("new pushed latest array old", followedListsIds);
            followedListsIds = addrecentClickedFollow(followedListsIds, this.props.recentFollowedUser);

            console.log("new pushed latest array: ", followedListsIds);
        }
        return (

            <View style={{
                flex: 1
            }}>

                {this.renderModal()}
                <FeedHeader toggleContextMenu={this.toggleContextMenu}/>
                <ScrollView contentContainerStyle={styles.container}>
                    {lists.map(this.renderCard)}
                </ScrollView>
            </View>
        );
    },
    renderCard(card, idx) {

        console.log("index of eleme", subscribedListsIds.indexOf(card.id));
        console.log("pross det123", this.props.recentFollowedUser);
        followed = checkOwnerIdinFollowList(followedListsIds, card.owner);
        console.log("569op in view result", followed);

        if (subscribedListsIds.indexOf(card.id) > -1)
            subscribed = true;
        else
            subscribed = false;

        return (<Card key={'feed ' + idx} card={card} track={idx} moving={this.moving} subscribed={subscribed} followed={followed} userSubscribeAction={this.userSubscribe} userFollowAction={this.userFollow} userAction={this.userLikeDislike} showProfile={() => this.showProfile(card.owner)}/>);
    },

    showProfile(owner) {
        Actions.profile({userId: owner});
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
