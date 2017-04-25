import {get, post, put, delete} from '../utils/api';

// [TD3e]

export async function getListAll() {
  return get('/lists/all');
}

export async function getSimilarList(id) {
  return get('/lists/similar/' + id);
}
export async function listGetMyLists() {
  return get('/lists/self');
}

export async function listGetSingleDetailed(id) {
  return get('/lists/id/' + id);
}

export async function listCreate(data) {
  console.log('my list', data);
  // delete data['topics'];
  // delete data['tags'];
  return post('/lists', data);
}

export async function sendInvites(data) {
  const {list, users} = data;
  let counter = 0;
  console.log('hello moto');
  users.map((user, idx) => {
    if (idx !== users.length - 1) {
      post('lists/collaborate/invite', {list_id: list, user_id: user})
        .then((res) => {
          counter++;
          console.log('sent invite!: ', res);
        })
        .catch((err) => {
          console.log('error in sending for user id: ', user);
        });
    } else {
      return post('lists/collaborate/invite', {list_id: list, user_id: user})
        .then((res) => {
          return {data: res.data, counter};
        })
        .catch((err) => {
          return err;
        });
    }
  });
}
