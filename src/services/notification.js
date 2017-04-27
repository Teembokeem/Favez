import {get, post, put, delete} from '../utils/api';

export async function notificationGetMyNotifs() {
  return get('/alerts/self');
};
