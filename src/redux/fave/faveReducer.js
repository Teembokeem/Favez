import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  FAVE_SET_NEWFAVE,
  FAVE_CREATE_REQUEST,
  FAVE_CREATE_SUCCESS,
  FAVE_CREATE_FAILURE,
  FAVE_SEARCH_RESULT_SUCCESS,
  FAVE_SEARCH_RESULT_FALIURE,
  requestCreateFave
} from './faveActions';

// Initial state
const initialState = fromJS({
  all: [],
  current: {},
  loading: true,
  error: {},
  trendingFavez:[]
});

// Reducer
export default function FaveReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FAVE_SET_NEWFAVE:
      return state
        .set('current', action.payload);
    case FAVE_CREATE_REQUEST:
      console.log('FAVE CREATE REQUEST');
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestCreateFave(action.payload))
      );
    case FAVE_CREATE_SUCCESS:
      console.log('SUCCESS', action);
      return state
        .set('loading', false)
        .set('current', {});
    case FAVE_SEARCH_RESULT_SUCCESS:
      return state
        .set('loading', false)
        .set('trendingFavez', action.payload);
    case FAVE_CREATE_FAILURE:
    case FAVE_SEARCH_RESULT_FALIURE:
      console.log('ERROR', action);
      return state.set('ERROR', action);
    default:
      return state;
  }
}
