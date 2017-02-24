import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';
import {getListAll} from '../../services/list';

// Initial state
const initialState = fromJS({
  list: [],
  loading: true,
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

// Actions
const INCREMENT = 'ListShowState/INCREMENT';
const LISTSHOW_REQUEST = 'ListShowState/LISTSHOW_REQUEST';
const LISTSHOW_LIST = 'ListShowState/LISTSHOW_LIST';
const LISTSHOW_RESPONSE = 'ListShowState/LISTSHOW_RESPONSE';

// Action creators
export function increment(cards, index) {
  Actions.intro();
  return {type: INCREMENT, item: cards, payload: index};
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

export async function getFullList() {
  return {
    type: LISTSHOW_REQUEST,
    // payload: getListResponse,
  };
}

export async function requestFullList() {
  return {
    type: LISTSHOW_RESPONSE,
    payload: await getListAll(),
  };
}

// Reducer
export default function ListShowStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LISTSHOW_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(requestFullList)
      );
    case LISTSHOW_RESPONSE:
    console.log(action.payload.data[1])
      return state
        .set('loading', false)
        .set('list', action.payload.data[1]);

    default:
      return state;
  }
}
