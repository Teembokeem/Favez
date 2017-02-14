/*eslint-disable react/prop-types*/

import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import TabIcon from '../components/TabIcon';

import CounterViewContainer from './counter/CounterViewContainer';
import IntroViewContainer from './intro/IntroViewContainer';
// import ColorViewContainer from './colors/ColorViewContainer';
import FeedViewContainer from './feed/FeedViewContainer';
import TabsViewContainer from './tabs/TabsViewContainer';
// import FavoriteViewContainer from './favorite/FavoriteViewContainer';
import SearchViewContainer from './search/SearchViewContainer';
// import NotificationViewContainer from './notification/NotificationViewContainer';
// import ProfileViewContainer from './profile/ProfileViewContainer';


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
        <Scene key='intro' title='Begin' initial={true}>
          <Scene key='begin' component={IntroViewContainer} title='Intro'/>
        </Scene>
        <Scene key='tabbar'>
          <Scene key='main'
            tabs
            tabBarStyle={styles.tabBarStyle}
            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            >
            <Scene key='feed' component={FeedViewContainer} title='Counter' icon={TabIcon} />
            <Scene key='counter' component={CounterViewContainer} title='Feed' initial={true} 
            icon={TabIcon} />
            <Scene key='search' component={SearchViewContainer} icon={TabIcon} />
          </Scene>
        </Scene>
      </Router>
    );
  }
});

export default NavigationView;
