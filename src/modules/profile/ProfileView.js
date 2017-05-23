import React, {PropTypes} from 'react';
import {Actions} from 'react-native-router-flux';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import ProfileHeader from '../../components/profile/profileHeader/profileHeader';
import ProfileSummary from '../../components/profile/profileSummary/profileSummary';
import ProfileActions from '../../components/profile/profileActions/profileActions';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Card from '../../components/globals/card/card';
import List from '../../components/globals/list/list';

import * as Utils from '../../utils/Utils';

import * as ProfileState from './ProfileState';
import * as UserActions from '../../redux/user/userActions';
import * as ListActions from '../../redux/list/listActions';
import * as UIActions from '../../redux/ui/uiActions';

const ProfileView = React.createClass({
    propTypes: {},
    getInitialState() {
      return {}
    },
    componentWillMount() {
        if (Object.keys(Utils.toJS(this.props.user)).length == 0 && !this.props.userId) return Actions.intro();
        //this.props.dispatch(ListActions.getListbyRelationAction("subscribed"));
        this.loadOtherUserInfo();
    },

    componentDidUpdate() {
      this.loadOtherUserInfo();
    },

    renderChildren() {

        const {selectedTab, lists,userDetail} = this.props;
        console.log("iopo likes and collabs", this.props.userDetail.collabs);
        let userInfo = (this.props.userId)? Utils.toJS(this.props.userDetail).info : this.props.user;

        switch (selectedTab) {
            case 'lists':
            if(this.props.userDetail.lists){
              return (
                this.props.userDetail.lists.map((list, index) => (
                    <List
                      list={list}
                      user={this.props.userDetail.info}
                      moving={this.moving}
                      taxonomy={list.taxonomy}
                      key={'list ' + index}
                      index={index}
                      onSelectTaxonomy={this.onSelectTaxonomy}
                      userActionData={{type:'edit_list'}} />
                ))
              );
            }else{
              return(
                <View>
                <Text>There are No Lists yet.</Text>
                </View>


              );
            }

            break;
            case 'collabs':
            if(this.props.userDetail.collabs.length > 0){
              return(
                this.props.userDetail.collabs.map((list,index) =>(

                  <List
                    list={list}
                    user={userDetail.info}
                    taxonomy={list.taxonomy}
                    key={'list ' + index}
                    onSelectTaxonomy={this.onSelectTaxonomy}
                    userActionData={{type:'user_collabs'}}
                    ></List>

                )));


            }else{
              return(
                <View>
                <Text>There are No Collaborators yet.</Text>
                </View>
              );

            }
            break;
            case 'subscriptions':
              if(this.props.userDetail.subscriptions.length > 0){
                return (this.props.userDetail.subscriptions.map((list, index) => (

                    <List
                      list={list}
                      user={list.owner[0]}
                      taxonomy={list.taxonomy}
                      key={'list ' + index}
                      onSelectTaxonomy={this.onSelectTaxonomy}
                      userActionData={{type:'subscribe_unsubscribe'}}></List>
                )));

              }else{
                return(
                  <View>
                    <Text>There are No Subscriptions yet.</Text>
                  </View>
                );
              }
              break;
            case 'likes':
              if(this.props.userDetail.likes.length > 0){
                  return (this.props.userDetail.likes.map((fave, idx) => (<Card key={'fave ' + idx} card={fave} track={idx} moving={this.moving} increment={this.increment}/>)));
              }else{
                <View>
                  <Text>There are No Likes yet.</Text>
                </View>
              }
              break;
            case 'comments':
            if(userDetail.comments.length > 0){
              return (userDetail.comments.map((comment, idx) => (
                  <View style={styles.ProfileMessageContainer}>
                      <TouchableOpacity style={styles.ProfileMessageHeader}>
                        <Image
                            source={userDetail.info.image
                              ? {uri: userDetail.info.image}
                              : require('../../../images/default_list_picture.png')}
                            style={styles.ProfileMessageListPicture}
                        />
                        <Text style={styles.ProfileMessageListName}>{comment.list[0].name.toUpperCase()}</Text>
                      </TouchableOpacity>


                      <View style={styles.ProfileMessageBody}>
                     <View style={styles.ProfileMessageUserInfo}>
                         <Image style={styles.ProfileMessageAvatar} source={{
                             uri: userDetail.info.image
                         }}/>
                       <Text style={styles.ProfileMessageUsername}>{userDetail.info.displayname}</Text>
                     </View>
                     <Text style={styles.ProfileMessageMessage}>{comment.content}</Text>
                 </View>

                  </View>
              )));


            }else{
              <View>
                <Text> There are no comments yet.</Text>
              </View>
            }
                break;
            default:
                return null;
        }
    },

    setFilter(val,tab) {

        this.props.dispatch(UIActions.setViewTab(val, tab));
    },

    onPickProfileImage(){
        this.props.onPickProfileImage(
          this.onUploadingImage,
          this.onUploadedImage
        )
    },

    onUploadingImage(imageUri) {
        this.setState({
            uploadingProfileImage: imageUri
        })
    },

    onUploadedImage() {
        this.setState({
            uploadingProfileImage: null
        })
    },

    loadOtherUserInfo() {
        let thisUserId = this.props.user.favez ? this.props.user.favez.id : null;
        let userId = this.props.userId ? this.props.userId : thisUserId;
        if(this.props.lastFetchedUserId != userId)
          this.props.dispatch(UserActions.requestOtherUserInfo(userId));
    },

    isOtherUser(userId) {
        let thisUser = this.props.user.favez ? this.props.user.favez.id : false
        return this.props.userId && (this.props.userId != thisUser);
    },

    isFollowedUser() {
      let isFollowed = false;
      let userId = this.props.userId;
      this.props.followingUsers.forEach(function(user){
        if(user.id == userId) isFollowed = true;
      });
      return isFollowed;
    },

    exploreFriends(user) {
      let userId = user.auth0 ? user.favez.id : user.id;
      Actions.userFriends({userId});
    },

    onSelectTaxonomy(taxonomy) {
      Actions.search({taxonomy});
    },

    render() {

        console.log('PROFILE_VIEW_PROPS', this.props);

        const authIsSelf = this.isOtherUser() ? false : true;
        const user = this.isOtherUser() ? Utils.toJS(this.props.userDetail).info : this.props.user;
        const child = this.renderChildren();
        const {tabs, selectedTab} = this.props;
        const {uploadingProfileImage} = this.props;

        let thisUserId = this.props.user.favez ? this.props.user.favez.id : false;
        let renderContent = !this.props.userId || this.props.userId == Utils.toJS(this.props.userDetail).info.id || thisUserId == this.props.userId;

        return (
            <View style={styles.container}>
                <ProfileHeader/>
                { this.props.loading ? (
                      <View style={styles.loaderContainer}>
                        <ActivityIndicator style={styles.centered} />
                      </View>
                ) : renderContent ? (
                      <ScrollView>
                        <ProfileSummary
                          user={user}
                          onPickProfileImage={this.onPickProfileImage}
                          uploadingProfileImage={uploadingProfileImage}
                          exploreFriends={() => this.exploreFriends(user)}
                        />
                        <ProfileActions
                          self={authIsSelf}
                          followedUser={this.isFollowedUser()}/>
                        <HeaderTabs
                          view={'profileView'}
                          setFilter={this.setFilter}
                          selected={selectedTab}
                          tabs={tabs}/>
                        <View style={styles.contentContainer}>
                            {child}
                        </View>
                      </ScrollView>
                ) : null}
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    loaderContainer: {
      flex:1,
      alignItems: 'center'
    },
    centered: {
      flex: 1
    },
    contentContainer: {
        backgroundColor: '#e9e9e9',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
    ProfileMessageContainer: {
        flex: 1,
        width: 375,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        justifyContent: 'flex-start'
    },
    ProfileMessageHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    ProfileMessageListPicture: {
        width: 35,
        height: 35,
        borderRadius: 5
    },
    ProfileMessageListName: {
        marginLeft: 10,
        fontFamily: 'Hind-Bold',
        fontSize: 17
    },
    ProfileMessageBody: {
        flex: 1,
        marginTop: 5,
        backgroundColor: '#8cbf28',
        padding: 15,
        borderRadius: 12
    },
    ProfileMessageUserInfo: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    ProfileMessageAvatar: {
        width: 25,
        height: 25,
        borderRadius: 12
    },
    ProfileMessageUsername: {
        marginLeft: 5,
        fontFamily: 'Hind-Bold',
        fontSize: 15,
        color: 'white'
    },
    ProfileMessageMessage: {
        fontFamily: 'Hind-Regular',
        fontSize: 15,
        color: 'white'
    }
});

export default ProfileView;
