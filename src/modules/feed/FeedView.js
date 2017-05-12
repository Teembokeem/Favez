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
import {showSubscribedlists} from '../../utils//timeUtils';
import {showFollowedlists} from '../../utils/timeUtils';

const subscribedListsIds = [];
const followedListsIds= [];
const FeedView = React.createClass({
    propTypes: {},
    componentWillMount() {
        // console.log("prrr", this.props.user.favez.id);
        this.props.dispatch(ListActions.getFullList());
        this.props.dispatch(ListActions.getMyLists());
        this.props.dispatch(FavezActions.getSelffavez());
        this.props.dispatch(ListActions.getListbyRelationAction("subscribed"));
        // this.props.dispatch(userActions.getlistofuserfolowingAction(this.props.user.favez.id));

    },
    componentDidMount() {},

    moving(idx) {
        this.props.dispatch(ListActions.getDetailedList(idx)).then(() => Actions.listShow());
    },
    userLikeDislike(action, id) {
        if (action == "like") {

            this.props.dispatch(ListActions.sendListLikeDislike(id));
        } else {
            //          console.log("not like action..");
        }
        // Alert.alert(action);
        // Alert.alert(id);
    },
    userSubscribe(id, action) {
        if (id == "subsrciptions") {
            this.props.dispatch(ListActions.createlistRelationAction(action, 2));

        }
        if (id == "unsubscribe") {
            this.props.dispatch(ListActions.deleteListRelationAction(action, 2));
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
        // const ds = this.state.dataSource;
        if (lists.length > 0 && subscribedlists.length > 0) {

            subscribedListsIds = showSubscribedlists(lists, subscribedlists);
        }
        if( followedusers.length > 0){
          followedListsIds = showFollowedlists(lists,followedusers);
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

        if (subscribedListsIds.indexOf(card.id) > -1)
            subscribed = true;
        else
            subscribed = false;
            if(followedListsIds.indexOf(card.owner)> -1 || (this.props.recentFollowedUser.status==true && this.props.recentFollowedUser.id==card.owner))
            followed = true;
            else
            followed = false;

        return (<Card key={'feed ' + idx} card={card} track={idx} moving={this.moving} subscribed={subscribed} followed={followed} userSubscribeAction={this.userSubscribe} userFollowAction={this.userFollow} userAction={this.userLikeDislike}/>);
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
