import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  NOTIFICATION_GET_MY_NOTIFS_REQUEST,
  NOTIFICATION_GET_MY_NOTIFS_SUCCESS,
  NOTIFICATION_GET_MY_NOTIFS_FAILURE,
  NOTIFICATION_GET_MY_INVITES_REQUEST,
  NOTIFICATION_GET_MY_INVITES_SUCCESS,
  NOTIFICATION_GET_MY_INVITES_FAILURE,
  requestGetNotifs,
  requestGetInvites
} from './notificationActions';

// Initial state
const initialState = fromJS({
  myNotifs: [],
  myInvites: [],
  // current: {},
  loading: true,
  error: {}
});

// Reducer
export default function NotificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NOTIFICATION_GET_MY_NOTIFS_REQUEST:
      console.log('Notification GET_MY_NOTIFS request');
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestGetNotifs(action.payload))
      );
    case NOTIFICATION_GET_MY_NOTIFS_SUCCESS:
      console.log('SUCCESS', action);
      return state
        .set('loading', false)
        .set('myNotifs', action.payload);
    case NOTIFICATION_GET_MY_INVITES_REQUEST:
      console.log('Notification GET_MY_INVITES request');
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestGetInvites(action.payload))
      );
    case NOTIFICATION_GET_MY_INVITES_SUCCESS:
      console.log('SUCCESS', action);
      return state
        .set('loading', false)
        .set('myInvites', action.payload);
    case NOTIFICATION_GET_MY_NOTIFS_FAILURE:
    case NOTIFICATION_GET_MY_INVITES_FAILURE:
      console.log('ERROR', action);
      return state
        .set('loading', false)
        .set('ERROR', action);
    default:
      return state;
  }
}
