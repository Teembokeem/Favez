import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_FAILURE,
  USER_SUCCESS,
  requestLogin,
  requestUserInfo,
  requestUserUpdate,
  requestRegister,
  createUser
} from './userActions';

// Initial state
const initialState = fromJS({
  user: {},
  value: 0,
  loading: false,
  error: {}
});

// Reducer
export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestRegister(action.payload))
      );
    case USER_UPDATE_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestUserUpdate(action.payload))
      );
    case USER_UPDATE_SUCCESS:
      console.log('Success', action.payload);
      return state
        .set('loading', false);
    case AUTH_REGISTER_SUCCESS:
      return loop(
        state.set('user', {}),
        Effects.promise(() => createUser(action.payload))
      );
    case REGISTER_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.payload.data);
    case LOGIN_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestLogin(action.payload))
      );
    case LOGIN_SUCCESS:
      return loop(
        state.set('user', {}),
        Effects.promise(requestUserInfo)
      );
    case LOGIN_FAILURE:
    case USER_FAILURE:
    case USER_UPDATE_FAILURE:
    case REGISTER_FAILURE:
      console.log('ERROR', action.payload);
      return state.set('error', action.payload);
    case USER_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.payload);
    default:
      return state;
  }
}
