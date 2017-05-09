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

let sampleNotifs = []
/* Use this data to test notification components
sampleNotifs = [
  {
    type: 1,
    fromUserAvatar: 'testimg.png',
    rightImage: 'rightImgSample.png',
    userName: 'h3h3',
    listRef: 'MY FAVORITE GAMES',
    timeAgo: '2m'
  },
  {
    type: 2,
    fromUserAvatar: 'testimg.png',
    userName: 'indy',
    timeAgo: '11m'
  },
  {
    type: 3,
    fromUserAvatar: 'testimg.png',
    rightImage: 'rightImgSample.png',
    userName: 'h3h3',
    message: 'Lorem ipsum',
    timeAgo: '1d'
  },
  {
    type: 4,
    fromUserAvatar: 'testimg.png',
    userName: 'petra',
    timeAgo: '3d'
  },
  {
    type: 5,
    fromUserAvatar: 'pewdiepie.png',
    rightImage: 'rightImgSample.png',
    userName: 'pewdiepie',
    timeAgo: '3d'
  }
]
*/

// Initial state
const initialState = fromJS({
  myNotifs: sampleNotifs,
  myInvites: [],
  // current: {},
  loading: true,
  error: {}
});

// Reducer
export default function NotificationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NOTIFICATION_GET_MY_NOTIFS_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestGetNotifs(action.payload))
      );
    case NOTIFICATION_GET_MY_NOTIFS_SUCCESS:
      return state
        .set('loading', false)
        .set('myNotifs', fromJS(action.payload));
    case NOTIFICATION_GET_MY_INVITES_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestGetInvites(action.payload))
      );
    case NOTIFICATION_GET_MY_INVITES_SUCCESS:
      return state
        .set('loading', false)
        .set('myInvites', action.payload);
    case NOTIFICATION_GET_MY_NOTIFS_FAILURE:
    case NOTIFICATION_GET_MY_INVITES_FAILURE:
      return state
        .set('loading', false)
        .set('ERROR', action);
    default:
      return state;
  }
}
