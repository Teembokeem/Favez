import {get, post, put} from '../utils/api';

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
  const {listData, inviteData} = data;
  // delete data['topics'];
  // delete data['tags'];
  post('/lists', listData).then((res) => {
    console.log('hello moto', res);
    let users = inviteData;
    let counter = 0;
    users.map((user, idx) => {
      let {id} = user;
      if (idx !== users.length - 1) {
        console.log('hi doing these');
        post('lists/collaborate/invite', {list_id: res.data.id, id: res.data.id, user_id: id, role: 1})
          .then((res) => {
            counter++;
            console.log('sent invite!: ', res);
          })
          .catch((err) => {
            console.log('error in sending for user id: ', user);
          });
      } else {
        console.log('doing this last');
        return post('lists/collaborate/invite', {list_id: res.data.id, id: res.data.id, user_id: id, role: 1})
          .then((res) => {
            return {data: res.data, counter};
          })
          .catch((err) => {
            return err;
          });
      }
    });
  }) ;
}
