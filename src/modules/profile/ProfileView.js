import React, {PropTypes} from 'react';
import * as ProfileState from './ProfileState';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    StyleSheet
} from 'react-native';
import * as UserActions from '../../redux/user/userActions';
import ProfileHeader from '../../components/profile/profileHeader/profileHeader';
import ProfileSummary from '../../components/profile/profileSummary/profileSummary';
import ProfileActions from '../../components/profile/profileActions/profileActions';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Card from '../../components/globals/card/card';
import List from '../../components/globals/list/list';
import * as ListActions from '../../redux/list/listActions';
var ImagePicker = require('react-native-image-picker');
import * as cloudinary from '../../services/cloudinary'

const ProfileView = React.createClass({
    propTypes: {},
    getInitialState() {
        return { selected: 'lists' };
      },


    componentWillMount() {

        console.log('happens after please');
         this.props.dispatch(UserActions.requestUserInfo());
         console.log("happens two");
          this.props.dispatch(ListActions.getListbyRelationAction("subscribed"));

    },

    renderChildren() {
        console.log("selectec", this.props.selected);
        switch (this.state.selected) {
            case 'lists':
            break;
            case 'collabs':
            break;
            case 'subscriptions':
                Alert.alert("Subscriptions tab Called....   ");
                console.log('your list', this.props.user);
                <Text>Subscribed list of yours will come over here: </Text>
                return (this.props.subscribedlists.map((list, index) => (

                    <List list={list} creator={this.props.user} key={'list ' + index}></List>
                )));
                break;
            case 'likes':
            Alert.alert("Hello Likes.. ");
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

      Alert.alert(this.props.selected);
      this.setState({selected: tab})
        this.props.dispatch(ProfileState.setFilter(val));
    },

    pickImageForProfile(){
        var options = {
          title: 'Select Avatar',
          customButtons: [],
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        };
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: 'data:image/jpeg;base64,' + response.data }//{ uri: response.uri };

            cloudinary.uploadImage(source.uri).then((data) => {
              const {url} = data

              //TODO handle url

              this.setState({
                uploadImageStatus: 'done'
              })
            })

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
              uploadImageStatus: 'uploading',
              selectProfileImage: true,
              avatarSource: source
            });
          }
        });
    },

    render() {
        const authIsSelf = true;
        const {user} = this.props;
        const child = this.renderChildren();
        const selectedTab = this.state.selected;
        const {
          avatarSource, 
          selectProfileImage,
          uploadImageStatus
        } = this.state
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ProfileHeader/>
                    <ProfileSummary
                      user={user}
                      avatarSource={avatarSource}
                      uploadImageStatus={uploadImageStatus}
                      selectProfileImage={selectProfileImage}
                      onPickImageForProfile={this.pickImageForProfile}
                    />
                    <ProfileActions self={authIsSelf}/>
                    <HeaderTabs setFilter={this.setFilter} selected={selectedTab} tabs={['lists', 'collabs', 'subscriptions', 'likes', 'comments']}/>
                    <View style={styles.contentContainer}>
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
