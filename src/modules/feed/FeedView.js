import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as UIActions from '../../redux/ui/uiActions';
import {View, ScrollView, StyleSheet,Alert} from 'react-native';
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
        console.log('id of list: ', idx)
        this.props.dispatch(ListActions.getDetailedList(idx)).then(() => Actions.listShow());
    },
    userLikeDislike(action,id) {
        console.log("User Like Dislike Clicked.. ListShowMove ");
        console.log("action",action);
        console.log("id",id);
        if(action=="like"){
          console.log("do a like req");
          this.props.dispatch(ListActions.sendListLikeDislike(id));
        }else{
//          console.log("not like action..");
        }
        // Alert.alert(action);
        // Alert.alert(id);
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
        const {lists} = this.props;
        // const ds = this.state.dataSource;
        return (
            <View style={{
                flex: 1
            }}>
                {this.renderModal()}
                <FeedHeader toggleContextMenu={this.toggleContextMenu}/>
                <ScrollView contentContainerStyle={styles.container}>
                    {lists.map((card, idx) => (<Card key={'feed ' + idx} card={card} track={idx} moving={this.moving} userAction={this.userLikeDislike}/>))}
                </ ScrollView>
            </View>
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
