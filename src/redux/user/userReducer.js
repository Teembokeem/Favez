import { fromJS } from 'immutable';
import { loop, Effects } from 'redux-loop';
import {
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
    requestCollaborators,
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILURE,
    GET_FOLLOWING_LIST_SUCCESS,
    GET_FOLLOWING_LIST_FAILURE
} from './userActions';
// Initial state
const initialState = fromJS({
    user: {},
    collaborators_all: [],
    value: 0,
    loading: false,
    error: {},
    searchedUsers: [],
    followedusers: []
});
// Reducer
export default function UserStateReducer(state = initialState, action = {}) {
    switch (action.type) {
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
        console.log('login success with auth0 sendign to request authorize')
        return loop(state.set('user', {}), Effects.promise(() => requestUserInfo()));
    case USER_SEARCH_RESULT_SUCCESS:
        return state.set('loading', false).set('searchedUsers', action.payload);
    case LOGIN_FAILURE:
    case USER_FAILURE:
    case USER_UPDATE_FAILURE:
    case USER_GET_COLLABORATORS_FAILURE:
    case REGISTER_FAILURE:
    case USER_SEARCH_RESULT_FAILURE:
        console.log('ERROR', action.payload);
        return state.set('error', action.payload);
    case USER_SUCCESS:
        console.log('SUCCESS!', action.payload)
        return state.set('loading', false).set('user', action.payload);
    case FOLLOW_USER_SUCCESS:
        return state.set('followedusers', action.payload);
    case FOLLOW_USER_FAILURE:
    case UNFOLLOW_USER_SUCCESS:
        return state.set('followedusers', action.payload);
    case UNFOLLOW_USER_FAILURE:
    case GET_FOLLOWING_LIST_SUCCESS:
        return state.set('followedusers', action.payload);
    case GET_FOLLOWING_LIST_FAILURE:
    default:
        return state;
    }
}
