import {Actions} from 'react-native-router-flux';
import {
  getListAll,
  listCreate,
  listGetMyLists,
  listGetSingleDetailed,
  sendInvites,
  getListByTopic,
  sendLikeList,
  createlistRelation,
  deleteListRelation,
  getListbyRelation,
  searchListsByQuery
} from '../../services/list';

// Actions
export const INCREMENT = 'INCREMENT';
export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_RESPONSE = 'LIST_RESPONSE';
export const LIST_ADD_INVITEE = 'LIST_ADD_INVITEE';
export const LIST_REMOVE_INVITEE = 'LIST_REMOVE_INVITEE';
export const LIST_MYLIST_REQUEST = 'LIST_MYLIST_REQUEST';
export const LIST_GET_DETAILS_REQUEST = 'LIST_GET_DETAILS_REQUEST';
export const LIST_GET_DETAILS_SUCCESS = 'LIST_GET_DETAILS_SUCCESS';
export const LIST_GET_DETAILS_FAILURE = 'LIST_GET_DETAILS_FAILURE';
export const LIST_MYLIST_SUCCESS = 'LIST_MYLIST_SUCCESS';
export const LIST_MYLIST_FAILURE = 'LIST_MYLIST_FAILURE';
export const LIST_LIST = 'LIST_LIST';
export const SET_LIST = 'SET_LIST';
export const LIST_SEND_LIST_INVITATIONS_REQUEST = 'LIST_SEND_LIST_INVITATIONS_REQUEST';
export const LIST_SEND_LIST_INVITATIONS_SUCCESS = 'LIST_SEND_LIST_INVITATIONS_SUCCESS';
export const LIST_SEND_LIST_INVITATIONS_FAILURE = 'LIST_SEND_LIST_INVITATIONS_FAILURE';
export const LIST_CREATE_REQUEST = 'LIST_CREATE_REQUEST';
export const LIST_CREATE_SUCCESS = 'LIST_CREATE_SUCCESS';
export const LIST_CREATE_FAILURE = 'LIST_CREATE_FAILURE';
export const LIST_SET_NEWLIST_OPTIONS = 'LIST_SET_NEWLIST_OPTIONS';
export const LIST_BY_TOPIC_SUCCESS = 'LIST_BY_TOPIC_SUCCESS';
export const LIST_BY_TOPIC_FAILURE = 'LIST_BY_TOPIC_FAILURE';
export const LIKE_UNLIKE_LIST_ITEM = 'LIKE_UNLIKE_LIST_ITEM';
export const LIKE_UNLIKE_LIST_ITEM_SUCCESS = 'LIKE_UNLIKE_LIST_ITEM_SUCCESS';
export const LIKE_UNLIKE_LIST_ITEM_FAILURE = 'LIKE_UNLIKE_LIST_ITEM_FAILURE';
export const LIST_CREATE_RELATION_SUCCESS ='LIST_CREATE_RELATION_SUCCESS';
export const LIST_CREATE_RELATION_FAILURE = 'LIST_CREATE_RELATION_FAILURE';
export const LIST_DELETE_RELATION_SUCCESS ='LIST_DELETE_RELATION_SUCCESS';
export const LIST_DELETE_RELATION_FAILURE ='LIST_DELETE_RELATION_FAILURE';
export const GET_LIST_BY_RELATION_SUCCESS ='GET_LIST_BY_RELATION_SUCCESS';
export const GET_LIST_BY_RELATION_FAILURE = 'GET_LIST_BY_RELATION_FAILURE';
export const LIST_SEARCH_RESULT_SUCCESS = 'LIST_SEARCH_RESULT_SUCCESS';
export const LIST_SEARCH_RESULT_FAILURE = 'LIST_SEARCH_RESULT_FAILURE';

// Action creators
export function increment(cards, index) {
  Actions.intro();
  return {type: INCREMENT, item: cards, payload: index};
}

export async function getFullList() {
  return {
    type: LIST_REQUEST,
    payload: requestFullList
  };
}

export async function getDetailedList(id) {
  return {
    type: LIST_GET_DETAILS_REQUEST,
    payload: id
  };
}

export async function requestSingleList(data) {
  return await listGetSingleDetailed(data)
    .then((res) => ({type: LIST_GET_DETAILS_SUCCESS, payload: res}))
    .catch((err) => ({type: LIST_GET_DETAILS_FAILURE, payload: err}))
}

