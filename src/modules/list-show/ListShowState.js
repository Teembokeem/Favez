import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';
import {getSimilarList} from '../../services/list';

// Initial state
const initialState = fromJS({
  list: [],
  similar: [],
  loading: true,
  selected: 'favez',
});

// Actions
const INCREMENT = 'ListShowState/INCREMENT';
const LISTSHOW_REQUEST = 'ListShowState/LISTSHOW_REQUEST';
const LISTSHOW_LIST = 'ListShowState/LISTSHOW_LIST';
const LISTSHOW_RESPONSE = 'ListShowState/LISTSHOW_RESPONSE';
const SETFILTER = 'ListShowState/SETFILTER';

// Action creators
export function increment(cards, index) {
  Actions.intro();
  return {type: INCREMENT, item: cards, payload: index};
}

export function setFilter(value) {
  return {type: SETFILTER, payload: value};
}

// export async function getFullList() {
//   return {
//     type: LISTSHOW_REQUEST,
//     payload: getListResponse,
//   };
// }

// export async function getListResponse() {
//   return {
//     type: LISTSHOW_RESPONSE,
//     payload: await getListAll(),
//   };
// }

export async function fetchSimilarList(id) {
  return {
    type: LISTSHOW_REQUEST,
    payload: id,
  };
}

export async function requestSimilarList(id) {
  return {
    type: LISTSHOW_RESPONSE,
    payload: await getSimilarList(id),
  };
}

// Reducer
export default function ListShowStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LISTSHOW_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestSimilarList(action.payload))
      );
    case LISTSHOW_RESPONSE:
      return state
        .set('loading', false)
        .set('similar', action.payload.data);
    case SETFILTER:
      return state
        .set('selected', action.payload);
    default:
      return state;
  }
}
