import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';
import {getFeedList} from '../../services/feed';

// Initial state
const initialState = fromJS({
  cards: {
    index: 0,
    data: [{
      value: 0,
      list: {
        creator: {
          username: 'pewdiepie',
          avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
        },
        collaborators: [
        ],
        name: 'Archeology Stuff',
        picture: 'https://firstfloorcherry.files.wordpress.com/2016/11/vsco-photo-4.jpg?w=636&h=424&crop=1',
        topics: [
          'gaming'
        ],
        tags: [
          'horror',
          'noooooo'
        ]
      },
      author: {
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
        username: 'react'
      },
      timeAgo: '12 Minutes Ago',
      body: {
        message: 'Check out this Marrakech album',
        site_semantic: 'imgur.com',
        uri: '',
        title_scraped: 'Welcome to Marrakech, Morroco - a guide by a tourist',
        image_scraped: 'https://www.travelpirates.com/media/images/2015/02/newyork-oslo-cheap-flights-1423497189-LeT5-slide.jpg'
      }
    },
    {
      value: 0,
      list: {
        creator: {
          username: 'pewdiepie',
          avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
        },
        collaborators: [
        ],
        name: 'Classic Horror Game text text',
        picture: 'https://lh3.googleusercontent.com/-45wPZp5uAdxXj6JAoFgfoVkVRxrQ8ugxUCQjknRdUozgMSCIxQG-Wn6nK5RBbfE7Q=h900',
        topics: [
          'gaming'
        ],
        tags: [
          'horror',
          'noooooo'
        ]
      },
      author: {
        username: 'pewdiepie',
        avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
      },
      timeAgo: '9 hours ago',
      body: {
        message: '',
        site_semantic: 'amazon.com',
        uri: '',
        title_scraped: 'Amnesia: The Dark Descent',
        image_scraped: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Amnesia-The-Dark-Descent-Cover-Art.png/250px-Amnesia-The-Dark-Descent-Cover-Art.png'
      }
    }
    ]
  },
  value: [],
  loading: true,
});

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

export async function getFullList() {
  return {
    type: FEED_REQUEST,
    payload: getListResponse,
  };
}

export async function getListResponse() {
  return {
    type: FEED_RESPONSE,
    payload: await getFeedList(),
  };
}

// Reducer
export default function FeedStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FEED_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(action.payload)
      );
    case FEED_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
