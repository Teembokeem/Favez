import {get, post, put, del} from '../utils/api';

export async function getFavezAll() {
  return get('/favez/all');
}

export async function favezCreateFave(body) {
  return post('/favez', body);
}
