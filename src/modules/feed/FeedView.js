import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as UIActions from '../../redux/ui/uiActions';
<<<<<<< HEAD
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Card from '../../components/globals/card/card';
import FeedHeader from '../../components/feed/feedHeader/feedHeader';
import ContextMenu from '../../modules/modals/contextMenu/contextMenu';
import * as FavezActions from '../../redux/fave/faveActions';
import {showSubscribedlists} from '../../utils//timeUtils';

const subscribedListsIds=[];

const FeedView = React.createClass({
    propTypes: {},
    componentWillMount() {
        this.props.dispatch(ListActions.getFullList());
        this.props.dispatch(ListActions.getMyLists());
        this.props.dispatch(FavezActions.getSelffavez());
        this.props.dispatch(ListActions.getListbyRelationAction("subscribed"));

    },
    componentDidMount() {},

    moving(idx) {
        console.log('id of list: ', idx)
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
            console.log("do a subscribition request..");
            this.props.dispatch(ListActions.createlistRelationAction(action, 2));

        }
        if (id == "unsubscribe") {
            this.props.dispatch(ListActions.deleteListRelationAction(action, 2));
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
        const {lists, subscribedlists} = this.props;
        // const ds = this.state.dataSource;
        if (lists.length > 0 && subscribedlists.length > 0) {

            console.log("listsvhuhv hvfuh ", lists);
            console.log("Unsubscribed list...", subscribedlists);
            subscribedListsIds=showSubscribedlists(lists, subscribedlists);
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
    renderCard(card, idx){

console.log("index of eleme",subscribedListsIds.indexOf(card.id));
if(subscribedListsIds.indexOf(card.id) >-1)
subscribed=true;
else subscribed= false;
console.log("card id ", card.id);
console.log("subsc d", subscribedListsIds);
console.log("subsctibe status", subscribed);
      return(
        <Card key={'feed ' + idx}
          card={card}
          track={idx}
          moving={this.moving}
          subscribed={subscribed}
          userSubscribeAction={this.userSubscribe}
          userAction={this.userLikeDislike}/>
      );
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
