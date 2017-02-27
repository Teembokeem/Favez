import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {Actions} from 'react-native-router-flux';
import {authLogin, authUserInfo} from '../../services/auth';
import {setAuthenticationToken} from '../../utils/authentication';

// Initial state
const initialState = fromJS({
  user: {},
  value: 0,
  loading: false,
  error: {},
});

// Actions
const LOGIN_REQUEST = 'LoginState/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LoginState/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LoginState/LOGIN_FAILURE';
const USER_SUCCESS = 'LoginState/USER_SUCCESS';
const USER_FAILURE = 'LoginState/USER_FAILURE';

// Action creators
export async function login(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
}

export async function requestLogin(data) {
  return await authLogin(data)
    .then((res) => ({type: LOGIN_SUCCESS, payload: res}))
    .catch((err) => ({type: LOGIN_FAILURE, payload: err}));
}

export async function requestUserInfo() {
  return await authUserInfo()
    .then((res) => ({type: USER_SUCCESS, payload: res}))
    .catch((err) => ({type: USER_FAILURE, payload: err}));
}


// Reducer
export default function LoginStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestLogin(action.payload))
      );
    case LOGIN_SUCCESS:
      return loop(
        setAuthenticationToken(action.payload.access_token),
        Effects.promise(requestUserInfo)
      );
    case LOGIN_FAILURE:
    case USER_FAILURE:
      console.log('there was an error', action)
      return state.set('error', action.payload)
    case USER_SUCCESS:
      console.log(action, state)
      return state
        .set('loading', false)
        .set('user', action.payload)
    default:
      return state;
  }
}
