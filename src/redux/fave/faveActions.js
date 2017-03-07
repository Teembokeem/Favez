import {Actions} from 'react-native-router-flux';

// Actions
export const SET_NEWFAVE = 'SET_NEWFAVE';
// Action creators
export async function setFave(fave) {
  console.log('this fave now', fave)
  return {
    type: SET_NEWFAVE,
    payload: fave
  };
}

//

