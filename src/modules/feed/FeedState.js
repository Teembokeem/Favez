import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';
import {getListAll} from '../../services/list';

// Initial state
const initialState = fromJS({
  lists: [],
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
const INCREMENT = 'FeedState/INCREMENT';
const FEED_REQUEST = 'FeedState/FEED_REQUEST';
const FEED_LIST = 'FeedState/FEED_LIST';
const FEED_RESPONSE = 'FeedState/FEED_RESPONSE';

// Action creators
export function increment(cards, index) {
  Actions.intro();
  return {type: INCREMENT, item: cards, payload: index};
}

// export async function getFullList() {
//   return {
//     type: FEED_REQUEST,
//     payload: getListResponse,
//   };
// }

// export async function getListResponse() {
//   return {
//     type: FEED_RESPONSE,
//     payload: await getListAll(),
//   };
// }

export async function getFullList() {
  return {
    type: FEED_REQUEST
    // payload: getListResponse,
  };
}

export async function requestFullList() {
  return {
    type: FEED_RESPONSE,
    payload: await getListAll(),
  };
}

// Reducer
export default function FeedStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FEED_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(requestFullList)
      );
    case FEED_RESPONSE:
      return state
        .set('loading', false)
        .set('lists', action.payload.data);

    default:
      return state;
  }
}
