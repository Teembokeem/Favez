import {get, post, put, del} from '../utils/api';

export async function getFavezAll() {
  return get('/favez/all');
}

export async function favezCreateFave(body) {
  return post('/favez', body);
}

export async function favezSearchByQuery(query) {
  return get(`/search/favez/${query}`);
}

export async function getFavezSelf(){
  return get('/favez/self');
}
