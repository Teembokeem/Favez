import {
  notificationGetMyNotifs
} from '../../services/notification';

// Actions
export const NOTIFICATION_GET_MY_NOTIFS_REQUEST = 'NOTIFICATION_GET_MY_NOTIFS_REQUEST';
export const NOTIFICATION_GET_MY_NOTIFS_SUCCESS = 'NOTIFICATION_GET_MY_NOTIFS_SUCCESS';
export const NOTIFICATION_GET_MY_NOTIFS_FAILURE = 'NOTIFICATION_GET_MY_NOTIFS_FAILURE';

// Action creators
export async function getNotifs() {
  return {
    type: NOTIFICATION_GET_MY_NOTIFS_REQUEST
  };
}

export async function requestGetNotifs() {
  return await notificationGetMyNotifs()
    .then((res) => ({type: NOTIFICATION_GET_MY_NOTIFS_SUCCESS, payload: res}))
    .catch((err) => ({type: NOTIFICATION_GET_MY_NOTIFS_FAILURE, payload: err}));
}
