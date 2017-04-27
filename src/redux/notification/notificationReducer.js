import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  NOTIFICATION_GET_MY_NOTIFS_REQUEST,
  NOTIFICATION_GET_MY_NOTIFS_SUCCESS,
  NOTIFICATION_GET_MY_NOTIFS_FAILURE,
  requestGetNotifs
} from './notificationActions';

// Initial state
const initialState = fromJS({
  myNotifs: [],
  // current: {},
  loading: true,
  error: {}
});

// Reducer
export default function NotificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NOTIFICATION_GET_MY_NOTIFS_REQUEST:
      console.log('Notification GET_MY_Notifs request');
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestGetNotifs(action.payload))
      );
    case NOTIFICATION_GET_MY_NOTIFS_SUCCESS:
      console.log('SUCCESS', action);
      return state
        .set('loading', false)
        .set('myNotifs', action.payload.data);
    case NOTIFICATION_GET_MY_NOTIFS_FAILURE:
      console.log('ERROR', action);
      return state.set('ERROR', action);
    default:
      return state;
  }
}
