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
  getlistuserfollowing,
  getFollowerList,
  requestSubscribedList,
  getlistuserblocked,
  getOtherUserSubscriptions,
  getOtherUserLists,
  getOtherUserCollabs,
  getOtherUserComments,
  getOtherUserLikes,
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
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
export const UNFOLLOW_USER_SUCCESS =  'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
export const GET_FOLLOWING_LIST_SUCCESS = 'GET_FOLLOWING_LIST_SUCCESS';
export const GET_FOLLOWING_LIST_FAILURE  = 'GET_FOLLOWING_LIST_FAILURE';
export const GET_FOLLOWER_LIST_SUCCESS = 'GET_FOLLOWER_LIST_SUCCESS';
export const GET_FOLLOWER_LIST_FAILURE  = 'GET_FOLLOWER_LIST_FAILURE';

export const GET_USER_SUBSCRIBED_LIST_SUCCESS = 'GET_USER_SUBSCRIBED_LIST_SUCCESS';
export const GET_USER_SUBSCRIBED_LIST_FAILURE = 'GET_USER_SUBSCRIBED_LIST_FAILURE';
export const GET_USER_BLOCKED_LIST_SUCCESS ='GET_USER_BLOCKED_LIST_SUCCESS';
export const GET_USER_BLOCKED_LIST_FAILURE = 'GET_USER_BLOCKED_LIST_FAILURE';
export const GET_BLOCKED_USER_SUCCESS ='GET_BLOCKED_USER_SUCCESS';
export const GET_BLOCKED_USER_FAILURE = 'GET_BLOCKED_USER_FAILURE';

export const GET_OTHER_USER_INFO_REQUEST = 'GET_OTHER_USER_INFO_REQUEST';
export const GET_OTHER_USER_INFO_SUCCESS = 'GET_OTHER_USER_INFO_SUCCESS';
export const GET_OTHER_USER_INFO_FAILURE = 'GET_OTHER_USER_INFO_FAILURE';

export const USER_TOGGLE_NSFW_SETTING_REQUEST = 'USER_TOGGLE_NSFW_SETTING';
export const USER_TOGGLE_NSFW_SETTING_SUCCESS = 'USER_TOGGLE_NSFW_SETTING_SUCCESS';
export const USER_TOGGLE_NSFW_SETTING_FAILURE = 'USER_TOGGLE_NSFW_SETTING_FAILURE';
export const USER_TOGGLE_PRIVATE_SETTING_REQUEST = 'USER_TOGGLE_PRIVATE_SETTING_REQUEST';
export const USER_TOGGLE_PRIVATE_SETTING_SUCCESS = 'USER_TOGGLE_PRIVATE_SETTING_SUCCESS';
export const USER_TOGGLE_PRIVATE_SETTING_FAILURE = 'USER_TOGGLE_PRIVATE_SETTING_FAILURE';

// Action creators
export async function login(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data
  };
}

export async function requestLogin(data) {
  return await authLogin(data)
    .then((res) => ({type: LOGIN_SUCCESS, payload: data}))
    .catch((err) => ({type: LOGIN_FAILURE, payload: err}));
}

export async function requestUserInfo() {
  return await authUserInfo()
    .then((res) => ({type: USER_SUCCESS, payload: res}))
    .catch((err) => ({type: USER_FAILURE, payload: err}));
}

export async function register(data) {
  return {
    type: AUTH_REGISTER_REQUEST,
    payload: data
  };
}

export async function requestRegister(data) {
  return await authRegister(data)
    .then((res) => {
      return {type: AUTH_REGISTER_SUCCESS, payload: data}
    })
    .catch((err) => ({type: REGISTER_FAILURE, payload: err}));
}

export async function createUser(data) {
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
  return await getCollaborators()
    .then((res) => ({type: USER_GET_COLLABORATORS_SUCCESS, payload: res.data}))
    .catch((err) => ({type: USER_GET_COLLABORATORS_SUCCESS, payload: err}));
}

