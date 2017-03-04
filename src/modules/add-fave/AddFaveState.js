import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  browser: {
    url: 'https://www.google.com'
  }
});

// Actions
const SET_URL = 'AddFave/SET_URL';

// Action creators
export function setBrowserUrl(url) {
  console.log('NEVNEIVNESILVNEILSNVLIESNVIELSNVIELSNVEILSVNEILSVNSEILVENSILVESNVILSENVILSVNSILVENSILVESILVSENVLEISNVEILSNVSEILVNSELI')
  return {type: SET_URL, payload: url};
}

// Reducer
export default function AddFaveReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_URL:
      return state
        .setIn(['browser', 'url'], action.payload);
    default :
      return state;
  }
}
