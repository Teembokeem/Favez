import {get, post, put, delete} from '../utils/api';

export async function getListAll() {
  return get('/lists/all');
}

export async function getSimilarList(id) {
  return get('/lists/similar/' + id);
}
export async function listGetMyLists() {
  return get('/lists/self');
}

export async function listCreate(data) {
  console.log('sending through', data);
  return post('/lists', {name: data.listName, description: 'lorem ipsum', private: 0, nsfw: 0, location: data.location});

  // console.log('IN LIST SERVICE...SENDING FAKE DATA FOR NOW....', data);
  // return new Promise((resolve, reject) => {
  //   const sendTemp = true;
  //   const tempData = {
  //     description: 'Lorem Ipsum Dolor',
  //     created: '2016-08-24T12:00:00.000Z',
  //     location: data.location,
  //     name: data.listName,
  //     nsfw: 0,
  //     owner: 5,
  //     private: 0,
  //     updated: '2016-08-24T12:00:00.000Z',
  //     _favez: [
  //     ],
  //     _comments: [],
  //     id: 9,
  //     likes: 5
  //   };
  //   if (sendTemp) {
  //     console.log('sending data', tempData);
  //     resolve({status: 200, data: tempData});
  //   } else {
  //     reject({status: 404, err: 'you messed up man...'});
  //   }
  // });
}
