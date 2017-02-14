/*eslint-disable react/prop-types*/

import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import TabIcon from '../components/TabIcon';

import IntroViewContainer from './intro/IntroViewContainer';
import FeedViewContainer from './feed/FeedViewContainer';
import FavoriteViewContainer from './favorite/FavoriteViewContainer';
import SearchViewContainer from './search/SearchViewContainer';
import NotificationViewContainer from './notification/NotificationViewContainer';
import ProfileViewContainer from './profile/ProfileViewContainer';


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const NavigationView = React.createClass({

  render() {
    return (
      <Router>
        <Scene key='intro' title='Begin' >
          <Scene key='begin' component={IntroViewContainer} title='Intro' />
        </Scene>
        <Scene key='tabbar' initial={true}>
          <Scene
            key='main'
            tabs
            tabBarStyle={styles.tabBarStyle}
            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
          >
            <Scene key='feed' component={FeedViewContainer} title='Feed' initial={true} icon={TabIcon} hideNavBar/>
            <Scene key='search' component={SearchViewContainer} title='Search' icon={TabIcon} hideNavBar/>
            <Scene key='favorite' component={FavoriteViewContainer} title='Favorite' icon={TabIcon} hideNavBar/>
            <Scene key='notification' component={NotificationViewContainer} title='Notice' icon={TabIcon} hideNavBar/>
            <Scene key='profile' component={ProfileViewContainer} title='Profile' icon={TabIcon} hideNavBar/>
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
            <Scene key='share' component={NotificationViewContainer} title='Share' icon={TabIcon} hideNavBar/>
            <Scene key='bookmark' component={SearchViewContainer} title='BookMark' initial={true} icon={TabIcon} hideNavBar/>
            <Scene key='message' component={FavoriteViewContainer} title='Message' icon={TabIcon} hideNavBar/>
          </Scene>
        </Scene>
      </Router>
    );
  }
});

export default NavigationView;
