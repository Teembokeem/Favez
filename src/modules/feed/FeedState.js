import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {Actions} from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  cards: {
    index: 0,
    data: [{
      value: 0,
      header: {
        topic: 'Archeology Stuff',
      },
      user: {
        picture: 'https://facebook.github.io/react/img/logo_og.png',
        username: '@react',
      },
      timeAgo: '12 Minutes Ago',
      body: {
        message: 'Check out this Marrakech album',
        site_semantic: 'imgur.com',
        uri: '',
        title_scraped: 'Welcome to Marrakech, Morroco - a guide by a tourist',
        image_scraped: 'https://www.travelpirates.com/media/images/2015/02/newyork-oslo-cheap-flights-1423497189-LeT5-slide.jpg'
      }
    },
    {
      value: 0,
      header: {
        topic: 'Travel Stuff',
      },
      user: {
        picture: 'http://ionicframework.com/img/ionic-logo-blog.png',
        username: '@ionic',
      },
      timeAgo: '30 Minutes Ago',
      body: {
        message: 'TOKYOOOOOOOOO',
        site_semantic: 'reddit.com',
        uri: '',
        title_scraped: 'Tokyo, a magical trip across the sea',
        image_scraped: 'https://ecs7.tokopedia.net/img/product-1/2016/6/13/6152631/6152631_e9cb4b91-da5d-4610-b758-6c738546baf3.jpg'
      }
    }
    ]
  },
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'FeedState/INCREMENT';

// Action creators
export function increment(cards, index) {
  Actions.intro()
  return {type: INCREMENT, item: cards, payload: index};
}

// Reducer
export default function FeedStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      const cards = state.get('cards');
      const mapValue = cards.getIn(['data', action.payload, 'value']);
      const newValue = mapValue + 1;  
      return state.setIn(['cards', 'data', action.payload, 'value'], newValue);

    default:
      return state;
  }
}
