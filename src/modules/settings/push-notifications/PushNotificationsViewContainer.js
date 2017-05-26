import {
  connect
} from 'react-redux';
import PushNotificationsView from './PushNotificationsView';

export default connect(
  state => {
    return {
      user: state.getIn(['user','user']),
      notificationSettings: state.getIn(['user', 'settings', 'pushNotifications'])
    };
  }
)(PushNotificationsView);