export async function requestFullList() {
  return {
    type: LIST_RESPONSE,
    payload: await getListAll()
  };
}

export async function getMyLists() {
  return {
    type: LIST_MYLIST_REQUEST
  };
}

export async function requestGetMyLists() {
  return await listGetMyLists()
    .then((res) => ({type: LIST_MYLIST_SUCCESS, payload: res}))
    .catch((err) => ({type: LIST_MYLIST_FAILURE, payload: err}));
}

export async function setList(list, index) {
  console.log('this index now', index);
  return {
    type: SET_LIST,
    payload: {list,index}
  };
}

export async function createList(obj) {
  console.log('received action, heading to reducer', obj)
  return {
    type: LIST_CREATE_REQUEST,
    payload: obj
  };
}

export async function requestCreateList(data) {
  console.log('back from reducer heading to list service')
  return await listCreate(data)
    .then((res) => ({type: LIST_CREATE_SUCCESS, payload: res}))
    .catch((err) => ({type: LIST_CREATE_FAILURE, payload: err}));
}

export async function setNewListOptions(data) {
  console.log('hi', data)
  return {
    type: LIST_SET_NEWLIST_OPTIONS,
    payload: data
  };
}

export async function modifyInviteList(invitee, concat) {
  return concat
    ? {type: LIST_ADD_INVITEE, payload: invitee}
    : {type: LIST_REMOVE_INVITEE, payload: invitee}
}

export async function sendInvitations(data) {
  return {
    type: LIST_SEND_LIST_INVITATIONS_REQUEST,
    payload: data
  };
}

//like unlike service called
export async function sendListLikeDislike(data){
  console.log("sendaction called...",data);
  return await sendLikeList(data)
  .then((res) => ({type:LIKE_UNLIKE_LIST_ITEM_SUCCESS ,payload: res}))
  .catch((err) => ({type: LIKE_UNLIKE_LIST_ITEM_FAILURE, payload: err}));


  // return {
  //   type: LIKE_UNLIKE_LIST_ITEM,
  //   payload: data
  // };
}

//Action for POST list relationship
export async function createlistRelationAction(id,relationid){
  console.log("Create Relation Created..");
  return await createlistRelation(id,relationid)
   .then((res)=> ({type:LIST_CREATE_RELATION_SUCCESS , payload: res}))
   .catch((err)=>({type:LIST_CREATE_RELATION_FAILURE, payload: err}));

}

//Action for Delete list relationship
export async function deleteListRelationAction(id,relationid){
  console.log("Delete List Relaiton Called",id);
  console.log("relationid", relationid);
  return await deleteListRelation(id,relationid)
  .then((res)=>({type:LIST_DELETE_RELATION_SUCCESS,payload: res}))
  .catch((err)=>({type:LIST_DELETE_RELATION_FAILURE, payload: err}));
}

//Action for getting list by relaitonship
  export async function getListbyRelationAction(data){
    console.log("create list by relation");
    return await getListbyRelation(data)
.then((res)=>({type:GET_LIST_BY_RELATION_SUCCESS, payload: res}))
.catch((err)=>({type:GET_LIST_BY_RELATION_FAILURE, payload: err}));
  }


export async function requestSendInvites(data) {
  return await sendInvites(data)
    .then((res) => ({type: LIST_SEND_LIST_INVITATIONS_SUCCESS, payload: res}))
    .catch((err) => ({type: LIST_SEND_LIST_INVITATIONS_FAILURE, payload: err}));
}

export async function requestListByTopic(data) {
  console.log('Fetching list by topic, topic=',data);
  return await getListByTopic(data)
    .then((res) => {
      console.log('LIST BY TOPIC DATA', res);
      return {type: LIST_BY_TOPIC_SUCCESS, payload: res}
    })
    .catch((err) => ({type: LIST_BY_TOPIC_FAILURE, payload: err}));
}

export async function searchLists(data) {
  console.log('searching list by query, query=',data);
  return await searchListsByQuery(data)
    .then((res) => {
      console.log('SEARCH_LIST_RESULT', res);
      return {type: LIST_SEARCH_RESULT_SUCCESS, payload: res.data}
    })
    .catch((err) => ({type: LIST_SEARCH_RESULT_FAILURE, payload: err}));
}
