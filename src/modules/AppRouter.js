/*eslint-disable react/prop-types*/

import React from 'react';
import {Scene, Modal, Router} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import TabIcon from '../components/TabIcon';

import IntroViewContainer from './intro/IntroViewContainer';
import FeedViewContainer from './feed/FeedViewContainer';
import ListShowViewContainer from './list-show/ListShowViewContainer';
import FavoriteViewContainer from './favorite/FavoriteViewContainer';
import SearchViewContainer from './search/SearchViewContainer';
import NotificationViewContainer from './notification/NotificationViewContainer';
import ProfileViewContainer from './profile/ProfileViewContainer';
import LoginViewContainer from './login/LoginViewContainer';
import RegisterViewContainer from './register/RegisterViewContainer';
import SearchModalContainer from './modals/SearchModalContainer';


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: 'white',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: 'white',
  },
});

const NavigationView = React.createClass({

  render() {
    return (
      <Router>
        {/*<Scene key='modal' component={Modal} >*/}
          <Scene key='intro' title='Begin' >
            <Scene key='begin' component={IntroViewContainer} title='Intro' hideNavBar />
            <Scene key='login' component={LoginViewContainer} title='Login' hideNavBar />
            <Scene key='register' component={RegisterViewContainer} title='Register' hideNavBar />
            {/*<Scene key='verify' component={VerifyViewContainer} title='verify' hideNavBar />*/}
            {/*<Scene key='reset' component={ResetViewContainer} title='Reset' hideNavBar />*/}
          </Scene>
          <Scene key='tabbar' >
            <Scene
              key='main'
              tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            >
              <Scene key='feed' component={FeedViewContainer} title='Feed' initial={true} icon={TabIcon} display='featured-play-list' hideNavBar/>
              <Scene key='search' component={SearchViewContainer} title='Search' icon={TabIcon} display='search' hideNavBar/>
              <Scene key='favorite' component={FavoriteViewContainer} title='Favorite' icon={TabIcon} display='ios-heart' hideNavBar/>
              <Scene key='notification' component={NotificationViewContainer} title='Notice' icon={TabIcon} display='bell' hideNavBar/>
              <Scene key='profile' component={ProfileViewContainer} title='Profile' icon={TabIcon} display='emoji-happy' hideNavBar/>
              <Scene key='popsearch' component={ProfileViewContainer} title='Profile' hideNavBar/>
            </Scene>
          </Scene>
          <Scene key='subbar'>
            <Scene
              key='secondary'
              tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            >
              <Scene key='share' component={NotificationViewContainer} title='Share' icon={TabIcon} display='share' hideNavBar/>
              <Scene key='bookmark' component={ListShowViewContainer} title='BookMark' initial={true} display='bookmark-plus-outline' icon={TabIcon} hideNavBar/>
              <Scene key='message' component={FavoriteViewContainer} title='Message' icon={TabIcon} display='message-text' hideNavBar/>
            </Scene>
          </Scene>
          <Scene key='searchModal' component={SearchModalContainer} />
        {/*</Scene>*/}
      </Router>
    );
  }
});

export default NavigationView;
