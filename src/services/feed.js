import {get, post, put, delete} from '../utils/api'

export async function getFeedList() {
  return get('/posts');
};
