import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';
import store from '../../../redux/store';

import * as UserActions from '../../../redux/user/userActions';
import * as FavezActions from '../../../redux/fave/faveActions';
import * as ListActions from '../../../redux/list/listActions';

// Initial state
const initialState = fromJS({
  query: '',
  loading: false,
  error: false
});

// Actions
const DO_SEARCH = 'SearchState/DO_SEARCH';
const SEARCH_SUCCESS = 'SearchState/SEARCH_SUCCESS';
const SEARCH_FALIURE = 'SearchState/SEARCH_FALIURE';

// Action creators

export function doSearch(query) {
  return {type: DO_SEARCH, payload: query};
}

function searchSuccess() {
    return {type: SEARCH_SUCCESS};
}

function searchFaliure() {
    return {type: SEARCH_FALIURE};
}

// Reducer
export default function SearchStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DO_SEARCH:
    console.log('Searching trending lists..., query=', action.payload);
      return loop(
        state.set('loading', true).set('query', action.payload),
        Effects.batch([
          Effects.promise(()=>UserActions.searchUsers(action.payload)),
          Effects.promise(()=>ListActions.searchLists(action.payload)),
          Effects.promise(()=>FavezActions.searchFavez(action.payload)),
          Effects.constant(searchSuccess())
        ])
      );
      break;
    case SEARCH_SUCCESS:
      console.log('Searching success' );
      state.set('loading', false)
      break;
    case SEARCH_FALIURE:
      state.set('loading', false).set('error': true)
      break;
    default:
      return state;
  }
}
