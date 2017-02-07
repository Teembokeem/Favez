/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import IntroViewContainer from './intro/IntroViewContainer';
import ColorViewContainer from './colors/ColorViewContainer';
import FeedViewContainer from './feed/FeedViewContainer';
import FavoriteViewContainer from './favorite/FavoriteViewContainer';
import SearchViewContainer from './search/SearchViewContainer';
import NotificationViewContainer from './notification/NotificationViewContainer';
import ProfileViewContainer from './profile/ProfileViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;
  console.log("THIS IS THE KEY", key)

  // if (key === 'Counter') {
  //   return <CounterViewContainer />;
  // }

  if (key === 'Intro') {
    return <IntroViewContainer />;
  }

  /*if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer
        index={index}
      />
    );
  }*/

  if (key.indexOf('Feed') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <FeedViewContainer
        index={index}
      />
    );
  }

  if (key.indexOf('Favorite') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <FavoriteViewContainer
        index={index}
      />
    );
  }

  if (key.indexOf('Search') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <SearchViewContainer
        index={index}
      />
    );
  }

  if (key.indexOf('Notification') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <NotificationViewContainer
        index={index}
      />
    );
  }

  if (key.indexOf('Profile') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ProfileViewContainer
        index={index}
      />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
