import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {Actions} from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  user: {
    email: 'test',
    password: 'test',
  },
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'LoginState/INCREMENT';
const INPUT_CHANGE = 'LoginState/INPUT_CHANGE';

// Action creators
export function increment(cards, index) {
  return {type: INCREMENT, item: cards, payload: index};
}

export function inputChange(key, value) {
  return {type: INPUT_CHANGE, payload: {key, value}};
}


// Reducer
export default function LoginStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state
    case INPUT_CHANGE:
      return state
    default:
      return state;
  }
}
