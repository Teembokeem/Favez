import {get, post, put, delete} from '../utils/api';

export async function getListAll() {
  return get('/lists/all');
}

export async function getSimilarList(id) {
  return get('/lists/similar/' + id);
}

