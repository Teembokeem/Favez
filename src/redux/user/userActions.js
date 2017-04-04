import {
  authLogin,
  authUserInfo,
  authRegister
} from '../../services/auth';

import {
  postUser,
  updateUser
} from '../../services/user';

// Actions
export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

// Action creators
export async function login(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data
  };
}

export async function requestLogin(data) {
  return await authLogin(data)
    .then((res) => ({type: LOGIN_SUCCESS, payload: res}))
    .catch((err) => ({type: LOGIN_FAILURE, payload: err}));
}

export async function register(data) {
  return {
    type: AUTH_REGISTER_REQUEST,
    payload: data
  };
}

export async function update(data) {
  return {
    type: USER_UPDATE_REQUEST,
    payload: data
  };
}

export async function requestUserUpdate(data) {
  return await updateUser(data)
    .then((res) => ({type: USER_UPDATE_SUCCESS, payload: res}))
    .catch((err) => ({type: USER_UPDATE_FAILURE, payload: err}));
}

export async function requestRegister(data) {
  return authRegister(data)
    .then((res) => ({type: AUTH_REGISTER_SUCCESS, payload: res}))
    .catch((err) => ({type: REGISTER_FAILURE, payload: err}));
}

export async function createUser(data) {
  return postUser(data)
    .then((res) => ({type: REGISTER_SUCCESS, payload: res}))
    .catch((err) => ({type: REGISTER_FAILURE, payload: err}));
}

export async function requestUserInfo() {
  return await authUserInfo()
    .then((res) => ({type: USER_SUCCESS, payload: res}))
    .catch((err) => ({type: USER_FAILURE, payload: err}));
}
