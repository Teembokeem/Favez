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
  requestCreateList,
  requestGetMyLists
} from './listActions';

// Initial state
const initialState = fromJS({
  all: [],
  myLists: [],
  collaborations: [],
  current: {},
  loading: true
});
// {
//   value: 0,
//   list: {
//     creator: {
//       username: 'pewdiepie',
//       avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
//     },
//     collaborators: [
//     ],
//     name: 'Classic Horror Game text text',
//     picture: 'https://lh3.googleusercontent.com/-45wPZp5uAdxXj6JAoFgfoVkVRxrQ8ugxUCQjknRdUozgMSCIxQG-Wn6nK5RBbfE7Q=h900',
//     topics: [
//       'gaming'
//     ],
//     tags: [
//       'horror',
//       'noooooo'
//     ]
//   },
//   author: {
//     username: 'pewdiepie',
//     avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
//   },
//   timeAgo: '9 hours ago',
//   body: {
//     message: '',
//     site_semantic: 'amazon.com',
//     uri: '',
//     title_scraped: 'Amnesia: The Dark Descent',
//     image_scraped: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Amnesia-The-Dark-Descent-Cover-Art.png/250px-Amnesia-The-Dark-Descent-Cover-Art.png'
//   }
// }

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
    case LIST_MYLIST_FAILURE:
      console.log('ERROR', state, action);
      return state.set('ERROR', action);
    case LIST_CREATE_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestCreateList(action.payload))
      );
    case LIST_CREATE_SUCCESS:
      console.log('SUCCESS', state, action);
      return state
        .set('loading', false);
    case LIST_CREATE_FAILURE:
      console.log('ERROR', state, action);
      return state.set('ERROR', action);
    default:
      return state;
  }
}
