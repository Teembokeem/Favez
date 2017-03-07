import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {setAuthenticationToken, setAuth0Token} from '../../utils/authentication';
import {
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
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
      setAuth0Token(action.payload.access_token);
      setAuthenticationToken(action.payload.id_token);
      return loop(
        state.set('user', {}),
        Effects.promise(requestUserInfo)
      );
    case LOGIN_FAILURE:
    case USER_FAILURE:
    case REGISTER_FAILURE:
      console.log('there was an error', action.payload);
      return state.set('error', action.payload);
    case USER_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.payload);
    default:
      return state;
  }
}
