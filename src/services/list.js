import { get, post, put, del } from '../utils/api';
// [TD3e]
export async function getListAll() {
    return get('/lists/all');
}
export async function sendLikeList(data) {
    return post('/favez/like', { fave_id: data });
    //return get('/lists/relationship/subscribed')
    // return post('lists/relationship',{list_id:11,relationship: 1});
}
export async function getListbyRelation(data) {
  console.log("Get List By Relationship", data);
    return get('lists/relationship/' + data);
}
export async function sendUnLikeList(data) {
    return post('/favez/unlike', { fave_id: data });
}
export async function deleteListRelation(id,) {
    return del('lists/relationship', { list_id: id });
    // return del('lists/relationship', { list_id: id, relationship: relationid });
    //      return del(`lists/relationship?list_id=${id}&relationship=${relationid}`);
}
export async function createlistRelation(id, relationid) {
  console.log("Subscribe a List (List id) ",id );
  console.log("Subscribe a List Relation (relation id)", relationid);
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
    return get(`lists/taxonomy/topic/${topic.ref}`);
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
