import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  categories: {
    index: 0,
    data: [
      {
        ref: 'art',
        semantic: 'Art',
        color: '#ff3824'
      },
      {
        ref: 'animals',
        semantic: 'Animals',
        color: '#ff6611'
      },
      {
        ref: 'business',
        semantic: 'Business',
        color: '#ff9600'
      },
      {
        ref: 'education',
        semantic: 'Education',
        color: '#ffa600'
      },
      {
        ref: 'entertainment',
        semantic: 'entertainment',
        color: '#ffbe00'
      },
      {
        ref: 'food',
        semantic: 'Food',
        color: '#ffcd00'
      },
      {
        ref: 'gaming',
        semantic: 'Gaming',
        color: '#c5c614'
      },
      {
        ref: 'health',
        semantic: 'Health',
        color: '#8cbf28'
      },
      {
        ref: 'hobbies',
        semantic: 'Hobbies',
        color: '#4caf4e'
      },
      {
        ref: 'lifestyle',
        semantic: 'Lifestyle',
        color: '#279e8d'
      },
      {
        ref: 'music',
        semantic: 'Music',
        color: '#0c89d7'
      },
      {
        ref: 'news',
        semantic: 'News',
        color: '#0076ff'
      },
      {
        ref: 'science',
        semantic: 'Science',
        color: '#075ae1'
      },
      {
        ref: 'shopping',
        semantic: 'Shopping',
        color: '#1b42ab'
      },
      {
        ref: 'sports',
        semantic: 'Sports',
        color: '#303093'
      },
      {
        ref: 'technology',
        semantic: 'Technology',
        color: '#4a2593'
      },
      {
        ref: 'travel',
        semantic: 'Travel',
        color: '#611e97'
      },
      {
        ref: 'xxx',
        semantic: 'XXX',
        color: 'black'
      },
      {
        ref: 'location-specific',
        semantic: 'Location Specific',
        color: 'null',
        image: '../../../../images/testImg.png'
      }
    ]
  },
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'FeedState/INCREMENT';

// Action creators
export function increment(cards, index) {
  Actions.intro();
  return {type: INCREMENT, item: cards, payload: index};
}

// Reducer
export default function FeedStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state;

    default:
      return state;
  }
}
