import {
  authLogin,
  authUserInfo,
  authRegister
} from '../../services/auth';

import {
  postUser,
  updateUser,
  getCollaborators,
  getUsersByQuery,
  followuser,
  unfollowuser,
  getlistuserfollowing

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
export const USER_GET_COLLABORATORS_REQUEST = 'USER_GET_COLLABORATORS_REQUEST';
export const USER_GET_COLLABORATORS_SUCCESS = 'USER_GET_COLLABORATORS_SUCCESS';
export const USER_GET_COLLABORATORS_FAILURE = 'USER_GET_COLLABORATORS_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const USER_SEARCH_RESULT_SUCCESS = 'USER_SEARCH_RESULT_SUCCESS';
export const USER_SEARCH_RESULT_FAILURE = 'USER_SEARCH_RESULT_FAILURE';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
export const UNFOLLOW_USER_SUCCESS =  'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
export const GET_FOLLOWING_LIST_SUCCESS = 'GET_FOLLOWING_LIST_SUCCESS';
export const GET_FOLLOWING_LIST_FAILURE  = 'GET_FOLLOWING_LIST_FAILURE';
// Action creators
export async function login(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data
  };
}

export async function requestLogin(data) {
  console.log('now requesting login')
  return await authLogin(data)
    .then((res) => ({type: LOGIN_SUCCESS, payload: data}))
    .catch((err) => ({type: LOGIN_FAILURE, payload: err}));
}

export async function requestUserInfo() {
  console.log('grabbing auth user info')
  return await authUserInfo()
    .then((res) => ({type: USER_SUCCESS, payload: res}))
    .catch((err) => ({type: USER_FAILURE, payload: err}));
}

export async function register(data) {
  console.log('auth register request');
  return {
    type: AUTH_REGISTER_REQUEST,
    payload: data
  };
}

export async function requestRegister(data) {
  console.log('request auth register')
  return await authRegister(data)
    .then((res) => {
      console.log('our res and original data', res, data)
      return {type: AUTH_REGISTER_SUCCESS, payload: data}
    })
    .catch((err) => ({type: REGISTER_FAILURE, payload: err}));
}

export async function createUser(data) {
  console.log('create user actions')
  return postUser(data)
    .then((res) => ({type: REGISTER_SUCCESS, payload: data}))
    .catch((err) => ({type: REGISTER_FAILURE, payload: err}));
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


export async function findCollaborators() {
  return {
    type: USER_GET_COLLABORATORS_REQUEST
  }
}

export async function requestCollaborators() {
  console.log('requesting collaborators in actions');
  return await getCollaborators()
    .then((res) => ({type: USER_GET_COLLABORATORS_SUCCESS, payload: res.data}))
    .catch((err) => ({type: USER_GET_COLLABORATORS_SUCCESS, payload: err}));
}

export async function searchUsers(query) {
  console.log('searching users, query='+query)
  return await getUsersByQuery(query)
    .then((res) => {
      console.log('USER_SEARCH_RESULT', res);
      return {type: USER_SEARCH_RESULT_SUCCESS, payload: res.data}
    })
    .catch((err) => ({type: USER_SEARCH_RESULT_FAILURE, payload: err}));
}
// follow a usere



export async function followuserAction(data) {
  console.log('follow a user in actions');
  return await followuser(data)
    .then((res) => ({type: FOLLOW_USER_SUCCESS, payload: res }))
    .catch((err) => ({type: FOLLOW_USER_FAILURE, payload: err }));
}

// Unfollow a User
export async function unfollowuserAction(data) {
    console.log('unfollow a user in actions');
  return await unfollowuser(data)
    .then((res) => ({type: UNFOLLOW_USER_SUCCESS, payload: res}))
    .catch((err) => ({type: UNFOLLOW_USER_FAILURE, payload: err}));
}

//Get List of users you are Following
export async function getlistofuserfolowingAction(data) {
  console.log('Get List of followers in action in actions');
  return await getlistuserfollowing(data)
    .then((res) => ({type: GET_FOLLOWING_LIST_SUCCESS, payload: res}))
    .catch((err) => ({type: GET_FOLLOWING_LIST_FAILURE, payload: err}));
}
