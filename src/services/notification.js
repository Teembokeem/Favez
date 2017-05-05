import {get, post, put, del} from '../utils/api';

export async function notificationGetMyNotifs() {
  return get('/alerts/self');
}

export async function notificationGetInvites() {
  return get('/users/collaborate/invited');
}
