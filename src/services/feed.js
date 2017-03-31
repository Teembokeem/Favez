import {get, post, put, do_delete} from '../utils/api'

export async function getFeedAll() {
  return get('/posts');
};
