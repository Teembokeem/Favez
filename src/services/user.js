import {get, post, put, delete} from '../utils/api';

export async function getUser() {
  return get('/authtest/me');
}

export async function postUser(authData) {
  let user = {
    email: authData.email,
    username: authData.email,
    // phone: authData.phone,
    auth_id: authData._id
  };
  console.log('current body', user)
  return await post('/user', user);
}

export async function getSimilarList(id) {
  return await get('/lists/similar/' + id);
}

