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
  requestCreateFave
} from './faveActions';

// Initial state
const initialState = fromJS({
  all: [],
  current: {},
  loading: true,
  error: {},
  trendingFavez:[],
  slefFavez: []
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
      return state
      .set('loading', false)
      .set('slefFavez',action.payload)
      case SELF_FAVEZ_FAILURE:
    default:
      return state;
  }
}
