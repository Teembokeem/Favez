/*eslint-disable react/prop-types*/

import React from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import TabIcon from '../components/TabIcon';

import SplashViewContainer from './splash/SplashViewContainer';
import IntroViewContainer from './intro/IntroViewContainer';
import FeedViewContainer from './feed/FeedViewContainer';
import ListShowViewContainer from './list-show/ListShowViewContainer';
import FavoriteViewContainer from './favorite/FavoriteViewContainer';
import SearchViewContainer from './search/SearchViewContainer';
import NotificationViewContainer from './notification/NotificationViewContainer';
import ProfileViewContainer from './profile/ProfileViewContainer';
import InvitePeople from './profile/containers/InvitePeople';
import UserFriendsView from './profile/containers/UserFriends';
import EditProfileViewContainer from './edit-profile/EditProfileViewContainer';
import LoginViewContainer from './login/LoginViewContainer';
import RegisterViewContainer from './register/RegisterViewContainer';
import SearchModalContainer from './modals/searchModal/searchModalContainer';
import CreateListViewContainer from './create-list/CreateListViewContainer';
import AddCollaboratorsViewContainer from './add-collaborators/AddCollaboratorsViewContainer';
import SearchCollaboratorsViewContainer from './search-collaborators/SearchCollaboratorsViewContainer';
import MoreOptionsViewContainer from './more-options/MoreOptionsViewContainer';
import TopicsSelectorViewContainer from './topics-selector/TopicsSelectorViewContainer';
import AddFaveBrowseViewContainer from './add-fave-browse/AddFaveBrowseViewContainer';
import AddFaveFormViewContainer from './add-fave-form/AddFaveFormViewContainer';
import ContactList from './profile/containers/ContactList.js';
import ManageFeedList from './profile/containers/ManageFeed';
import ManageBlock from './profile/containers/ManageBlock';
import ListCommentsContainer from './list-comments/ListCommentContainer';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarStyle: {
    backgroundColor: 'white'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: 'white'
  }
});

const NavigationView = React.createClass({

  render() {
    return (
      <Router>

          <Scene key='splash' initial={true} component={SplashViewContainer} hideNavBar />
          <Scene key='intro' title='Begin' type={ActionConst.RESET}>
            <Scene key='begin' component={IntroViewContainer} title='Intro' hideNavBar />
            <Scene key='login' component={LoginViewContainer} title='Login' hideNavBar />
            <Scene key='register' component={RegisterViewContainer} title='Register' hideNavBar />
          </Scene>
          <Scene key='tabbar' >
            <Scene
              key='main'
              tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            >
              <Scene key='feed' title='Feed' icon={TabIcon} display='featured-play-list'>
                <Scene key='feedIndex' component={FeedViewContainer} title='Feed' hideNavBar={true} hideTabBar={false}/>
                                <Scene key='ManageFeedList' component={ManageFeedList} hideTabBar={true}/>
                                  <Scene key='ManageBlock' component={ManageBlock} hideTabBar={true}/>

                <Scene key='searchModal' component={SearchModalContainer} hideTabBar={true}/>
                <Scene
                  key='listShow'
                  hideNavBar={true}
                >
                  <Scene key='listShowIndex' component={ListShowViewContainer} hideTabBar={true}/>
                </Scene>
                <Scene
                  key='createList'
                  hideNavBar={true}
                  hideTabBar={true}
                >
                  <Scene key='createListIndex' component={CreateListViewContainer} />
                  <Scene key='moreOptions' component={MoreOptionsViewContainer}/>
                  <Scene key='addCollaborators' component={AddCollaboratorsViewContainer}/>
                  <Scene key='searchCollaborators' component={SearchCollaboratorsViewContainer}/>
                  <Scene key='topicSelector' component={TopicsSelectorViewContainer}/>
                </Scene>
                <Scene
                  key='addFaveBrowse'
                  hideNavBar={true}
                  hideTabBar={true}
                >
                  <Scene key='addFaveBrowseIndex' component={AddFaveBrowseViewContainer} />
                </Scene>
                <Scene
                  key='addFaveForm'
                  hideNavBar={true}
                  hideTabBar={true}
                >
                  <Scene key='addFaveFormIndex' component={AddFaveFormViewContainer} />
                  {/*[TD3a]*/}
                </Scene>
              </Scene>
              <Scene key='search' component={SearchViewContainer} title='Search' icon={TabIcon} display='search' hideNavBar/>
              <Scene key='favorite' component={FavoriteViewContainer} title='Favorite' icon={TabIcon} display='ios-heart' hideNavBar/>
              <Scene key='notification' component={NotificationViewContainer} title='Notice' icon={TabIcon} display='bell' hideNavBar/>
              <Scene key='profile' title='Profile' icon={TabIcon} display='emoji-happy'>
                <Scene key='profileIndex' component={ProfileViewContainer} title='Profile' hideNavBar={true} hideTabBar={false}/>
                <Scene key='editProfile' component={EditProfileViewContainer} title='Edit Profile' hideNavBar={true} hideTabBar={true}/>
                <Scene key='invitePeople' component={InvitePeople} title="Invite People" hideNavBar={true} hideTabBar={true}/>
                <Scene key='contactList' component={ContactList} title="Contact list" hideNavBar={true} hideTabBar={true}/>
                <Scene key='userFriends' component={UserFriendsView} title="Your Friends" hideNavBar={true} hideTabBar={true}/>
              </Scene>
              <Scene key='popsearch' component={ProfileViewContainer} title='Profile' hideNavBar/>
            </Scene>
          </Scene>
          <Scene key='listComments' component={ListCommentsContainer} title="Comment on List" hideNavBar />
      </Router>
    );
  }
});

export default NavigationView;
