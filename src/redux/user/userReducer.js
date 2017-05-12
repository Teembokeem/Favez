import { fromJS } from 'immutable';
import { loop, Effects } from 'redux-loop';
import {
    USER_SHOW_PROFILE,
    USER_BY_ID_SUCCESS,
    USER_BY_ID_FALIURE,
    requestOtherUserInfo,
    UPLOAD_USER_IMAGE_START,
    UPLOAD_USER_IMAGE_SUCCESS,
    UPLOAD_USER_IMAGE_FAIL,
    UPLOAD_USER_IMAGE_PREFETCHED,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
    USER_GET_COLLABORATORS_REQUEST,
    USER_GET_COLLABORATORS_SUCCESS,
    USER_GET_COLLABORATORS_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_FAILURE,
    USER_SUCCESS,
    USER_SEARCH_RESULT_SUCCESS,
    USER_SEARCH_RESULT_FAILURE,
    requestLogin,
    requestUserInfo,
    requestUserUpdate,
    requestRegister,
    createUser,
    followuserAction,
    unfollowuserAction,
    requestCollaborators,
    FOLLOW_USER,
    UNFOLLOW_USER,
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILURE,
    GET_FOLLOWING_LIST_SUCCESS,
    GET_FOLLOWING_LIST_FAILURE,
    UPLOAD_USER_IMAGE_PREFETCHED_FAIL
} from './userActions';
// Initial state
const initialState = fromJS({
    user: {},
    collaborators_all: [],
    value: 0,
    loading: false,
    error: {},
    searchedUsers: [],
    followedusers: [],
    recentFollowedUser:{
      id:-1,
      status: false
    },
    otherUser: {}
});
// Reducer
export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPLOAD_USER_IMAGE_START: {
      const user = state.get('user')
      return state.set('user', {
        ...user,
        favez: {
          ...user.favez,
          backupImage: user.favez.image ? user.favez.image : user.auth0.picture,
          //image: action.image,
          imageStatus: 'uploading'
        }
      })
    }
    case UPLOAD_USER_IMAGE_SUCCESS: {
      const user = state.get('user')
      return state.set('user', {
        ...user,
        favez: {
          ...user.favez,
          imageStatus: 'prefetching',
          image: action.image
        }
      })
    }
    case UPLOAD_USER_IMAGE_FAIL: {
      const user = state.get('user')
      return state.set('user', {
        ...user,
        favez: {
          ...user.favez,
          image: user.favez.backupImage,
          imageStatus: 'uploadFailed'
        }
      })
    }
    case UPLOAD_USER_IMAGE_PREFETCHED: {
      const user = state.get('user')
      return state.set('user', {
        ...user,
        favez: {
          ...user.favez,
          imageStatus: 'prefetched'
        }
      })
    }
    case UPLOAD_USER_IMAGE_PREFETCHED_FAIL: {
      const user = state.get('user')
      return state.set('user', {
        ...user,
        favez: {
          ...user.favez,
          imageStatus: 'prefetchedFail'
        }
      })
    }
    case USER_UPDATE_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestUserUpdate(action.payload)));
    case USER_UPDATE_SUCCESS:
        console.log('Success', action.payload);
        return state.set('loading', false);
    case USER_GET_COLLABORATORS_REQUEST:
        console.log('caught reducer action to grab collaborators')
        return loop(state.set('loading', true), Effects.promise(() => requestCollaborators()));
    case USER_GET_COLLABORATORS_SUCCESS:
        console.log('Success', action.payload);
        // console.log('user', state.get('user'));
        action.payload = action.payload.filter((collaborator) => collaborator.id !== state.get('user').favez.id);
        return state.set('loading', false).set('collaborators_all', action.payload);
    case AUTH_REGISTER_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestRegister(action.payload)));
    case AUTH_REGISTER_SUCCESS:
        console.log('auth register success')
        return loop(state.set('user', {}), Effects.promise(() => createUser(action.payload)));
    case REGISTER_SUCCESS:
        console.log('register success')
        return loop(state.set('loading', false).set('user', action.payload.data), Effects.promise(() => requestLogin(action.payload)));
    case LOGIN_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestLogin(action.payload)));
    case LOGIN_SUCCESS:
      return loop(
        state.set('user', {}),
        Effects.promise(() => requestUserInfo())
      );
    case USER_SHOW_PROFILE:
      return loop(
        state.set('otherUser', {}),
        Effects.promise(() => requestOtherUserInfo(action.payload))
      );
    case USER_SEARCH_RESULT_SUCCESS:
      return state
        .set('loading', false)
        .set('searchedUsers', action.payload);
    case USER_BY_ID_SUCCESS:
      return state
        .set('loading', false)
        .set('otherUser', action.payload);
    case LOGIN_FAILURE:
    case USER_FAILURE:
    case USER_UPDATE_FAILURE:
    case USER_GET_COLLABORATORS_FAILURE:
    case REGISTER_FAILURE:
    case USER_SEARCH_RESULT_FAILURE:
    case USER_BY_ID_FALIURE:
      console.log('ERROR', action.payload);
      return state.set('error', action.payload);
    case USER_SUCCESS:
        console.log('SUCCESS!', action.payload)
        return state.set('loading', false).set('user', action.payload);
        case FOLLOW_USER:
        console.log("Follow user called 11");
            return loop(state.setIn(['recentFollowedUser','id'], action.payload),
            Effects.promise(() => followuserAction(action.payload)));
            case UNFOLLOW_USER:
                return loop(state.setIn(['recentFollowedUser','id'], action.payload),
                Effects.promise(() => unfollowuserAction(action.payload)));
    case FOLLOW_USER_SUCCESS:
    console.log("User follow success", action.payload);
        return state.setIn(['recentFollowedUser','status'],true);
    case FOLLOW_USER_FAILURE:
    case UNFOLLOW_USER_SUCCESS:
        return state.setIn(['recentFollowedUser','status'],false);
    case UNFOLLOW_USER_FAILURE:
    case GET_FOLLOWING_LIST_SUCCESS:
    console.log("following users list followedusers", action.payload);
        return state.set('followedusers', action.payload.data);
    case GET_FOLLOWING_LIST_FAILURE:
    default:
        return state;
    }
}
