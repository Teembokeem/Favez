import {get, post, put} from '../utils/api';

export async function notificationGetMyNotifs() {
  return get('/alerts/self');
}

export async function notificationGetInvites() {
  return get('/users/collaborate/invited');
}
