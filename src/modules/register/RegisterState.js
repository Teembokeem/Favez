import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {Actions} from 'react-native-router-flux';
import {authRegister} from '../../services/auth';

// Initial state
const initialState = fromJS({
  value: 0,
  loading: false,
  user: {},
  error: {}
});

// Actions
const REGISTER_REQUEST = 'RegisterState/REGISTER_REQUEST';
const REGISTER_SUCCESS = 'RegisterState/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'RegisterState/REGISTER_FAILURE';

// Action creators
export async function register(data) {
  return {
    type: REGISTER_REQUEST,
    payload: data,
  };
}

export async function requestRegister(data) {
  return authRegister(data)
    .then((res) => ({type: REGISTER_SUCCESS, payload: res}))
    .catch((err) => ({type: REGISTER_FAILURE, payload: err}));
}

// Reducer
export default function RegisterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER_REQUEST:
      console.log('inside switch')
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestRegister(action.payload))
      );
    case REGISTER_SUCCESS:
      console.log(action.payload)
      return state
        .set('loading', false)
        .set('user', action.payload);
    case REGISTER_FAILURE:
      console.log(action.payload)
      return state
        .set('loading', false)
        .set('error', action.payload);
    default:
      return state;
  }
}
