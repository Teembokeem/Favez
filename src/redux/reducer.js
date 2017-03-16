import {Map, fromJS} from 'immutable';
import {loop, combineReducers} from 'redux-loop';
import { reducer as formReducer } from 'redux-form/immutable';
// import NavigationStateReducer from '../modules/navigation/NavigationState';
import UserStateReducer from './user/userReducer';
import FeedStateReducer from '../modules/feed/FeedState';
import ListShowStateReducer from '../modules/list-show/ListShowState';
import SearchStateReducer from '../modules/search/SearchState';
import NotificationStateReducer from '../modules/notification/NotificationState';
import ProfileStateReducer from '../modules/profile/ProfileState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';

import ListReducer from './list/listReducer';
import FaveReducer from './fave/faveReducer';
import UIReducer from './ui/uiReducer';

const reducers = {
  // Counter sample app state. This can be removed in a live application
  // counter: CounterStateReducer,

  user: UserStateReducer,
  feed: FeedStateReducer,
  listShow: ListShowStateReducer,
  search: SearchStateReducer,
  form: formReducer,
  notification: NotificationStateReducer,
  profile: ProfileStateReducer,

  list: ListReducer,
  fave: FaveReducer,
  ui: UIReducer,
  // @NOTE: By convention, the navigation state must live in a subtree called
  //`navigationState`
  // navigationState: NavigationStateReducer,

  session: SessionStateReducer

};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  const [nextState, effects] = action.type === RESET_STATE
    ? namespacedReducer(action.payload, action)
    : namespacedReducer(state || void 0, action);

  // enforce the state is immutable
  return loop(fromJS(nextState), effects);
}
