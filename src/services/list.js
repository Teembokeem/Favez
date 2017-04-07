import {get, post, put, delete} from '../utils/api';

// [TD3e]

export async function getListAll() {
  return get('/lists/all');
}

export async function getSimilarList(id) {
  return get('/lists/similar/' + id);
}
export async function listGetMyLists() {
  return get('/lists/self');
}

export async function listGetSingleDetailed(id) {
  return get('/lists/id/' + id);
}

export async function listCreate(data) {
  console.log('my list', data);
  // delete data['topics'];
  // delete data['tags'];
  return post('/lists', data);
}
