import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';
import * as userActions from '../../redux/user/userActions';

// Initial state
const initialState = fromJS({
  header: {
    more: false
  }
});

// Actions
const HEADER_MORE_VISIBLE = 'FeedState/HEADER_MORE_VISIBLE';

// Action creators
export function setVisibility() {
  return {type: HEADER_MORE_VISIBLE};
}

export function followUser(ownerId) {
  return {type: userActions.FOLLOW_USER, payload: ownerId};
}
export function unFollowUser(ownerId) {
  return {type: userActions.UNFOLLOW_USER, payload: ownerId};
}

// Reducer
export default function FeedStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case HEADER_MORE_VISIBLE:
      return state
        .setIn(['header', 'more'], !state.getIn(['header', 'more']));
    default :
      return state;
  }
}
