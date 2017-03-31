import {get, post, put, do_delete} from '../utils/api';

export async function getUser() {
  return get('/authtest/me');
}

export async function postUser(authData) {
  let user = {
    email: authData.email,
    username: authData.nickname,
    image: authData.picture,
    // phone: authData.phone,
    auth_id: authData._id
  };
  return await post('/user', user);
}

export async function updateUser(toField) {
  return await put('', toField);
}

export async function getSimilarList(id) {
  return await get('/lists/similar/' + id);
}
