import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {Actions} from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'IntroState/INCREMENT';

// Action creators
export function increment(cards, index) {
  return {type: INCREMENT, item: cards, payload: index};
}

// Reducer
export default function IntroStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state

    default:
      return state;
  }
}
