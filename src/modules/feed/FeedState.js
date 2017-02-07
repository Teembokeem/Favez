import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = Map({
    cards: [{
        value: 0,
        header: {
            topic: 'Archeology Stuff',
        },
        user: {
            picture: '../img/what.jpg',
            username: '@indy',
        },
        timeAgo: '12 Minutes Ago',
        body: {
            title: 'Check out this Marrakech album',
            site: 'imgur.com',
        }
    },
    {
        value: 0,
        header: {
            topic: 'Archeology Stuff',
        },
        user: {
            picture: '../img/what.jpg',
            username: '@indy',
        },
        timeAgo: '12 Minutes Ago',
        body: {
            title: 'Check out this Marrakech album',
            site: 'imgur.com',
        }
    }],
    value: 0,
  loading: false
});

// Actions
const INCREMENT = 'FeedState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function increment(cards, index) {
  return {type: INCREMENT, item: cards, payload: index};
}

export function reset() {
  return {type: RESET};
}

export function random() {
  return {
    type: RANDOM_REQUEST
  };
}

export async function requestRandomNumber() {
  return {
    type: RANDOM_RESPONSE,
    payload: await generateRandomNumber()
  };
}

// Reducer
export default function FeedStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
        console.log("incrementing", state.get('cards')[action.payload]);
        // action.item[action.payload].value++
        return state.setIn(['cards', action.payload, 'value'],  3);

    case RESET:
      return initialState;

    case RANDOM_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(requestRandomNumber)
      );

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
