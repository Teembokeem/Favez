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
export async function deleteListRelation(id,relationid) {
  console.log("delete list id 900am",id);
  console.log("delete list relation id code 900am", relationid);
    return del('lists/relationship', { list_id: id , relationship: relationid});
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
export async function listCreate(data) {
    const { listData, inviteData } = data;
    // delete data['topics'];
    // delete data['tags'];
    post('/lists', listData).then((res) => {
        let users = inviteData;
        let counter = 0;
        users.map((user, idx) => {
            let { id } = user;
            if (idx !== users.length - 1) {
                post('lists/collaborate/invite', { list_id: res.data.id, id: res.data.id, user_id: id, role: 1 }).then((res) => {
                    counter++;
                }).catch((err) => {
                });
            } else {
                return post('lists/collaborate/invite', { list_id: res.data.id, id: res.data.id, user_id: id, role: 1 }).then((res) => {
                    return { data: res.data, counter };
                }).catch((err) => {
                    return err;
                });
            }
        });
    });
}
