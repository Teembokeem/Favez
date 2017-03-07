import {get, post, put, delete} from '../utils/api';

export async function getFavezAll() {
  return get('/favez/all');
}
