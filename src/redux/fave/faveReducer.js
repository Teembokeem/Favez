import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  SET_NEWFAVE
} from './faveActions';

// Initial state
const initialState = fromJS({
  all: [],
  current: {},
  loading: true
});

// Reducer
export default function FaveReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_NEWFAVE:
      return state
        .set('current', action.payload);
    default:
      return state;
  }
}
