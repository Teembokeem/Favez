import {fromJS} from 'immutable';
import {loop, Effects} from 'redux-loop';
import { Actions } from 'react-native-router-flux';

// Initial state
const initialState = fromJS({
  user: {
    index: 0,
    data: {
      name: {
        first: 'Luigi',
        last: 'M'
      },
      username: 'greenmario',
      followers: [
        {
          ref: 'follower_1'
        },
        {
          ref: 'follower_2'
        },
        {
          ref: 'follower_3'
        },
        {
          ref: 'follower_4'
        },
        {
          ref: 'follower_5'
        },
        {
          ref: 'follower_6'
        },
        {
          ref: 'follower_7'
        },
        {
          ref: 'follower_8'
        },
        {
          ref: 'follower_9'
        },
        {
          ref: 'follower_10'
        }
      ],
      following: [
        {
          ref: 'following_1'
        },
        {
          ref: 'following_2'
        },
        {
          ref: 'following_3'
        },
        {
          ref: 'following_4'
        },
        {
          ref: 'following_5'
        },
        {
          ref: 'following_6'
        },
        {
          ref: 'following_7'
        },
        {
          ref: 'following_8'
        },
        {
          ref: 'following_9'
        },
        {
          ref: 'following_10'
        }
      ],
      caption: 'It\s a-me, Luigi <3',
      avatar: 'https://s-media-cache-ak0.pinimg.com/736x/77/0f/67/770f67e11fdcbf0a31bed432420ceda0.jpg'
    }
  },
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
  favez: {
    index: 0,
    data: [{
      value: 0,
      list: {
        creator: {
          username: 'pewdiepie',
          avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
        },
        collaborators: [
        ],
        name: 'Archeology Stuff',
        picture: 'https://firstfloorcherry.files.wordpress.com/2016/11/vsco-photo-4.jpg?w=636&h=424&crop=1',
        topics: [
          'gaming'
        ],
        tags: [
          'horror',
          'noooooo'
        ]
      },
      author: {
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
        username: 'react'
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
      list: {
        creator: {
          username: 'pewdiepie',
          avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
        },
        collaborators: [
        ],
        name: 'Classic Horror Game text text',
        picture: 'https://lh3.googleusercontent.com/-45wPZp5uAdxXj6JAoFgfoVkVRxrQ8ugxUCQjknRdUozgMSCIxQG-Wn6nK5RBbfE7Q=h900',
        topics: [
          'gaming'
        ],
        tags: [
          'horror',
          'noooooo'
        ]
      },
      author: {
        username: 'pewdiepie',
        avatar: 'https://pmcvariety.files.wordpress.com/2016/01/pewdiepie-revelmode.jpg'
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
