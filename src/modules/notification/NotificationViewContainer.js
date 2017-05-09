import {connect} from 'react-redux';
import NotificationView from './NotificationView';
import {
  acceptInvitation,
  rejectInvitation
} from '../../redux/notification/notificationActions'

export default connect(state => ({
  notifications: state.getIn(['notification', 'myNotifs']).toJS(),
  invites: state.getIn(['notification', 'myInvites']).toJS(),
  loading: state.getIn(['search', 'loading']),
  tabs: state.getIn(['ui', 'notification', 'tabs', 'set']).toJS(),
  selectedTab: state.getIn(['ui', 'notification', 'tabs', 'selected'])
}), dispatch => ({
  dispatch,
  onAcceptInvitation: (id) => dispatch(acceptInvitation(id)),
  onRejectInvitation: (id) => dispatch(rejectInvitation(id))
}))(NotificationView)
