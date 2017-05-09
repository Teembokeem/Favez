import {fromJS, List} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  NOTIFICATION_GET_MY_NOTIFS_REQUEST,
  NOTIFICATION_GET_MY_NOTIFS_SUCCESS,
  NOTIFICATION_GET_MY_NOTIFS_FAILURE,
  NOTIFICATION_GET_MY_INVITES_REQUEST,
  NOTIFICATION_GET_MY_INVITES_SUCCESS,
  NOTIFICATION_GET_MY_INVITES_FAILURE,
  requestGetNotifs,
  requestGetInvites,
  NOTIFICATION_ACCEPT_INVITATION,
  NOTIFICATION_ACCEPT_INVITATION_SUCCESS,
  NOTIFICATION_ACCEPT_INVITATION_FAIL,
  requestAcceptInvitation,
  NOTIFICATION_REJECT_INVITATION,
  NOTIFICATION_REJECT_INVITATION_SUCCESS,
  NOTIFICATION_REJECT_INVITATION_FAIL,
  requestRejectInvitation
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
    created: '2017-04-27T18:42:05.256Z'
  },
  {
    type: 2,
    fromUserAvatar: 'testimg.png',
    userName: 'indy',
    created: '2017-04-27T18:42:05.256Z'
  },
  {
    type: 3,
    fromUserAvatar: 'testimg.png',
    rightImage: 'rightImgSample.png',
    userName: 'h3h3',
    message: 'Lorem ipsum',
    created: '2017-04-27T18:42:05.256Z'
  },
  {
    type: 4,
    fromUserAvatar: 'testimg.png',
    userName: 'petra',
    created: '2017-04-27T18:42:05.256Z'
  },
  {
    type: 5,
    fromUserAvatar: 'pewdiepie.png',
    rightImage: 'rightImgSample.png',
    userName: 'pewdiepie',
    created: '2017-04-27T18:42:05.256Z'
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
        .set('myInvites', List(action.payload));
    case NOTIFICATION_GET_MY_NOTIFS_FAILURE:
    case NOTIFICATION_GET_MY_INVITES_FAILURE:
      return state
        .set('loading', false)
        .set('ERROR', action);
    case NOTIFICATION_ACCEPT_INVITATION: {
      const id = action.payload.id
      return loop(
        state.updateIn(
          [
            'myInvites',
            state.get('myInvites').findIndex(invite => invite.id === id)
          ],
          invite => ({...invite, status: 'accepting'})
        ),
        Effects.promise(() => requestAcceptInvitation(id))
      )
    }
    case NOTIFICATION_ACCEPT_INVITATION_SUCCESS: {
      const id = action.payload.id
      return state.updateIn(
        [
          'myInvites',
          state.get('myInvites').findIndex(invite => invite.id === id)
        ],
        invite => ({...invite, status: 'accepted'})
      )
    }
    case NOTIFICATION_ACCEPT_INVITATION_FAIL: {
      const id = action.payload.id
      return state.updateIn(
        [
          'myInvites',
          state.get('myInvites').findIndex(invite => invite.id === id)
        ],
        invite => ({...invite, status: 'acceptFail'})
      )
    }
    case NOTIFICATION_REJECT_INVITATION: {
      const id = action.payload.id
      return loop(
        state.updateIn(
          [
            'myInvites',
            state.get('myInvites').findIndex(invite => invite.id === id)
          ],
          invite => ({...invite, status: 'rejecting'})
        ),
        Effects.promise(() => requestRejectInvitation(id))
      )
    }
    case NOTIFICATION_REJECT_INVITATION_SUCCESS: {
      const id = action.payload.id
      return state.updateIn(
        [
          'myInvites',
          state.get('myInvites').findIndex(invite => invite.id === id)
        ],
        invite => ({...invite, status: 'rejected'})
      )
    }
    case NOTIFICATION_REJECT_INVITATION_FAIL: {
      const id = action.payload.id
      return state.updateIn(
        [
          'myInvites',
          state.get('myInvites').findIndex(invite => invite.id === id)
        ],
        invite => ({...invite, status: 'rejectFail'})
      )
    }
    default:
      return state;
  }
}
