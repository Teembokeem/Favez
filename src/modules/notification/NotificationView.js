import React, {PropTypes} from 'react';
import * as NotificationState from './NotificationState';
import {
  View,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as NotificationActions from '../../redux/notification/notificationActions';
import * as UIActions from '../../redux/ui/uiActions';
import NotificationHeader from '../../components/notification/notificationHeader/notificationHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Invitation from '../../components/notification/invitation/invitation';
import Alerts from './Alerts.js'
const NotificationView = React.createClass({
  propTypes: {},

  _componentWillMount() {
    // console.log('hello', this.props);
    this.props.dispatch(NotificationActions.getNotifs()).then(
      this.props.dispatch(NotificationActions.getInvites())
    );
  },

  showNotifications() {
    switch (this.props.selectedTab) {
      case 'alerts':
        return <Alerts alerts={this.props.notifications}/>
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
        <View>
          <HeaderTabs
            view={'notification'}
            setFilter={this.setFilter}
            selected={selectedTab}
            tabs={tabs}/>
        </View>
        <View style={{flex: 1}}>
          {this.showNotifications()}
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'flex-end'
  },
  contentContainer: {
    flex: 1
  }
});

export default NotificationView;
