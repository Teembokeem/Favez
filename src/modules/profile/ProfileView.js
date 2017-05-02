import React, {PropTypes} from 'react';
import * as ProfileState from './ProfileState';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import * as UserActions from '../../redux/user/userActions';
import ProfileHeader from '../../components/profile/profileHeader/profileHeader';
import ProfileSummary from '../../components/profile/profileSummary/profileSummary';
import ProfileActions from '../../components/profile/profileActions/profileActions';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Card from '../../components/globals/card/card';
import List from '../../components/globals/list/list';
// import List from '../../components/globals/list/list';

const ProfileView = React.createClass({
  propTypes: {},
  componentWillMount() {
    console.log('happens after please');
    return this.props.dispatch(UserActions.requestUserInfo());
  },

  renderChildren() {
    switch (this.props.selected) {
      case 'lists':
      case 'collabs':
      case 'subscriptions':
        console.log('your list', this.props.lists, 'and users :', this.props.user);
        return (
          this.props.lists.map((list, index) => (
            <List
              list={list}
              creator={this.props.user}
              key={'list ' + index}
            >

            </List>
          ))
        );
      case 'likes':
        return (
          this.props.favez.map((fave, idx) => (
            <Card
                key={'fave ' + idx}
                card={fave}
                track={idx}
                moving={this.moving}
                increment={this.increment}
            />
          ))
        );
      case 'comments':
        return (
          this.props.comments.map((comment, idx) => (
            <View style={styles.ProfileMessageContainer}>
              <TouchableOpacity style={styles.ProfileMessageHeader}>
                <Image style={styles.ProfileMessageListPicture} source={{uri: comment.listPicture}}/>
                <Text style={styles.ProfileMessageListName}>{comment.listSource.toUpperCase()}</Text>
              </TouchableOpacity>
              <View style={styles.ProfileMessageBody}>
                  <View style={styles.ProfileMessageUserInfo}>
                    <Image style={styles.ProfileMessageAvatar} source={{uri: comment.avatar}}/>
                    <Text style={styles.ProfileMessageUsername}>{comment.user}</Text>
                  </View>
                  <Text style={styles.ProfileMessageMessage}>{comment.message}</Text>
              </View>
            </View>
          ))
        );
      default :
        return null;
    }
  },

  setFilter(val) {
    this.props.dispatch(ProfileState.setFilter(val));
  },

  render() {
    const authIsSelf = true;
    const {user} = this.props; 
    const child = this.renderChildren();
    const selectedTab = this.props.selected;
    return (
      <View style={styles.container}>
        <ScrollView>
          <ProfileHeader />
          <ProfileSummary user={user}/>
          <ProfileActions self={authIsSelf}/>
          <HeaderTabs
            setFilter={this.setFilter}
            selected={selectedTab}
            tabs={['lists', 'collabs', 'subscriptions', 'likes', 'comments']}
          />
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
    paddingBottom: 50,
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
