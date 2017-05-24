import { get, post, put, del } from '../utils/api';
// [TD3e]
export async function getListAll() {
    return get('/lists/all');
}

export async function getListbyRelation(data) {
    return get('lists/relationship/' + data);
}

export async function deleteListRelation(id,relationid) {
    return del('lists/relationship', { list_id: id , relationship: relationid});
}
export async function createlistRelation(id, relationid) {
    return post('lists/relationship/', { list_id: id, relationship: relationid });
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
export async function getListByTopic(topic) {
    return get(`lists/taxonomy/topic/${topic}`);
}
export async function searchListsByQuery(query) {
    return get(`/search/lists/${query}`);
}
export function listCollaborateInvite(listId, userId) {
  return post('lists/collaborate/invite', { list_id: listId, id: listId, user_id: userId, role: 1 });
}
export function listCreate(listData) {
  return post('/lists', listData);
}
export function listSave(listData) {
  if(!!listData.list_id) {
    console.log('LIST_SAVE, url=', `/lists`, listData);
    return put(`/lists`, listData);
  } else {
    console.log('LIST_SAVE, url=', `/lists`, listData);
    return post('/lists', listData);
  }
}
//Getting comment by list
export  function commentsByList(id){
  return get(`/comments/list/${id}`);
  }

//Post Comments on List
export function postCommentOnList(content, listId){
  return post(`comments`,{content: content, list_id: listId, parent: 0});

}
