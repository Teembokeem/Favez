import {Actions} from 'react-native-router-flux';
import {getListAll} from '../../services/list';

// Actions
export const INCREMENT = 'FeedState/INCREMENT';
export const LIST_REQUEST = 'FeedState/LIST_REQUEST';
export const LIST_LIST = 'FeedState/LIST_LIST';
export const LIST_RESPONSE = 'FeedState/LIST_RESPONSE';

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
    payload: await getListAll(),
  };
};