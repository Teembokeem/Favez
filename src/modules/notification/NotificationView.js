import React, {PropTypes} from 'react';
import * as NotificationState from './NotificationState';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as NotificationActions from '../../redux/notification/notificationActions';
import NotificationHeader from '../../components/notification/notificationHeader/notificationHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Notification from '../../components/notification/notification/notification';

const NotificationView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // console.log('hello', this.props);
    this.props.dispatch(NotificationActions.getNotifs());
  },
  moveIntro() {
    Actions.intro();
  },

  setFilter(val) {
    this.props.dispatch(NotificationState.setFilter(val));
  },

  render() {
    console.log('HI props', this.props);
    const {notifications, selectedTab, tabs} = this.props;
    return (
      <View style={styles.container}>
        <NotificationHeader />
        <Header title={'Notifications'}/>
        <HeaderTabs
          setFilter={this.setFilter}
          selected={selectedTab}
          tabs={tabs}/>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          {notifications.map((notification, index) => (
            <Notification
              key={'notification ' + index}
              notification={notification}
            />
          ))}
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
