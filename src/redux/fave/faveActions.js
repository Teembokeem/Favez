import {Actions} from 'react-native-router-flux';
// import {getListAll} from '../../services/list';

// Actions
// export const INCREMENT = 'INCREMENT';
// export const LIST_REQUEST = 'LIST_REQUEST';
// export const LIST_RESPONSE = 'LIST_RESPONSE';
// export const LIST_LIST = 'LIST_LIST';
export const SET_NEWFAVE = 'SET_NEWFAVE';

// Action creators
export async function setFave(fave) {
  console.log('this fave now', fave)
  return {
    type: SET_NEWFAVE,
    payload: fave
  };
}
