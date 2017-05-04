import {get, post, put} from '../utils/api'

export async function getFeedAll() {
  return get('/posts');
};
