import {
  notificationGetMyNotifs,
  notificationGetInvites,
  notificationAcceptInvitation
} from '../../services/notification';
import {Alert} from 'react-native'

// Actions
export const NOTIFICATION_GET_MY_NOTIFS_REQUEST = 'NOTIFICATION_GET_MY_NOTIFS_REQUEST';
export const NOTIFICATION_GET_MY_NOTIFS_SUCCESS = 'NOTIFICATION_GET_MY_NOTIFS_SUCCESS';
export const NOTIFICATION_GET_MY_NOTIFS_FAILURE = 'NOTIFICATION_GET_MY_NOTIFS_FAILURE';
export const NOTIFICATION_GET_MY_INVITES_REQUEST = 'NOTIFICATION_GET_MY_INVITES_REQUEST';
export const NOTIFICATION_GET_MY_INVITES_SUCCESS = 'NOTIFICATION_GET_MY_INVITES_SUCCESS';
export const NOTIFICATION_GET_MY_INVITES_FAILURE = 'NOTIFICATION_GET_MY_INVITES_FAILURE';
export const NOTIFICATION_ACCEPT_INVITATION = 'NOTIFICATION_ACCEPT_INVITATION'
export const NOTIFICATION_ACCEPT_INVITATION_SUCCESS = 'NOTIFICATION_ACCEPT_INVITATION_SUCCESS'
export const NOTIFICATION_ACCEPT_INVITATION_FAIL = 'NOTIFICATION_ACCEPT_INVITATION_FAIL'
export const NOTIFICATION_REJECT_INVITATION = 'NOTIFICATION_REJECT_INVITATION'
export const NOTIFICATION_REJECT_INVITATION_SUCCESS = 'NOTIFICATION_REJECT_INVITATION_SUCCESS'
export const NOTIFICATION_REJECT_INVITATION_FAIL = 'NOTIFICATION_REJECT_INVITATION_FAIL'

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

export function acceptInvitation(id) {
  return {
    type: NOTIFICATION_ACCEPT_INVITATION,
    payload: {id}
  }
}

export async function requestAcceptInvitation(id) {
  return await notificationAcceptInvitation(id)
  .then(
    () => ({type: NOTIFICATION_ACCEPT_INVITATION_SUCCESS, payload: {id}}),
    (err) => {
      Alert.alert('Error on accept invitation. Please try again later')
      return {type: NOTIFICATION_ACCEPT_INVITATION_FAIL, payload: {id, err}}
    }
  )
}

export async function rejectInvitation(id) {
  return {
    type: NOTIFICATION_REJECT_INVITATION,
    payload: {id}
  }
}

export async function requestRejectInvitation(id) {
  return await notificationAcceptInvitation(id)
  .then(
    () => ({type: NOTIFICATION_REJECT_INVITATION_SUCCESS, payload: {id}}),
    (err) => {
      Alert.alert('Error on reject invitation. Please try again later')
      return {type: NOTIFICATION_REJECT_INVITATION_FAIL, payload: {id, err}}
    }
  )
}

