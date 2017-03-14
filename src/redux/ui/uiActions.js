import {Actions} from 'react-native-router-flux';
import {
  uiScrapeUrl
} from '../../services/ui';

// Actions
export const UI_BROWSER_SET_URL = 'UI_BROWSER_SET_URL';
export const UI_SET_RADIO = 'UI_SET_RADIO';
export const UI_SET_TAB = 'UI_SET_TAB';
export const UI_BROWSER_SCRAPE_REQUEST = 'UI_BROWSER_SCRAPE_REQUEST';
export const UI_BROWSER_SCRAPE_SUCCESS = 'UI_BROWSER_SCRAPE_SUCCESS';
export const UI_BROWSER_SCRAPE_FAILURE = 'UI_BROWSER_SCRAPE_FAILURE';

// Action creators

// SET RADIO SELECTION
export function setRadioSelect(view, tab) {
  return {
    type: UI_SET_RADIO,
    payload: {view, tab}
  };
}

// SET SELECTED TAB
export function setViewTab(view, tab) {
  return {
    type: UI_SET_TAB,
    payload: {view, tab}
  };
}
// SET URL
export function setBrowserUrl(url) {
  return {
    type: UI_BROWSER_SET_URL,
    payload: url
  };
}

// SCRAPE URL
export async function scrapeUrl(url) {
  return {
    type: UI_BROWSER_SCRAPE_REQUEST,
    payload: url
  };
}

export async function requestScrape(data) {
  return await uiScrapeUrl(data)
    .then((res) => ({type: UI_BROWSER_SCRAPE_SUCCESS, payload: res}))
    .catch((err) => ({type: UI_BROWSER_SCRAPE_FAILURE, payload: err}));
}
