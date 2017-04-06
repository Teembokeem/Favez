import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  LIST_REQUEST,
  LIST_RESPONSE,
  SET_LIST,
  LIST_MYLIST_REQUEST,
  LIST_MYLIST_SUCCESS,
  LIST_MYLIST_FAILURE,
  LIST_CREATE_REQUEST,
  LIST_CREATE_SUCCESS,
  LIST_CREATE_FAILURE,
  LIST_SET_NEWLIST_OPTIONS,
  requestCreateList,
  requestGetMyLists
} from './listActions';

// Initial state
const initialState = fromJS({
  all: [],
  myLists: [],
  collaborations: [],
  current: {},
  options: {
    description: '',
    tags: [],
    topics: [],
    currTag: ''
  },
  loading: true
});

// Reducer
export default function ListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LIST_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(action.payload)
      );
    case LIST_RESPONSE:
      return state
        .set('loading', false)
        .set('all', action.payload.data);
    case SET_LIST:
      return state
        .set('current', state.get(action.payload.list)[action.payload.index]);
    case LIST_MYLIST_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestGetMyLists())
      );
    case LIST_MYLIST_SUCCESS:
      console.log('SUCCESS', state, action);
      return state
        .set('loading', false)
        .set('myLists', action.payload.data);
    case LIST_CREATE_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestCreateList(action.payload))
      );
    case LIST_CREATE_SUCCESS:
      console.log('SUCCESS', state, action);
      return state
        .set('loading', false);
    case LIST_SET_NEWLIST_OPTIONS:
      console.log('setting new list options: ', state.get('options'), action.payload);
      let key = Object.keys(action.payload)[0];
      return insertOptionParams(state, state.get('options'), key, action.payload[key]);
    case LIST_MYLIST_FAILURE:
    case LIST_CREATE_FAILURE:
      console.log('ERROR', state, action);
      return state.set('ERROR', action);
    default:
      return state;
  }
}

function insertOptionParams(state, obj, prop, values) {
  switch (prop) {
    case 'description':
    case 'currTag':
      return state
        .setIn(['options', prop], values);
    case 'topics':
      return state
        .setIn(['options', prop], state.getIn(['options', prop]).concat(values))
    case 'tags':
      console.log('tags', state.getIn(['options', prop]), values);
      if (typeof values === 'number') {
        console.log('deleting!!');
        let newArr = state.getIn(['options', prop]).splice(values, 1);
        return state
          .setIn(['options', prop], newArr)
          .setIn(['options', 'currTag'], '');
      } else {
        return state
          .setIn(['options', prop], state.getIn(['options', prop]).concat(values))
          .setIn(['options', 'currTag'], '');
      }
    default:
      return null;
  }
}
