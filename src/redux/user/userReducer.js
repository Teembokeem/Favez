import { fromJS } from 'immutable';
import { loop, Effects } from 'redux-loop';
import {
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
    FOLLOW_USER,
    UNFOLLOW_USER,
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILURE,
    GET_FOLLOWING_LIST_SUCCESS,
    GET_FOLLOWING_LIST_FAILURE,
    GET_FOLLOWER_LIST_SUCCESS,
    GET_FOLLOWER_LIST_FAILURE,
    REQUEST_USER_TO_FOLLOW,
    REMOVE_USER_FROM_FOLLOW_LIST,
    UPLOAD_USER_IMAGE_PREFETCHED_FAIL,
    OTHER_USER_INFO_REQUEST,
    OTHER_USER_INFO_SUCCESS,
    OTHER_USER_INFO_FAILURE,
    OTHER_USER_SUBSCRIPTIONS_REQUEST,
    OTHER_USER_SUBSCRIPTIONS_SUCCESS,
    OTHER_USER_SUBSCRIPTIONS_FAILURE,
    GET_USER_SUBSCRIBED_LIST_SUCCESS,
    GET_USER_SUBSCRIBED_LIST_FAILURE,
    GET_USER_BLOCKED_LIST_SUCCESS,
    GET_USER_BLOCKED_LIST_FAILURE,
    GET_BLOCKED_USER_SUCCESS,
    GET_BLOCKED_USER_FAILURE,
    requestLogin,
    requestUserInfo,
    requestUserUpdate,
    requestRegister,
    createUser,
    followuserAction,
    unfollowuserAction,
    requestCollaborators,
    requestOtherUserSubscriptions

} from './userActions';
// Initial state
const initialState = fromJS({
    user: {},
    collaborators_all: [],
    value: 0,
    loading: false,
    error: {},
    searchedUsers: [],
    followingUsers: [],
    followerUsers:[],
    recentFollowedUser:{
      id:-1,
      status: false
    },

    userSubscribedList: [],
    userBlockedList: [],
    userBlockedPeople: [],

    otherUser: {},
    otherUserLists: [],
    otherUserCollaborators: [],
    otherUserSubscriptions: [],
    otherUserLikes: [],
    otherUserComments: []

});
// Reducer
export default function UserStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REMOVE_USER_FROM_FOLLOW_LIST: {
      const collaborators = state.get('collaborators_all')
      const currentIndex = collaborators.findIndex(item => item.id === action.removedUserId)
      return state.setIn(['recentFollowedUser','status'],true)
        .set('collaborators_all', [
          ...collaborators.slice(0, currentIndex),
          {
            ...collaborators[currentIndex],
            removedFromFollowingList: true
          },
          ...collaborators.slice(currentIndex + 1, collaborators.length)
        ])
    }
    case REQUEST_USER_TO_FOLLOW: {
      return state.set('loading', true)
    }
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
        return state.set('loading', false);
    case USER_GET_COLLABORATORS_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestCollaborators()));
    case USER_GET_COLLABORATORS_SUCCESS:
        action.payload = action.payload.filter((collaborator) => collaborator.id !== state.get('user').favez.id);
        return state.set('loading', false).set('collaborators_all', action.payload);
    case AUTH_REGISTER_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestRegister(action.payload)));
    case AUTH_REGISTER_SUCCESS:
        return loop(state.set('user', {}), Effects.promise(() => createUser(action.payload)));
    case REGISTER_SUCCESS:
        return loop(state.set('loading', false).set('user', action.payload.data), Effects.promise(() => requestLogin(action.payload)));
    case LOGIN_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestLogin(action.payload)));
    case LOGIN_SUCCESS:
      return loop(
        state.set('user', {}),
        Effects.promise(() => requestUserInfo())
      );
    case OTHER_USER_INFO_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestOtherUserInfo(action.payload)),
      );
    case OTHER_USER_SUBSCRIPTIONS_REQUEST:
      return loop(
          state.set('loading', true),
          Effects.promise(() => requestOtherUserSubscriptions(action.payload))
      );
    case USER_SEARCH_RESULT_SUCCESS:
      return state
        .set('loading', false)
        .set('searchedUsers', action.payload);
    case OTHER_USER_INFO_SUCCESS:
      return state
        .set('loading', false)
        .set('otherUser', action.payload);
    case OTHER_USER_SUBSCRIPTIONS_SUCCESS:
      return state
          .set('loading', false)
          .set('otherUserSubscriptions', action.payload);
    case LOGIN_FAILURE:
    case USER_FAILURE:
    case USER_UPDATE_FAILURE:
    case USER_GET_COLLABORATORS_FAILURE:
    case REGISTER_FAILURE:
    case USER_SEARCH_RESULT_FAILURE:
    case OTHER_USER_INFO_FAILURE:
    case GET_FOLLOWING_LIST_FAILURE:
    case GET_FOLLOWER_LIST_FAILURE:
    case OTHER_USER_SUBSCRIPTIONS_FAILURE:
      return state.set('loading', false).set('error', action.payload);
    case USER_SUCCESS:

        return state.set('loading', false).set('user', action.payload);
        case FOLLOW_USER:
            return loop(state.setIn(['recentFollowedUser','id'], action.payload),
            Effects.promise(() => followuserAction(action.payload)));
            case UNFOLLOW_USER:
                return loop(state.setIn(['recentFollowedUser','id'], action.payload),
                Effects.promise(() => unfollowuserAction(action.payload)));
    case FOLLOW_USER_SUCCESS:
        return state.setIn(['recentFollowedUser','status'],true);
    case FOLLOW_USER_FAILURE:
      return state.set('loading', false).set('user', action.payload);
    case FOLLOW_USER: {
      const collaborators = state.get('collaborators_all')
      const currentIndex = collaborators.findIndex(item => item.id === action.payload)
      return loop(
        state.setIn(['recentFollowedUser','id'], action.payload)
        .set('collaborators_all', [
          /**
            This code cannot leverage immutable API because nested object of the state is not immutable object
            and also being used in many components. May need to refactor in future.
          */
          ...collaborators.slice(0, currentIndex),
          {
            ...collaborators[currentIndex],
            uiStatus: 'followRequesting'
          },
          ...collaborators.slice(currentIndex + 1, collaborators.length)
        ]),
        Effects.promise(() => followuserAction(action.payload))
      );
    }
    case UNFOLLOW_USER:
      return loop(state.setIn(['recentFollowedUser','id'], action.payload),
        Effects.promise(() => unfollowuserAction(action.payload)));
    case FOLLOW_USER_SUCCESS: {
      const collaborators = state.get('collaborators_all')
      const currentIndex = collaborators.findIndex(item => item.id === action.userId)
      return state.setIn(['recentFollowedUser','status'],true)
        .set('collaborators_all', [
          ...collaborators.slice(0, currentIndex),
          {
            ...collaborators[currentIndex],
            uiStatus: 'followSuccess'
          },
          ...collaborators.slice(currentIndex + 1, collaborators.length)
        ])
    }
    case FOLLOW_USER_FAILURE: {
      const collaborators = state.get('collaborators_all')
      const currentIndex = collaborators.findIndex(item => item.id === action.userId)
      return state.setIn(['recentFollowedUser','status'],false)
        .set('collaborators_all', [
          ...collaborators.slice(0, currentIndex),
          {
            ...collaborators[currentIndex],
            uiStatus: 'followFail'
          },
          ...collaborators.slice(currentIndex + 1, collaborators.length)
        ])
    }
    case GET_USER_SUBSCRIBED_LIST_SUCCESS:
 return state.set('loading', false).set('userSubscribedList',action.payload.data);

case GET_USER_SUBSCRIBED_LIST_FAILURE:
case GET_USER_BLOCKED_LIST_SUCCESS:
return state.set('loading', false).set('userBlockedList',action.payload.data);
case GET_USER_BLOCKED_LIST_FAILURE:
case GET_BLOCKED_USER_SUCCESS:
console.log("blocked users by a logged in user",action.payload.data);
return state.set('loading', false).set('userBlockedPeople',action.payload.data);
case GET_BLOCKED_USER_FAILURE:
    case UNFOLLOW_USER_SUCCESS:
      return state.setIn(['recentFollowedUser','status'],false);
    case UNFOLLOW_USER_FAILURE:
    case GET_FOLLOWING_LIST_SUCCESS:
      return state.set('loading', false).set('followingUsers', action.payload.data);
    case GET_FOLLOWER_LIST_SUCCESS:
      return state.set('loading', false).set('followerUsers', action.payload.data);
    default:
      return state;
    }
}
