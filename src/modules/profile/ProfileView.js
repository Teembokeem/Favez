import React, {PropTypes} from 'react';
import * as ProfileState from './ProfileState';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import ProfileHeader from '../../components/profile/profileHeader/profileHeader';
import ProfileSummary from '../../components/profile/profileSummary/profileSummary';
import ProfileActions from '../../components/profile/profileActions/profileActions';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Card from '../../components/globals/card/card';
import List from '../../components/globals/list/list';

const ProfileView = React.createClass({
  propTypes: {},

  renderChildren() {
    switch (this.props.selected) {
      case 'lists':
        return (
          this.props.lists.map((list, index) => (
            <List
              list={list}
              key={'list ' + index}
            >

            </List>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProfileView;
