import {connect} from 'react-redux';
import NotificationView from './NotificationView';

function findSubset(subSetType) {
  switch (subSetType) {
    case 'alerts':
      return ['follow', 'unfollow', 'invitation_accept', 'invitation_decline', 'comment', 'favez_like', 'new_user'];
    case 'invitations':
      return ['invitation_request'];
    default:
      return null;
  }
}

export default connect(
  state => {
    const filteredNotifications = state.getIn(['notification', 'notifications']).get('data').toJS().filter((notification) => {
      return findSubset(state.getIn(['notification', 'selected'])).indexOf(notification.type) !== -1;
    });
    return {
      notifications: filteredNotifications,
      selected: state.getIn(['notification', 'selected']),
      loading: state.getIn(['search', 'loading'])
    };
  }
)(NotificationView);
