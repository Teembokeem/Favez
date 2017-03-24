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

export async function listCreate(data) {
  return post('/lists',{
    name: data.listName,
    description: 'lorem ipsum',
    private: 0,
    nsfw: 0,
    location: data.location
  });
}
