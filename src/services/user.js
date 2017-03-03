import {get, post, put, delete} from '../utils/api';

export async function getUser() {
  return get('/authtest/me');
}

export async function getSimilarList(id) {
  return get('/lists/similar/' + id);
}

