import {connect} from 'react-redux';
import NotificationView from './NotificationView';
import {
  acceptInvitation,
  rejectInvitation
} from '../../redux/notification/notificationActions'
import * as ListActions from '../../redux/list/listActions';
import {Actions} from 'react-native-router-flux';

export default connect(state => ({
  notifications: state.getIn(['notification', 'myNotifs']).toJS(),
  invites: state.getIn(['notification', 'myInvites']).toJS(),
  loading: state.getIn(['search', 'loading']),
  tabs: state.getIn(['ui', 'notification', 'tabs', 'set']).toJS(),
  selectedTab: state.getIn(['ui', 'notification', 'tabs', 'selected'])
}), dispatch => ({
  dispatch,
  onAcceptInvitation: (id) => dispatch(acceptInvitation(id)),
  onRejectInvitation: (id) => dispatch(rejectInvitation(id)),
  onPressRedirectToList: (listId) => {
    if (!listId) {
      console.warn('No list id found.')
      return
    }
    dispatch(ListActions.getDetailedList(listId))
    .then(() => Actions.listShow())
  }
}))(NotificationView)
