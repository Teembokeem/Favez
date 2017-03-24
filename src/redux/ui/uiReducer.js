import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {
  UI_BROWSER_SET_INFO,
  UI_BROWSER_RELOAD,
  UI_BROWSER_BROWSE_LIST,
  UI_SET_RADIO,
  UI_TOGGLE_CONTEXTMENU,
  UI_SET_TAB,
  UI_BROWSER_SCRAPE_REQUEST,
  UI_BROWSER_SCRAPE_SUCCESS,
  UI_BROWSER_SCRAPE_FAILURE,
  requestScrape
} from './uiActions';

// Initial state
const initialState = fromJS({
  browser: {
    url: 'https://www.google.com',
    title: '',
    viewList: {
      set: [],
      index: 0
    },
    scrape: {
      scraped: false,
      url: '',
      title: '',
      images: []
    }
  },
  addFaveForm: {
    tabs: {
      selected: 'yours',
      set: ['yours', 'collabs']
    },
    radio: -1
  },
  favorite: {
    tabs: {
      selected: 'your lists',
      set: ['your lists', 'collabs', 'liked']
    },
    header: {
      contextMenu: {
        visible: false,
        ref: 'header',
        set: [
          {
            buttonAction: 'createList',
            uiText: 'Create New List',
            icon: {
              set: 'Ionicon',
              identifier: 'ios-list',
              style: 'listIcon'
            }
          },
          {
            buttonAction: 'addFaveForm',
            uiText: 'Add fave from clipboard link',
            icon: {
              set: 'MCIcon',
              identifier: 'link-variant',
              style: 'linkIcon'
            }
          },
          {
            buttonAction: 'addFaveBrowse',
            uiText: 'Add fave from website',
            icon: {
              set: 'MIcon',
              identifier: 'web',
              style: 'webIcon'
            }
          },
          {
            buttonAction: 'search',
            uiText: 'Discover favez by topic',
            icon: {
              set: 'FIcon',
              identifier: 'compass',
              style: 'browseIcon'
            }
          }
        ]
      }
    },
    list: {
      contextMenu: {
        visible: false,
        ref: 'list',
        set: [
          {
            buttonAction: 'browseList',
            uiText: 'Browse List',
            icon: {
              set: 'MIcon',
              identifier: 'web',
              style: 'webIcon'
            }
          },
          {
            buttonAction: 'addCollaborator',
            uiText: 'Add Collaborators',
            icon: {
              set: 'OIcon',
              identifier: 'mail-read',
              style: 'webIcon'
            }
          },
          {
            buttonAction: 'share',
            uiText: 'Share',
            icon: {
              set: 'EIcon',
              identifier: 'share',
              style: 'webIcon'
            }
          },
          {
            buttonAction: 'copyUrl',
            uiText: 'Copy URL',
            icon: {
              set: 'EIcon',
              identifier: 'link',
              style: 'webIcon'
            }
          },
          {
            buttonAction: 'settings',
            uiText: 'Settings',
            icon: {
              set: 'Ionicon',
              identifier: 'ios-settings',
              style: 'webIcon'
            }
          },
          {
            buttonAction: 'delete',
            uiText: 'Delete',
            icon: {
              set: 'MCIcon',
              identifier: 'delete',
              style: 'deleteIcon'
            }
          }
        ]
      }
    }
  },
  feed: {
    header: {
      contextMenu: {
        visible: false,
        ref: 'header',
        set: [
          {
            buttonAction: 'createList',
            uiText: 'Create New List',
            icon: {
              set: 'Ionicon',
              identifier: 'ios-list',
              style: 'listIcon'
            }
          },
          {
            buttonAction: 'addFaveForm',
            uiText: 'Add fave from clipboard link',
            icon: {
              set: 'MCIcon',
              identifier: 'link-variant',
              style: 'linkIcon'
            }
          },
          {
            buttonAction: 'addFaveBrowse',
            uiText: 'Add fave from website',
            icon: {
              set: 'MIcon',
              identifier: 'web',
              style: 'webIcon'
            }
          },
          {
            buttonAction: 'search',
            uiText: 'Discover favez by topic',
            icon: {
              set: 'FIcon',
              identifier: 'compass',
              style: 'browseIcon'
            }
          }
        ]
      }
    }
  },
  listShow: {
    tabs: {
      selected: 'favez',
      set: ['favez', 'info', 'similar']
    }
  }
});

// Reducer
export default function UIReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UI_BROWSER_SET_INFO:
      return state
        .setIn(['browser', 'url'], action.payload.url)
        .setIn(['browser', 'title'], action.payload.title);
    case UI_BROWSER_RELOAD:
      return state
        .setIn(['browser', 'url'],'https://www.google.com')
        .setIn(['browser', 'title'], '')
        .setIn(['browser', 'scrape'], {
          scraped: false,
          url: '',
          title: '',
          images: []
        });
    case UI_TOGGLE_CONTEXTMENU:
      return state
        .setIn(
          [action.payload.view, action.payload.location, 'contextMenu', 'visible'],
          !state.getIn([action.payload.view, action.payload.location, 'contextMenu', 'visible'])
        );
    case UI_SET_RADIO:
      return state
        .setIn([action.payload.view, 'radio'], action.payload.tab);
    case UI_BROWSER_BROWSE_LIST:
      return state
        .setIn(['browser', 'viewList'], {set: action.payload.set, index: action.payload.index || 0});
    case UI_SET_TAB:
      return state
        .setIn([action.payload.view, 'tabs', 'selected'], action.payload.tab);
    case UI_BROWSER_SCRAPE_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(() => requestScrape(action.payload))
      );
    case UI_BROWSER_SCRAPE_SUCCESS:
      return state
        .set('loading', false)
        .setIn(
          ['browser', 'scrape'], {
            url: state.getIn(['browser', 'url']),
            title: state.getIn(['browser', 'title']),
            images: action.payload.data.images,
            scraped: true
          }
        );
    case UI_BROWSER_SCRAPE_FAILURE:
      return state.set('error', action.payload);
    default :
      return state;
  }
}
