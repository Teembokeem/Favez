import {Actions} from 'react-native-router-flux';
import {
  uiScrapeUrl
} from '../../services/ui';

// Actions
export const UI_BROWSER_SET_URL = 'UI_BROWSER_SET_URL';
export const UI_BROWSER_SCRAPE_REQUEST = 'UI_BROWSER_SCRAPE_REQUEST';
export const UI_BROWSER_SCRAPE_SUCCESS = 'UI_BROWSER_SCRAPE_SUCCESS';
export const UI_BROWSER_SCRAPE_FAILURE = 'UI_BROWSER_SCRAPE_FAILURE';

// Action creators
export function setBrowserUrl(url) {
  console.log('NEVNEIVNESILVNEILSNVLIESNVIELSNVIELSNVEILSVNEILSVNSEILVENSILVESNVILSENVILSVNSILVENSILVESILVSENVLEISNVEILSNVSEILVNSELI')
  return {type: UI_BROWSER_SET_URL, payload: url};
}

// SCRAPE URL
export async function scrapeUrl(url) {
  console.log('Fave Model Action: scrapeUrl');
  console.log('returning action type');
  return {type: UI_BROWSER_SCRAPE_REQUEST, payload: url};
}

export async function requestScrape(data) {
  return await uiScrapeUrl(data)
    .then((res) => ({type: UI_BROWSER_SCRAPE_SUCCESS, payload: res}))
    .catch((err) => ({type: UI_BROWSER_SCRAPE_FAILURE, payload: err}));
}
