import {Actions} from 'react-native-router-flux';
import {
  getListAll,
  listCreate,
  listGetMyLists
} from '../../services/list';

// Actions
export const INCREMENT = 'INCREMENT';
export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_RESPONSE = 'LIST_RESPONSE';
export const LIST_MYLIST_REQUEST = 'LIST_MYLIST_REQUEST';
export const LIST_MYLIST_SUCCESS = 'LIST_MYLIST_SUCCESS';
export const LIST_MYLIST_FAILURE = 'LIST_MYLIST_FAILURE';
export const LIST_LIST = 'LIST_LIST';
export const SET_LIST = 'SET_LIST';
export const LIST_CREATE_REQUEST = 'LIST_CREATE_REQUEST';
export const LIST_CREATE_SUCCESS = 'LIST_CREATE_SUCCESS';
export const LIST_CREATE_FAILURE = 'LIST_CREATE_FAILURE';

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
  return {
    type: LIST_CREATE_REQUEST,
    payload: obj
  };
}

export async function requestCreateList(data) {
  return await listCreate(data)
    .then((res) => ({type: LIST_CREATE_SUCCESS, payload: res}))
    .catch((err) => ({type: LIST_CREATE_FAILURE, payload: err}));
}
