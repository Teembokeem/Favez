import React, {PropTypes} from 'react';
import * as NotificationState from './NotificationState';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as NotificationActions from '../../redux/notification/notificationActions';
import * as UIActions from '../../redux/ui/uiActions';
import NotificationHeader from '../../components/notification/notificationHeader/notificationHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Notification from '../../components/notification/notification/notification';
import Invitation from '../../components/notification/invitation/invitation';

const NotificationView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // console.log('hello', this.props);
    this.props.dispatch(NotificationActions.getNotifs()).then(
      this.props.dispatch(NotificationActions.getInvites())
    );
  },

  showNotifications() {
    switch (this.props.selectedTab) {
      case 'alerts':
        return this.props.notifications.map((notification, index) => (
          <Notification
            key={'notification ' + index}
            notification={notification}
          />
        ));
      case 'invitiations':
      default:
        return this.props.invites.map((invite, idx) => (
         <Invitation
          key={'invitation ' + idx}
          invitation={invite}
         />
       ));
    }
  },
  moveIntro() {
    Actions.intro();
  },

  setFilter(view, tab) {
    console.log('view tab', view, tab)
    this.props.dispatch(UIActions.setViewTab('notification', tab));
  },

  render() {
    console.log('HI props', this.props);
    const {notifications, invites, selectedTab, tabs} = this.props;
    return (
      <View style={styles.container}>
        <NotificationHeader />
        <Header title={'Notifications'}/>
        <HeaderTabs
          view={'notification'}
          setFilter={this.setFilter}
          selected={selectedTab}
          tabs={tabs}/>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          {this.showNotifications()}
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'flex-end'
  }
});

export default NotificationView;
