import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  header: {
    more: false
  }
});

// Actions
const HEADER_MORE_VISIBLE = 'CreateList/HEADER_MORE_VISIBLE';

// Action creators
export function setVisibility() {
  return {type: HEADER_MORE_VISIBLE};
}

// Reducer
export default function CreateListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case HEADER_MORE_VISIBLE:
      return state
        .setIn(['header', 'more'], !state.getIn(['header', 'more']));
    default :
      return state;
  }
}
