import {Map, fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = fromJS({
    cards:{
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
    ]},
    value: 0,
  loading: false
});

// Actions
const INCREMENT = 'FeedState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function increment(cards, index) {
  return {type: INCREMENT, item: cards, payload: index};
}

export function reset() {
  return {type: RESET};
}

export function random() {
  return {
    type: RANDOM_REQUEST
  };
}

export async function requestRandomNumber() {
  return {
    type: RANDOM_RESPONSE,
    payload: await generateRandomNumber()
  };
}

// Reducer
export default function FeedStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:

        const cards = state.get('cards');
        const mapValue = cards.getIn(['data', action.payload, 'value']);
        const newValue = mapValue + 1;  
        return state.setIn(['cards', 'data', action.payload, 'value'], newValue);


    case RESET:
      return initialState;

    case RANDOM_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(requestRandomNumber)
      );

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
