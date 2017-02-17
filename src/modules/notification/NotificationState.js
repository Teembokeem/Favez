import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  notifications: {
    index: 0,
    data: [
      {
        timeAgo: '1m ago',
        toUser: {
          username: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        fromUser: {
          username: 'h3h3',
          avatar: 'https://68.media.tumblr.com/c18f99297ea726d2265dd9b770bc7996/tumblr_n0lawvWAgP1truepqo1_500.jpg'
        },
        type: 'invitation_accept',
        body: {
          list_ref: {
            name: 'My Favorite Games',
            picture: 'https://varsitystandouts.files.wordpress.com/2014/05/van-styles-12.jpg'
          }
        }
      },
      {
        timeAgo: '1m ago',
        toUser: {
          username: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        fromUser: {
          username: 'indy',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/fb/33/c9/fb33c918aaaf983b5a4634137b0cfef0.jpg'
        },
        type: 'follow',
        body: {
        }
      },
      {
        timeAgo: '1m ago',
        toUser: {
          username: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        fromUser: {
          username: 'h3h3',
          avatar: 'https://68.media.tumblr.com/c18f99297ea726d2265dd9b770bc7996/tumblr_n0lawvWAgP1truepqo1_500.jpg'
        },
        type: 'comment',
        body: {
          list_ref: {
            name: 'My Favorite Games',
            picture: 'https://c1.staticflickr.com/3/2916/14199432020_b8f32a689d_b.jpg'
          },
          message: 'Lorem ipsum?'
        }
      },
      {
        timeAgo: '1m ago',
        toUser: {
          username: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        fromUser: {
          username: 'petra',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/4a/66/c6/4a66c6f6d02f83a5fd921934d81be7a4.jpg',
          name: {
            first: 'Petra',
            last: ''
          }
        },
        type: 'new_user',
        body: {
        }
      },
      {
        timeAgo: '1m ago',
        toUser: {
          username: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        fromUser: {
          username: 'pewdiepie',
          avatar: 'http://cdn.playbuzz.com/cdn/9f1b4d0d-cb73-4d11-b430-070eb9647f35/a0b6f2ab-0896-408f-bc72-a96ad35c969c.jpg',
          name: {
            first: 'pewdiepie',
            last: ''
          }
        },
        type: 'favez_like',
        body: {
          list_ref: {
            name: 'List Example 3',
            picture: 'https://c1.staticflickr.com/3/2916/14199432020_b8f32a689d_b.jpg'
          }
        }
      },
      {
        timeAgo: '1m ago',
        toUser: {
          username: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        fromUser: {
          username: 'h3h3',
          avatar: 'https://68.media.tumblr.com/c18f99297ea726d2265dd9b770bc7996/tumblr_n0lawvWAgP1truepqo1_500.jpg',
          name: {
            first: 'dude',
            last: ''
          }
        },
        type: 'invitation_request',
        body: {
          list_ref: {
            name: 'Example Collaboration List',
            picture: 'https://im.vsco.co/1/51b0b62a404a2163/52f5c33e736708352e000007/vsco_020714_21.jpg?h=800'
          }
        }
      }
    ]
  },
  selected: 'alerts',
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'NotificationState/INCREMENT';
const SETFILTER = 'NotificationState/SETFILTER';

// Action creators
export function increment(cards, index) {
  Actions.intro();
  return {type: INCREMENT, item: cards, payload: index};
}

export function setFilter(value) {
  return {type: SETFILTER, payload: value};
}

// Reducer
export default function NotificationStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state;
    case SETFILTER:
      return state
        .set('selected', action.payload);
    default:
      return state;
  }
}
