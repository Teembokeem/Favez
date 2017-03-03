import {Actions} from 'react-native-router-flux';
import {getListAll} from '../../services/list';

// Actions
export const INCREMENT = 'INCREMENT';
export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_RESPONSE = 'LIST_RESPONSE';
export const LIST_LIST = 'LIST_LIST';
export const SET_LIST = 'SET_LIST';

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

export async function setList(index) {
  console.log('this index now', index)
  return {
    type: SET_LIST,
    payload: index
  };
}

export async function requestFullList() {
  return {
    type: LIST_RESPONSE,
    payload: await getListAll()
  };
}
