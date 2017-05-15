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
  getUserById,
  followuser,
  unfollowuser,
  getlistuserfollowing
} from '../../services/user';
import * as userService from '../../services/user'
var ImagePicker = require('react-native-image-picker');
import * as cloudinary from '../../services/cloudinary'
import {Alert, Image} from 'react-native'

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
export const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE';
export const USER_BY_ID_SUCCESS = 'USER_BY_ID_SUCCESS';
export const USER_BY_ID_FALIURE = 'USER_BY_ID_FALIURE';
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
  return await getUsersByQuery(query)
    .then((res) => ({type: USER_SEARCH_RESULT_SUCCESS, payload: res.data}))
    .catch((err) => ({type: USER_SEARCH_RESULT_FAILURE, payload: err}));
}

export async function loadUserProfile(userId) {
  return {
    type: LOAD_USER_PROFILE,
    payload: userId
  };
}

export async function requestOtherUserInfo(userId) {
  return await getUserById(userId)
    .then((res) => {
      console.log('USER_DATA', res);
      return {type: USER_BY_ID_SUCCESS, payload: res.data}
    })
    .catch((err) => ({type: USER_BY_ID_FALIURE, payload: err}));
}

export const UPLOAD_USER_IMAGE_START = "UPLOAD_USER_IMAGE_START"
export const UPLOAD_USER_IMAGE_SUCCESS = "UPLOAD_USER_IMAGE_SUCCESS"
export const UPLOAD_USER_IMAGE_FAIL = "UPLOAD_USER_IMAGE_FAIL"
export const UPLOAD_USER_IMAGE_PREFETCHED = "UPLOAD_USER_IMAGE_PREFETCHED"
export const UPLOAD_USER_IMAGE_PREFETCHED_FAIL = "UPLOAD_USER_IMAGE_PREFETCHED_FAIL"
/**
 *  onUploading: function (base64ImageUri){} : pass this callback to handle
 */
export function pickProfileImage(onUploading, onUploaded) {
  return dispatch => {
    var options = {
      title: 'Select Profile Image',
      customButtons: [],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    //step 1: show options to take or select photos
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {

        const imageUri = 'data:image/jpeg;base64,' + response.data

        dispatch({
          type: UPLOAD_USER_IMAGE_START
        })
        //step 2: Show token/selected image
        if (onUploading) {
          onUploading(imageUri)
        }
        //step 3: upload to cloudinary
        cloudinary.uploadImage(imageUri).then((data) => {
          const {secure_url} = data

          //step 4: save image url returned from cloudinary to favez server
          updateUser({image: secure_url})
          .then(() => {

            dispatch({
              type: UPLOAD_USER_IMAGE_SUCCESS,
              image: secure_url
            })

            //step 5: prefetch image from cloudinary's url
            Image.prefetch(secure_url).then(() => {
              dispatch({
                type: UPLOAD_USER_IMAGE_PREFETCHED
              })
              if (onUploaded) onUploaded(true)
            }, () => {
              console.warn(`Prefetch image profile from "${secure_url}" fail. Use binary instead.`)
              dispatch({
                type: UPLOAD_USER_IMAGE_PREFETCHED_FAIL
              })
            })
          }, () => {
            dispatch({type: UPLOAD_USER_IMAGE_FAIL})
            if (onUploaded) onUploaded(false)
            Alert.alert('Fail to upload profile image. Please try again later!')
          })
        }, () => {
          dispatch({type: UPLOAD_USER_IMAGE_FAIL})
        })
      }
    });
  }
}
// follow a usere



export async function followuserAction(data) {
  console.log('follow a user in actions');
  return await followuser(data)
    .then((res) => ({type: FOLLOW_USER_SUCCESS, payload: res, userId: data }))
    .catch((err) => {
      Alert.alert('Error when follow a user, please try again later!')
      return {type: FOLLOW_USER_FAILURE, payload: err, userId: data }
    });
}

// Unfollow a User
export async function unfollowuserAction(data) {
    console.log('unfollow a user in actions');
  return await unfollowuser(data)
    .then((res) => ({type: UNFOLLOW_USER_SUCCESS, payload: res}))
    .catch((err) => ({type: UNFOLLOW_USER_FAILURE, payload: err}));
}

//Get List of users you are Following
export async function requestFollowingUsersList(data) {
  console.log('Get List of followers in action in actions');
  return await getlistuserfollowing(data)
    .then((res) => ({type: GET_FOLLOWING_LIST_SUCCESS, payload: res}))
    .catch((err) => ({type: GET_FOLLOWING_LIST_FAILURE, payload: err}));
}

export const REQUEST_USER_TO_FOLLOW = "REQUEST_USER_TO_FOLLOW"
export const REQUEST_USER_TO_FOLLOW_SUCCESS = "REQUEST_USER_TO_FOLLOW_SUCCESS"
export const REQUEST_USER_TO_FOLLOW_FAIL = "REQUEST_USER_TO_FOLLOW_FAIL"
export function requestUserToFollow() {
  return (dispatch, getState) => {
    const collaborators = getState().getIn(['user', 'collaborators_all'])
    const currentUserId = getState().getIn(['user', 'user']).favez.id
    dispatch({
      type: REQUEST_USER_TO_FOLLOW,
      collaboratorsSize: collaborators.size,
      collaboratorsLength: collaborators.length
    })

    return Promise.all([
      collaborators.size || collaborators.length
        ? Promise.resolve({data: collaborators}) : getCollaborators(),
      getlistuserfollowing(currentUserId)
    ]).then(([allUsersResp, followingUsersResp]) => {
      const allUsers = allUsersResp.data
      const followingUsers = followingUsersResp.data

      dispatch({
        type: USER_GET_COLLABORATORS_SUCCESS,
        payload: allUsers.map(user => {
          const following = typeof followingUsers
            .find(followingUser => user.id === followingUser.id) !== 'undefined'
          return {...user, following}
        })
      })
    }, () => {
      dispatch({
        type: REQUEST_USER_TO_FOLLOW_FAIL
      })
    }).catch(e => console.error(e))
  }
}

export const REMOVE_USER_FROM_FOLLOW_LIST = "REMOVE_USER_FROM_FOLLOW_LIST"
export function removeFromFollowList(removedUserId){
  return (dispatch) => {
    dispatch({
      type: REMOVE_USER_FROM_FOLLOW_LIST,
      removedUserId
    })
    userService.removeFromFollowList(removedUserId).done()
  }
}
