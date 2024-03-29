import {
  uiScrapeUrl
} from '../../services/ui';

// Actions
export const UI_BROWSER_SET_INFO = 'UI_BROWSER_SET_INFO';
export const UI_BROWSER_RELOAD = 'UI_BROWSER_RELOAD';
export const UI_BROWSER_BROWSE_LIST = 'UI_BROWSER_BROWSE_LIST';
export const UI_BROWSER_BROWSE_FAVE = 'UI_BROWSER_BROWSE_FAVE';
export const UI_SET_RADIO = 'UI_SET_RADIO';
export const UI_TOGGLE_CONTEXTMENU = 'UI_TOGGLE_CONTEXTMENU';
export const UI_SET_TAB = 'UI_SET_TAB';
export const UI_BROWSER_SCRAPE_REQUEST = 'UI_BROWSER_SCRAPE_REQUEST';
export const UI_BROWSER_SCRAPE_SUCCESS = 'UI_BROWSER_SCRAPE_SUCCESS';
export const UI_BROWSER_SCRAPE_FAILURE = 'UI_BROWSER_SCRAPE_FAILURE';
export const UI_PICKER_VISIBILITY_CHANGE_REQUEST = "UI_PICKER_VISIBILITY_CHANGE_REQUEST";

// Action creators


// SET TO INITIAL STATE
export function setBrowserInitialState() {
  return {
    type: UI_BROWSER_RELOAD
  };
}

// SET RADIO SELECTION
export function setRadioSelect(view, tab) {
  return {
    type: UI_SET_RADIO,
    payload: {view, tab}
  };
}

// BROWSE LIST OF FAVEZ
export function browseList(set, index) {
  return {
    type: UI_BROWSER_BROWSE_LIST,
    payload: {set, index}
  };
}

// BROWSE LIST OF FAVEZ
export function browseFave(fave) {
  return {
    type: UI_BROWSER_BROWSE_FAVE,
    payload: fave
  };
}

// TOGGLE HEADER CONTEXT MENU
export function toggleContextMenu(view, location) {
  console.log("vjdjvhn",view,location);
  return {
    type: UI_TOGGLE_CONTEXTMENU,
    payload: {view, location}
  };
}

// SET SELECTED TAB
export function setViewTab(view, tab) {
  console.log("view and tab",view,tab);
  return {
    type: UI_SET_TAB,
    payload: {view, tab}
  };
}
// SET URL
export function setBrowserInfo(url, title) {
  return {
    type: UI_BROWSER_SET_INFO,
    payload: {url, title}
  };
}

export function setPickerVisibility(picker, visible) {
  return {
    type: UI_PICKER_VISIBILITY_CHANGE_REQUEST,
    payload: {picker,visible}
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
