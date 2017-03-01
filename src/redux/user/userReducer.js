import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {setAuthenticationToken} from '../../utils/authentication';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_FAILURE,
  USER_SUCCESS,
  requestLogin,
  requestUserInfo,
  requestRegister,
} from './userActions';

// Initial state
const initialState = fromJS({
  user: {},
  value: 0,
  loading: false,
  error: {},
});

// Reducer
export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestRegister(action.payload))
      );
    case REGISTER_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.payload);
    case LOGIN_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestLogin(action.payload))
      );
    case LOGIN_SUCCESS:
      setAuthenticationToken(action.payload.access_token);
      return loop(
        state.set('user', {}),
        Effects.promise(requestUserInfo)
      );
    case LOGIN_FAILURE:
    case USER_FAILURE:
    case REGISTER_FAILURE:
      console.log('there was an error', action)
      return state.set('error', action.payload)
    case USER_SUCCESS:
      console.log('user', action.payload)
      return state
        .set('loading', false)
        .set('user', action.payload)
    default:
      return state;
  }
}
