import {
  favezCreateFave
} from '../../services/favez';

// Actions
export const FAVE_SET_NEWFAVE = 'FAVE_SET_NEWFAVE';
export const FAVE_CREATE_REQUEST = 'FAVE_CREATE_REQUEST';
export const FAVE_CREATE_SUCCESS = 'FAVE_CREATE_SUCCESS';
export const FAVE_CREATE_FAILURE = 'FAVE_CREATE_FAILURE';

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

export async function createFave(fave) {
  return {
    type: FAVE_CREATE_REQUEST,
    payload: fave
  };
}

export async function requestCreateFave(data) {
  return await favezCreateFave(data)
    .then((res) => ({type: FAVE_CREATE_SUCCESS, payload: res}))
    .catch((err) => ({type: FAVE_CREATE_FAILURE, payload: err}));
}
