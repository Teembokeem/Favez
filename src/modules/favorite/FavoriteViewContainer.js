import {
  connect
} from 'react-redux';
import FavoriteView from './FavoriteView';

export default connect(
  state => {
    return {
      myLists: state.getIn(['list', 'myLists']),
      myCollabs: state.getIn(['list', 'collaborations']),
      tabs: state.getIn(['ui','favorite', 'tabs', 'set']).toJS(),
      selectedTab: state.getIn(['ui', 'favorite', 'tabs', 'selected']),
      user: state.getIn(['user', 'user']),
      // favez: state.getIn(['favorite', 'favez']).get('data').toJS(),
      // loading: state.getIn(['search', 'loading'])
    };
  }
)(FavoriteView);
