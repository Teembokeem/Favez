import {
  favezCreateFave,
  favezSearchByQuery,
  getFavezSelf
} from '../../services/favez';

// Actions
export const FAVE_SET_NEWFAVE = 'FAVE_SET_NEWFAVE';
export const FAVE_CREATE_REQUEST = 'FAVE_CREATE_REQUEST';
export const FAVE_CREATE_SUCCESS = 'FAVE_CREATE_SUCCESS';
export const FAVE_CREATE_FAILURE = 'FAVE_CREATE_FAILURE';
export const FAVE_SEARCH_RESULT_SUCCESS = 'FAVE_SEARCH_RESULT_SUCCESS';
export const FAVE_SEARCH_RESULT_FALIURE = 'FAVE_SEARCH_RESULT_FALIURE';
export const SELF_FAVEZ_SUCCESS = 'SELF_FAVEZ_SUCCESS';
export const SELF_FAVEZ_FAILURE = 'SELF_FAVEZ_FAILURE';

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

export async function searchFavez(data) {
  return await favezSearchByQuery(data)
    .then((res) => {
      console.log('FAVEZ_SEARCH_DATA', res);
      return {type: FAVE_SEARCH_RESULT_SUCCESS, payload: res.data}
    })
    .catch((err) => ({type: FAVE_SEARCH_RESULT_FALIURE, payload: err}));
}

export async function getSelffavez(){
  return await getFavezSelf()
  .then((res)=>({type: SELF_FAVEZ_SUCCESS, payload: res}))
  .catch((err)=>({type: SELF_FAVEZ_FAILURE, payload: res}));
}
