import {get, post, put, del} from '../utils/api';

export async function getUser() {
  return get('/authtest/me');
}

export async function postUser(authData) {
  console.log(' and then finally post user service', authData)
  let user = {
    email: authData.email,
    username: authData.email,
    phone: authData.phone ? authData.phone : '',
    image: authData.picture ? authData.picture : ''
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


export async function getCollaborators() {
  console.log('api fetching data')
  return await get('/users/all');
}

export async function getUsersByQuery(query) {
  return get('/search/users/'+query);
}

export async function getUserById(userId) {
  return get(`/user/id/${userId}`);
}
