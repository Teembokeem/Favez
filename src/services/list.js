import { get, post, put, del } from '../utils/api';
// [TD3e]
export async function getListAll() {
    return get('/lists/all');
}

export async function sendLikeList(data) {
    console.log("data sendign id", data);
    return post('/favez/like', { fave_id: data });
//return get('/lists/relationship/subscribed')
    // return post('lists/relationship',{list_id:11,relationship: 1});
}

export async function getListbyRelation(data) {
  console.log("data list relation", data);
    return get('lists/relationship/' + data);
}
export async function sendUnLikeList(data) {
    console.log("data sendign id", data);
    return post('/favez/unlike', { fave_id: data });
}


export async function deleteListRelation(id, relationid) {
    console.log("Delete Relation Id", id);
    console.log("relation code", relationid);
    return post('lists/relationship', { list_id: id, relationship: relationid });
}
export async function createlistRelation(id, relationid) {
    console.log("Create List Relation Function Called....");
    console.log("Create  Relation Id", id);
    console.log("create relation code", relationid);
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
    console.log('my list', data);
    const { listData, inviteData } = data;
    // delete data['topics'];
    // delete data['tags'];
    post('/lists', listData).then((res) => {
        console.log('hello moto', res);
        let users = inviteData;
        let counter = 0;
        users.map((user, idx) => {
            let { id } = user;
            if (idx !== users.length - 1) {
                console.log('hi doing these');
                post('lists/collaborate/invite', { list_id: res.data.id, id: res.data.id, user_id: id, role: 1 }).then((res) => {
                    counter++;
                    console.log('sent invite!: ', res);
                }).catch((err) => {
                    console.log('error in sending for user id: ', user);
                });
            } else {
                console.log('doing this last');
                return post('lists/collaborate/invite', { list_id: res.data.id, id: res.data.id, user_id: id, role: 1 }).then((res) => {
                    return { data: res.data, counter };
                }).catch((err) => {
                    return err;
                });
            }
        });
    });
}
