import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  lists: {
    index: 0,
    data: [
      {
        creator: {
          name: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        collaborators: [

        ],
        name: 'List Example 2',
        picture: 'https://c1.staticflickr.com/8/7523/15636075117_7d921958dc_b.jpg',
        topics: [
          'travel'
        ],
        tags: [
          'cheaptravelling',
          'beautifuladventure'
        ]
      },
      {
        creator: {
          name: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        collaborators: [
          'purplefiend'
        ],
        name: 'List Example 1',
        picture: 'http://scontent.cdninstagram.com/t51.2885-15/e15/13266656_1008822862540946_1215052117_n.jpg?ig_cache_key=MTI2MTAzNjkzMjk3NTc3NzU0MA%3D%3D.2',
        topics: [
          'gaming'
        ],
        tags: [
          'horrorgames',
          'wiiu',
          'silenthill'
        ]
      },
      {
        creator: {
          name: 'greenmario',
          avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
        },
        collaborators: [
        ],
        name: 'List Example 3',
        picture: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11385222_844494872265884_2020626255_n.jpg',
        topics: [
          'animals'
        ],
        tags: [
          'dogtraining',
          'doge',
          'shiba'
        ]
      },
      {
        creator: {
          name: 'h3h3',
          avatar: 'http://hipsters.com/uploads/cache/pins/2012/09/5066ae09a5b5e-194x.jpg'
        },
        collaborators: [
          'greenmario',
          'pewdiepie'
        ],
        name: 'Collab Example List',
        picture: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/10549609_962770833815731_1593717949_n.jpg?ig_cache_key=MTIwNzExMzU2ODIyNjAzNDQyMA%3D%3D.2.l',
        topics: [
          'gaming'
        ],
        tags: [
          'COD',
          'umadbro'
        ]
      }
    ]
  },
  faves: {
    index: 0,
    data: [
      {
        list: {
          creator: {
            username: 'pewdiepie',
            avatar: '../../../images/pewdiepie.png'
          },
          collaborators: [
          ],
          name: 'Classic Horror Game text text',
          topics: [
            'gaming'
          ],
          tags: [
            'horror',
            'noooooo'
          ]
        },
        author: {
          avatar: 'http://ionicframework.com/img/ionic-logo-blog.png',
          username: 'ionic'
        },
        timeAgo: '9 hours ago',
        body: {
          message: '',
          site_semantic: 'amazon.com',
          uri: '',
          title_scraped: 'Amnesia: The Dark Descent',
          image_scraped: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Amnesia-The-Dark-Descent-Cover-Art.png/250px-Amnesia-The-Dark-Descent-Cover-Art.png'
        }
      }
    ]
  },
  selected: 'your lists',
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'FavoriteState/INCREMENT';
const SETFILTER = 'FavoriteState/SETFILTER';

// Action creators
export function increment(cards, index) {
  Actions.intro();
  return {type: INCREMENT, item: cards, payload: index};
}

export function setFilter(value) {
  return {type: SETFILTER, payload: value};
}

// Reducer
export default function FavoriteStateReducer(state = initialState, action = {}) {
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
