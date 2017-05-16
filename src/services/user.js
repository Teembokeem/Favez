import {get, post, put, del} from '../utils/api';

export async function getUser() {
  return get('/authtest/me');
}

export async function postUser(authData) {
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
  return await put('/users', toField);
}

export async function getSimilarList(id) {
  return await get('/lists/similar/' + id);
}

export async function getCollaborators() {
  return await get('/users/all');
}

export async function getUsersByQuery(query) {
  return get('/search/users/'+query);
}

export async function getUserById(userId) {
  return get(`/users/id/${userId}`);
}

export async function followuser(data){
  return post('/users/follow',{ following_id: data });
}

export async function unfollowuser(data) {
    return post('/users/unfollow',{ following_id: data });
}

export async function getlistuserfollowing(data){
  return get(`users/following/${data}`);
}



export async function getlistuserblocked(data){
  return get(`users/following/${data}`);
}

export async function getFollowerList(data){
  return get(`/users/followed_by/${data}`);
}

export async function removeFromFollowList(removedUserId) {
  return post(`/users/removeFromFollowList/${removedUserId}`)
  .catch(() => console.warn(`error on remove user ${removedUserId} from following list`))
}

export async function requestSubscribedList(type){
  return get(`/lists/relationship/${type}`);
}
