import { fromJS } from 'immutable';
import { loop, Effects } from 'redux-loop';
import {
    LIST_REQUEST,
    LIST_RESPONSE,
    SET_LIST,
    LIST_ADD_INVITEE,
    LIST_REMOVE_INVITEE,
    LIST_GET_DETAILS_REQUEST,
    LIST_GET_DETAILS_SUCCESS,
    LIST_GET_DETAILS_FAILURE,
    LIST_MYLIST_REQUEST,
    LIST_MYLIST_SUCCESS,
    LIST_MYLIST_FAILURE,
    LIST_CREATE_REQUEST,
    LIST_CREATE_SUCCESS,
    LIST_CREATE_FAILURE,
    LIST_SEND_LIST_INVITATIONS_REQUEST,
    LIST_SEND_LIST_INVITATIONS_SUCCESS,
    LIST_SEND_LIST_INVITATIONS_FAILURE,
    LIST_SET_NEWLIST_OPTIONS,
    LIST_BY_TOPIC_SUCCESS,
    LIST_BY_TOPIC_FAILURE,
    requestCreateList,
    requestGetMyLists,
    requestSingleList,
    requestSendInvites,
    LIKE_UNLIKE_LIST_ITEM,
    LIKE_UNLIKE_LIST_ITEM_SUCCESS,
    LIKE_UNLIKE_LIST_ITEM_FAILURE,
    LIST_DELETE_RELATION_SUCCESS,
    LIST_DELETE_RELATION_FAILURE,
    GET_LIST_BY_RELATION_SUCCESS,
    GET_LIST_BY_RELATION_FAILURE
} from './listActions';
// Initial state
const initialState = fromJS({
    all: [],
    myLists: [],
    subscribedLists: [],
    collaborations: [],
    current: {},
    options: {
        description: '',
        tags: [],
        topics: [],
        currTag: '',
        priv: false,
        nsfw: false
    },
    inviteList: [],
    loading: true,
    listByTopics: []
});
// Reducer
export default function ListReducer(state = initialState, action = {}) {
    switch (action.type) {
    case LIST_REQUEST:
        return loop(state.set('loading', true), Effects.promise(action.payload));
    case LIST_RESPONSE:
        return state.set('loading', false).set('all', action.payload.data);
    case SET_LIST:
        return state.set('current', state.get(action.payload.list)[action.payload.index]);
    case LIST_ADD_INVITEE:
        return state.set('inviteList', state.get('inviteList').concat(action.payload));
    case LIST_REMOVE_INVITEE:
        return state.set('inviteList', state.get('inviteList').filter((item) => item !== action.payload));
    case LIST_GET_DETAILS_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestSingleList(action.payload)));
    case LIST_GET_DETAILS_SUCCESS:
        console.log('SUCCESS', state, action);
        return state.set('loading', false).set('current', action.payload.data[0]);
    case LIST_MYLIST_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestGetMyLists()));
    case LIST_MYLIST_SUCCESS:
        console.log('SUCCESS My List', state.toJS(), action);
        return state.set('loading', false).set('myLists', action.payload.data);
    case LIST_SEND_LIST_INVITATIONS_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestSendInvites(action.payload)));
    case LIST_SEND_LIST_INVITATIONS_SUCCESS:
        console.log('SUCCESS', state, action);
        return state.set('loading', false).set('myLists', action.payload.data);
    case LIST_CREATE_REQUEST:
        console.log('hello create request in reducer');
        return loop(state.set('loading', true), Effects.promise(() => requestCreateList(action.payload)));
    case LIST_CREATE_SUCCESS:
        console.log('SUCCESS', state, action);
        return state.set('loading', false);
    case LIST_SET_NEWLIST_OPTIONS:
        console.log('setting new list options: ', state.get('options'), action.payload);
        let key = Object.keys(action.payload)[0];
        return insertOptionParams(state, state.get('options'), key, action.payload[key]);
    case LIST_BY_TOPIC_SUCCESS:
        console.log('SUCCESS List By Topic', state.toJS(), action);
        return state.set('loading', false).set('listByTopics', action.payload.data);
    case LIST_MYLIST_FAILURE:
    case LIST_CREATE_FAILURE:
    case LIST_GET_DETAILS_FAILURE:
    case LIST_SEND_LIST_INVITATIONS_FAILURE:
    case LIST_BY_TOPIC_FAILURE:
        console.log('ERROR', state, action);
        return state.set('ERROR', action);
    case LIKE_UNLIKE_LIST_ITEM:
        console.log("List Item like action called... ");
    case LIKE_UNLIKE_LIST_ITEM_SUCCESS:
        console.log("Success response subdata", action);
    case LIKE_UNLIKE_LIST_ITEM_FAILURE:
        console.log("failure like recieved", action);
    case LIST_DELETE_RELATION_SUCCESS:
        console.log("Success Recieved");
    case LIST_DELETE_RELATION_FAILURE:
        console.log("Fail list recd...");
    case GET_LIST_BY_RELATION_SUCCESS:
        console.log("success list", action.payload.data);
        return state.set('loading', false).set('subscribedLists', action.payload.data);
    case GET_LIST_BY_RELATION_FAILURE:
        console.log("failed subscribe list", action);
    default:
        return state;
    }
}

function insertOptionParams(state, obj, prop, values) {
    console.log('helllooooo propssss', prop, values)
    switch (prop) {
    case 'description':
    case 'currTag':
    case 'priv':
    case 'nsfw':
        console.log('priavte, nsfw????: ', prop, values)
        return state.setIn(['options', prop], values);
    case 'topics':
        let foundIndex = state.getIn(['options', prop]).indexOf(values);
        if (foundIndex === -1) {
            return state.setIn(['options', prop], state.getIn(['options', prop]).concat(values))
        } else {
            let newArr = state.getIn(['options', prop]).splice(foundIndex, 1);
            console.log(state.getIn(['options', prop]))
            return state.setIn(['options', prop], newArr);
        }
    case 'tags':
        console.log('tags', state.getIn(['options', prop]), values);
        if (typeof values === 'number') {
            console.log('deleting!!');
            let newArr = state.getIn(['options', prop]).splice(values, 1);
            return state.setIn(['options', prop], newArr).setIn(['options', 'currTag'], '');
        } else {
            return state.setIn(['options', prop], state.getIn(['options', prop]).concat(values)).setIn(['options', 'currTag'], '');
        }
    default:
        return null;
    }
}
