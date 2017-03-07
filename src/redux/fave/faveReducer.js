import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  SET_NEWFAVE,
  FAVE_SCRAPE_REQUEST,
  FAVE_SCRAPE_SUCCESS,
  FAVE_SCRAPE_FAILURE,
  requestScrape
} from './faveActions';

// Initial state
const initialState = fromJS({
  all: [],
  current: {},
  loading: true,
  error: {}
});

// Reducer
export default function FaveReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_NEWFAVE:
      return state
        .set('current', action.payload);
    case FAVE_SCRAPE_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestScrape(action.payload))
      );
    case FAVE_SCRAPE_SUCCESS:
      return state
        .set('loading', false)
        .set('current', {url: action.payload.data});
    case FAVE_SCRAPE_FAILURE:
      console.log('ERROR');
      return state.set('error', action.payload);
    default:
      return state;
  }
}
