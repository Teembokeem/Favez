import {
  notificationGetMyNotifs,
  notificationGetInvites
} from '../../services/notification';

// Actions
export const NOTIFICATION_GET_MY_NOTIFS_REQUEST = 'NOTIFICATION_GET_MY_NOTIFS_REQUEST';
export const NOTIFICATION_GET_MY_NOTIFS_SUCCESS = 'NOTIFICATION_GET_MY_NOTIFS_SUCCESS';
export const NOTIFICATION_GET_MY_NOTIFS_FAILURE = 'NOTIFICATION_GET_MY_NOTIFS_FAILURE';
export const NOTIFICATION_GET_MY_INVITES_REQUEST = 'NOTIFICATION_GET_MY_INVITES_REQUEST';
export const NOTIFICATION_GET_MY_INVITES_SUCCESS = 'NOTIFICATION_GET_MY_INVITES_SUCCESS';
export const NOTIFICATION_GET_MY_INVITES_FAILURE = 'NOTIFICATION_GET_MY_INVITES_FAILURE';

// Action creatorssendLikeList

export async function getNotifs() {
  return {
    type: NOTIFICATION_GET_MY_NOTIFS_REQUEST
  };
}

export async function requestGetNotifs() {
  return await notificationGetMyNotifs()
    .then((res) => ({type: NOTIFICATION_GET_MY_NOTIFS_SUCCESS, payload: res.data}))
    .catch((err) => ({type: NOTIFICATION_GET_MY_NOTIFS_FAILURE, payload: err}));
}

export async function getInvites() {
  return {
    type: NOTIFICATION_GET_MY_INVITES_REQUEST
  };
}

export async function requestGetInvites() {
  return await notificationGetInvites()
    .then((res) => ({type: NOTIFICATION_GET_MY_INVITES_SUCCESS, payload: res.data}))
    .catch((err) => ({type: NOTIFICATION_GET_MY_INVITES_FAILURE, payload: err}));
}
