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
    LIKE_UNLIKE_LIST_ITEM,
    LIKE_UNLIKE_LIST_ITEM_SUCCESS,
    LIKE_UNLIKE_LIST_ITEM_FAILURE,
    LIST_DELETE_RELATION_SUCCESS,
    LIST_DELETE_RELATION_FAILURE,
    GET_LIST_BY_RELATION_SUCCESS,
    GET_LIST_BY_RELATION_FAILURE,
    LIST_SEARCH_RESULT_SUCCESS,
    LIST_SEARCH_RESULT_FAILURE,
    requestCreateList,
    requestGetMyLists,
    requestSingleList,
    requestSendInvites,
    createlistRelationAction,
    deleteListRelationAction,
    SUBSCRIBE_LIST,
    UNSUBSCRIBE_LIST,
    LIST_CREATE_RELATION_SUCCESS,
    UPLOAD_LIST_IMAGE_START,
    UPLOAD_LIST_IMAGE_SUCCESS,
    UPLOAD_LIST_IMAGE_FAIL,
    UPLOAD_LIST_IMAGE_PREFETCHED,
    UPLOAD_LIST_IMAGE_PREFETCHED_FAIL,
    LIST_CREATE_RELATION_FAILURE
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
    listByTopics: [],
    searchedLists: [],
    recentSubscribedList:{
      id:-1,
      status: false
    },
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
        return state.set('loading', false).set('current', action.payload.data[0]);
    case LIST_MYLIST_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestGetMyLists()));
    case LIST_MYLIST_SUCCESS:
        return state.set('loading', false).set('myLists', action.payload.data);
    case LIST_SEND_LIST_INVITATIONS_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestSendInvites(action.payload)));
    case LIST_SEND_LIST_INVITATIONS_SUCCESS:
        return state.set('loading', false).set('myLists', action.payload.data);
    case LIST_CREATE_REQUEST:
        return loop(state.set('loading', true), Effects.promise(() => requestCreateList(action.payload)));
    case LIST_CREATE_SUCCESS:
        return state.set('loading', false);
    case LIST_SET_NEWLIST_OPTIONS:
        let key = Object.keys(action.payload)[0];
        return insertOptionParams(state, state.get('options'), key, action.payload[key]);
    case LIST_BY_TOPIC_SUCCESS:
        return state.set('loading', false).set('listByTopics', action.payload.data);

    case LIST_SEARCH_RESULT_SUCCESS:
        return state.set('loading', false).set('searchedLists', action.payload);
    case LIST_MYLIST_FAILURE:
    case LIST_CREATE_FAILURE:
    case LIST_GET_DETAILS_FAILURE:
    case LIST_SEND_LIST_INVITATIONS_FAILURE:
    case LIST_CREATE_RELATION_SUCCESS:

  return state.set('subscribedLists',[...state.get("subscribedLists"),action.detailList]);
// return  state.setIn(['subscribedLists', action.detailList]);
//return  state.delete(subscribedLists.findIndex(id => id == action.detailList.id));

//return  state.delete('subscribedLists',subscribedListsres.findIndex(id => id == action.detailList.id));


    case LIST_CREATE_RELATION_FAILURE:
    case LIST_BY_TOPIC_FAILURE:
        return state.set('ERROR', action);
    case LIKE_UNLIKE_LIST_ITEM:
    case LIKE_UNLIKE_LIST_ITEM_SUCCESS:
    case LIKE_UNLIKE_LIST_ITEM_FAILURE:
    case LIST_DELETE_RELATION_SUCCESS:

    console.log("Delete Relation success",action);
    var subscribedListsres = state.get("subscribedLists");
    console.log("subsctibeee", subscribedListsres);

return state.set('subscribedLists', state.get('subscribedLists').filter(o => o.id !== action.detailList.id));

//    return  state.delete('subscribedLists',subscribedListsres.findIndex(id => id == action.detailList.id));
// return  state.setIn('subscribedLists', action.detailList);
        break;
    case LIST_DELETE_RELATION_FAILURE:
    console.log("Delete list relation failed... ",action);
    return state.set('ERROR',action);
    break;
    case GET_LIST_BY_RELATION_SUCCESS:

    console.log("Get List by relation Success", action.payload.data);
        return state.set('loading', false).set('subscribedLists', action.payload.data);
    case GET_LIST_BY_RELATION_FAILURE:
    console.log("get list by relation failure");
    return state.set('ERROR',false);
    break;
    case LIST_SEARCH_RESULT_FAILURE:
        return state.set('ERROR', action);
    case SUBSCRIBE_LIST:
        return loop(state.setIn(['recentSubscribedList','id'], action.payload),
        Effects.promise(() => createlistRelationAction(action.payload)));
    case UNSUBSCRIBE_LIST:
        return loop(state.setIn(['recentSubscribedList','id'], action.payload),
        Effects.promise(() => deleteListRelationAction(action.payload)));
    case UPLOAD_LIST_IMAGE_START:
        return state.setIn(['current', 'imageStatus'], 'uploading');
    case UPLOAD_LIST_IMAGE_SUCCESS:
        return state.setIn(['current', 'image'], action.payload).setIn(['current', 'imageStatus'], 'prefetching');
    case UPLOAD_LIST_IMAGE_PREFETCHED:
        return state.setIn(['current', 'imageStatus'], 'prefetched');
    case UPLOAD_LIST_IMAGE_FAIL:
        return state.setIn(['current', 'imageStatus'], 'uploadFailed');
    case UPLOAD_LIST_IMAGE_PREFETCHED_FAIL:
        return state.setIn(['current', 'imageStatus'], 'prefetchedFail');

    default:
        return state;
    }
}

function insertOptionParams(state, obj, prop, values) {
    switch (prop) {
    case 'description':
    case 'currTag':
    case 'priv':
    case 'nsfw':
        return state.setIn(['options', prop], values);
    case 'topics':
        let foundIndex = state.getIn(['options', prop]).indexOf(values);
        if (foundIndex === -1) {
            return state.setIn(['options', prop], state.getIn(['options', prop]).concat(values))
        } else {
            let newArr = state.getIn(['options', prop]).splice(foundIndex, 1);
            return state.setIn(['options', prop], newArr);
        }
    case 'tags':
        if (typeof values === 'number') {
            let newArr = state.getIn(['options', prop]).splice(values, 1);
            return state.setIn(['options', prop], newArr).setIn(['options', 'currTag'], '');
        } else {
            return state.setIn(['options', prop], state.getIn(['options', prop]).concat(values)).setIn(['options', 'currTag'], '');
        }
    default:
        return null;
    }
}
