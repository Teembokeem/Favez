import {get, post, put, del} from '../utils/api';

export async function notificationGetMyNotifs() {
  return get('/alerts/self');
}

export async function notificationGetInvites() {
  return get('/users/collaborate/invited');
}

export async function notificationAcceptInvitation(id) {
  return put('users/collaborate/accept', {list_id: id})
}

export async function notificationRejectInvitation() {
  return await Promise.resolve()
}
