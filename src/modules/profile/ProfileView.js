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

import * as ProfileState from './ProfileState';
import * as UserActions from '../../redux/user/userActions';
import * as ListActions from '../../redux/list/listActions';
import * as ViewUtil from '../../utils/viewUtil';

const ProfileView = React.createClass({
    propTypes: {},
    getInitialState() {
        return { selected: 'lists' };
    },

    componentWillMount() {
        // this.props.dispatch(ListActions.getFullList());
        if (!this.props.user.favez || !this.props.otherUser) {
            Actions.intro()
        } else {
            this.props.dispatch(ListActions.getListbyRelationAction("subscribed"));
        }
    },

    componentDidMount() {},

    componentDidUpdate() {
      this.loadUserProfile();
    },

    renderChildren() {
        let userData = (this.props.userId)? this.props.otherUser : this.props.user;
        console.log('PROFILE_VIEW_PROPS', this.props);
        console.log('PROFILE_VIEW_USER_DATA', userData);
        switch (this.state.selected) {
            case 'lists':
            break;
            case 'collabs':
            break;
            case 'subscriptions':

                <Text>Subscribed list of yours will come over here: </Text>
                return (this.props.subscribedlists.map((list, index) => (

                    <List list={list} creator={userData} key={'list ' + index}></List>
                )));
                break;
            case 'likes':

                return (this.props.favez.map((fave, idx) => (<Card key={'fave ' + idx} card={fave} track={idx} moving={this.moving} increment={this.increment}/>)));
                break;
            case 'comments':
                return (this.props.comments.map((comment, idx) => (
                    <View style={styles.ProfileMessageContainer}>
                        <TouchableOpacity style={styles.ProfileMessageHeader}>
                            <Image style={styles.ProfileMessageListPicture} source={{
                                uri: comment.listPicture
                            }}/>
                            <Text style={styles.ProfileMessageListName}>{comment.listSource.toUpperCase()}</Text>
                        </TouchableOpacity>
                        <View style={styles.ProfileMessageBody}>
                            <View style={styles.ProfileMessageUserInfo}>
                                <Image style={styles.ProfileMessageAvatar} source={{
                                    uri: comment.avatar
                                }}/>
                                <Text style={styles.ProfileMessageUsername}>{comment.user}</Text>
                            </View>
                            <Text style={styles.ProfileMessageMessage}>{comment.message}</Text>
                        </View>
                    </View>
                )));
                break;
            default:
                return null;
        }
    },

    setFilter(val,tab) {

      this.setState({selected: tab})
        this.props.dispatch(ProfileState.setFilter(val));
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

    loadUserProfile() {
        if( this.props.userId &&
            this.props.user.favez.id != this.props.userId &&
            this.props.userId != this.props.otherUser.id
        ) this.props.dispatch(UserActions.loadUserProfile(this.props.userId));
    },

    isOtherUser(userId) {
      return this.props.userId && (this.props.userId != this.props.user.favez.id);
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

    render() {
        const authIsSelf = this.isOtherUser() ? false : true;
        const user = this.isOtherUser() ? this.props.otherUser : this.props.user;
        const child = this.renderChildren();
        const selectedTab = this.state.selected;
        const {uploadingProfileImage} = this.state

        let renderContent = !this.props.userId || this.props.userId == this.props.otherUser.id || this.props.user.favez.id == this.props.userId;

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
                        <HeaderTabs setFilter={this.setFilter} selected={selectedTab} tabs={['lists', 'collabs', 'subscriptions', 'likes', 'comments']}/>
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
