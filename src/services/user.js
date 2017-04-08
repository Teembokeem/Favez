import {get, post, put, delete} from '../utils/api';

export async function getUser() {
  return get('/authtest/me');
}

export async function postUser(authData) {
  console.log('getting here', authData)
  let user = {
    email: authData.email,
    username: authData.email,
    phone: authData.phone ? authData.phone : ''
    // image: authData.picture,
    // phone: authData.phone,
    // auth_id: authData._id
  };
  return await post('/users', user);
}

export async function updateUser(toField) {
  console.log('to field', toField);
  return await put('/users', toField);
}

export async function getSimilarList(id) {
  return await get('/lists/similar/' + id);
}

