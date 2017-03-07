import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';
import {
  UI_BROWSER_SET_URL,
  UI_BROWSER_SCRAPE_REQUEST,
  UI_BROWSER_SCRAPE_SUCCESS,
  UI_BROWSER_SCRAPE_FAILURE,
  requestScrape
} from './uiActions';

// Initial state
const initialState = fromJS({
  browser: {
    url: 'https://www.google.com',
    scrape: {
      url: '',
      title: '',
      images: []
    }
  }
});

// Reducer
export default function UIReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UI_BROWSER_SET_URL:
      return state
        .setIn(['browser', 'url'], action.payload);
    case UI_BROWSER_SCRAPE_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestScrape(action.payload))
      );
    case UI_BROWSER_SCRAPE_SUCCESS:
      return state
        .set('loading', false)
        .setIn(['browser', 'scrape'], {url: action.payload.url, title: '', images: action.payload.data});
    case UI_BROWSER_SCRAPE_FAILURE:
      console.log('ERROR');
      return state.set('error', action.payload);
    default :
      return state;
  }
}
