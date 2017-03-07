import {Actions} from 'react-native-router-flux';
import {
  faveScrapeUrl
} from '../../services/favez';


// Actions
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

// SCRAPE URL
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

//
