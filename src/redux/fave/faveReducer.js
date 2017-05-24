import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  FAVE_SET_NEWFAVE,
  FAVE_CREATE_REQUEST,
  FAVE_CREATE_SUCCESS,
  FAVE_CREATE_FAILURE,
  FAVE_SEARCH_RESULT_SUCCESS,
  FAVE_SEARCH_RESULT_FALIURE,
  SELF_FAVEZ_SUCCESS,
  SELF_FAVEZ_FAILURE,
  FAVE_RESPONSE,
  requestCreateFave,
  SELF_LIKE_FAVEZ_SUCCESS,
  SELF_LIKE_FAVEZ_FAILURE,
  SELF_UNLIKE_FAVEZ_SUCCESS,
  SELF_UNLIKE_FAVEZ_FAILURE
} from './faveActions';

// Initial state
const initialState = fromJS({
  all: [],
  current: {},
  loading: true,
  error: {},
  trendingFavez:[],
  selfFavez: []
});

// Reducer
export default function FaveReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FAVE_RESPONSE:
      return state
        .set('loading', false)
        .set('all', action.payload.data);
    case FAVE_SET_NEWFAVE:
      return state
        .set('current', action.payload);
    case FAVE_CREATE_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestCreateFave(action.payload))
      );
    case FAVE_CREATE_SUCCESS:
      return state
        .set('loading', false)
        .set('current', {});
    case FAVE_SEARCH_RESULT_SUCCESS:
      return state
        .set('loading', false)
        .set('trendingFavez', action.payload);
    case FAVE_CREATE_FAILURE:
    case FAVE_SEARCH_RESULT_FALIURE:
      return state.set('ERROR', action);
      case SELF_FAVEZ_SUCCESS:
      console.log("self favez successsss", action);
      return state
      .set('loading', false)
      .set('selfFavez',action.payload.data)
      case SELF_FAVEZ_FAILURE:
      break;
      case SELF_LIKE_FAVEZ_SUCCESS:
            action.detailList.likes=1;
            const indexOfListToUpdate = state.get('selfFavez').findIndex(listItem => {
              return listItem.id == action.detailList.id;
            });
          let selfFavezArr = state.get("selfFavez");
            let faveToUpdate = selfFavezArr[indexOfListToUpdate];
            if(faveToUpdate){


            faveToUpdate.likes = 1;
return state.set('selfFavez',[...selfFavezArr.slice(0,indexOfListToUpdate),faveToUpdate, ...selfFavezArr.slice(indexOfListToUpdate+1)]);
}else{
              return state.set('selfFavez', [...state.get("selfFavez"), action.detailList]);
}
      break;
      case SELF_LIKE_FAVEZ_FAILURE:
      break;
      case SELF_UNLIKE_FAVEZ_SUCCESS:
      const indexOfListToUpdateUnlike = state.get('selfFavez').findIndex(listItem => {
        return listItem.id == action.detailList.id;
      });
      selfFavezArr = state.get("selfFavez");
      favezToUpdate = selfFavezArr[indexOfListToUpdateUnlike];
      favezToUpdate.likes=null;
  return state.set('selfFavez',[...selfFavezArr.slice(0,indexOfListToUpdateUnlike),
          favezToUpdate,
          ...selfFavezArr.slice(indexOfListToUpdateUnlike+1)
      ]);

      case SELF_UNLIKE_FAVEZ_FAILURE:
            break;
    default:
      return state;
  }
}
