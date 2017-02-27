import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  LIST_REQUEST,
  LIST_RESPONSE
} from './listActions';

// Initial state
const initialState = fromJS({
  all: [],
  index: 0,
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

    default:
      return state;
  }
}
