import {get, post, put, delete} from '../utils/api'

export async function getFeedAll() {
  return get('/posts');
};
