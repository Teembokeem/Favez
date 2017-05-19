import {get, post, put, del} from '../utils/api';

export async function getFavezAll() {
  return get('/favez/all');
}

export async function favezCreateFave(body) {
  return post('/favez', body);
}

export async function favezSearchByQuery(query) {
  return get(`/search/favez/${query}`);
}

export async function getFavezSelf(){
  console.log("oddpocpd");
  return get('/favez/self');
}
export async function sendUnLikeFavez(action,detailList) {
console.log("unlike favez id", action);
    return post('/favez/unlike', { fave_id: action });
}
export async function sendLikeFavez(action,detailList) {
console.log("like favez id", action);
    return post('/favez/like', { fave_id: action });
}
