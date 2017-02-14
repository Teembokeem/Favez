import {fromJS} from 'immutable';

import {Actions} from 'react-native-router-flux'

// reducers for tabs and scenes are separate
const initialState = fromJS({
  
});


export default function TabsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
