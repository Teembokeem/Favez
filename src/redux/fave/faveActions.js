import {Actions} from 'react-native-router-flux';

// Actions
export const FAVE_SET_NEWFAVE = 'FAVE_SET_NEWFAVE';
// Action creators
export async function setFave(fave) {
  console.log('this fave now', fave);
  return {
    type: FAVE_SET_NEWFAVE,
    payload: fave
  };
}

export async function setNewFave(fave) {
  console.log('this fave now', fave);
  return {
    type: FAVE_SET_NEWFAVE,
    payload: fave
  };
}

//

