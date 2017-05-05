import {get, post, put, del} from '../utils/api'

export async function getFeedAll() {
  return get('/posts');
};
