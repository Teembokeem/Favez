import {Actions} from 'react-native-router-flux';
// import {getListAll} from '../../services/list';
import {
  faveScrapeUrl
} from '../../services/fave';
// Actions
// export const INCREMENT = 'INCREMENT';
// export const LIST_REQUEST = 'LIST_REQUEST';
// export const LIST_RESPONSE = 'LIST_RESPONSE';
// export const LIST_LIST = 'LIST_LIST';
export const SET_NEWFAVE = 'SET_NEWFAVE';
export const FAVE_SCRAPE_REQUEST = 'FAVE_SCRAPE_REQUEST';
export const FAVE_SCRAPE_SUCCESS = 'FAVE_SCRAPE_SUCCESS';
export const FAVE_SCRAPE_FAILURE = 'FAVE_SCRAPE_FAILURE';

// Action creators
export async function setFave(fave) {
  console.log('this fave now', fave)
  return {
    type: SET_NEWFAVE,
    payload: fave
  };
}

export async function scrapeUrl(url) {
  console.log('Fave Model Action: scrapeUrl');
  console.log('returning action type');
  return {type: FAVE_SCRAPE_REQUEST, payload: url};
}

export async function requestScrape(data) {
  return await faveScrapeUrl(data)
    .then((res) => ({type: FAVE_SCRAPE_SUCCESS, payload: res}))
    .catch((err) => ({type: FAVE_SCRAPE_FAILURE, payload: err}));
}
