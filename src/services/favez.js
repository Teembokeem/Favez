import {get, post, put, delete} from '../utils/api';

export async function getFavezAll() {
  return get('/favez/all');
}

export async function favezCreateFave(body) {
  console.log('===============POSTING=============', body)
  return post('/favez', body);
}