export async function searchUsers(query) {
  return await getUsersByQuery(query)
    .then((res) => ({type: USER_SEARCH_RESULT_SUCCESS, payload: res.data}))
    .catch((err) => ({type: USER_SEARCH_RESULT_FAILURE, payload: err}));
}

export function requestOtherUserInfo(userId) {

  return dispatch => {

    dispatch({type: GET_OTHER_USER_INFO_REQUEST, payload: userId});

    return Promise.all([
      getUserById(userId),
      getOtherUserLists(userId),
      getOtherUserSubscriptions(userId),
      getOtherUserCollabs(userId),
      getOtherUserComments(userId),
      getOtherUserLikes(userId)
    ]).then(res => {
      const payload = {
        info: res[0].data,
        lists: res[1].data,
        subscriptions: res[2].data,
        collabs: res[3].data,
        comments: res[4].data,
        likes: res[5].data
      }
      dispatch({type: GET_OTHER_USER_INFO_SUCCESS, payload: payload});
    }).catch(err => {
      dispatch({type: GET_OTHER_USER_INFO_FAILURE, payload: err});
    })
  }
}

export function toggleNSFWSetting() {
  return {
    type: USER_TOGGLE_NSFW_SETTING_REQUEST
  }
}

export function togglePrivateSetting() {
  return {
    type: USER_TOGGLE_PRIVATE_SETTING_REQUEST
  }
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
      }
      else if (response.error) {
      }
      else if (response.customButton) {
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
  return await followuser(data)
    .then((res) => ({type: FOLLOW_USER_SUCCESS, payload: res, userId: data }))
    .catch((err) => {
      Alert.alert('Error when follow a user, please try again later!')
      return {type: FOLLOW_USER_FAILURE, payload: err, userId: data }
    });
}

// Unfollow a User
export async function unfollowuserAction(data) {
  return await unfollowuser(data)
    .then((res) => ({type: UNFOLLOW_USER_SUCCESS, payload: res}))
    .catch((err) => ({type: UNFOLLOW_USER_FAILURE, payload: err}));
}

//Get List of users you are Following
export async function requestFollowingUsersList(data) {
  return await getlistuserfollowing(data)
    .then((res) => ({type: GET_FOLLOWING_LIST_SUCCESS, payload: res}))
    .catch((err) => ({type: GET_FOLLOWING_LIST_FAILURE, payload: err}));
}

// Get list of  blocked users.

export async function requestBlockedUsersList(data) {
  return await getlistuserblocked(data)
    .then((res) => ({type: GET_BLOCKED_USER_SUCCESS, payload: res}))
    .catch((err) => ({type: GET_BLOCKED_USER_FAILURE, payload: err}));
}

//Get list of subscribing users......
  export async function requestSubscribedListAction(type){
    return await requestSubscribedList(type)
      .then((res) => ({ type: GET_USER_SUBSCRIBED_LIST_SUCCESS, payload: res}))
      .catch((err) =>({ type: GET_USER_SUBSCRIBED_LIST_FAILURE, payload: err}));

  }
  //Get List of users blocked


    export async function requestBlockedListAction(type){
      return await requestSubscribedList(type)
        .then((res) => ({ type: GET_USER_BLOCKED_LIST_SUCCESS, payload: res}))
        .catch((err) =>({ type: GET_USER_BLOCKED_LIST_FAILURE, payload: err}));

    }

export async function requestFollowerUsersList(data) {
  return await getFollowerList(data)
    .then((res) => ({type: GET_FOLLOWER_LIST_SUCCESS, payload: res}))
    .catch((err) => ({type: GET_FOLLOWER_LIST_FAILURE, payload: err}));
}

export async function requestOtherUserSubscriptions(userId) {
  return await getSubscriptions(userId)
    .then((res) => {
      return {type: OTHER_USER_SUBSCRIPTIONS_SUCCESS, payload: res.data}
    })
    .catch((err) => ({type: OTHER_USER_SUBSCRIPTIONS_FAILURE, payload: err}));
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
