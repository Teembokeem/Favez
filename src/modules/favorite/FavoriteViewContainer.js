import {connect} from 'react-redux';
import FavoriteView from './FavoriteView';
export default connect(
  state => {
    const filteredLists = state.getIn(['favorite', 'lists']).get('data').toJS().filter((list) => {
      if (state.getIn(['favorite', 'selected']) === 'your lists') {
        return state.getIn(['favorite', 'user', 'data']).toJS().username === list.creator.name;
      } else {
        return state.getIn(['favorite', 'user', 'data']).toJS().username !== list.creator.name;
      }
    });
    return {
      lists: filteredLists,
      user: state.getIn(['profile', 'user', 'data']).toJS(),
      favez: state.getIn(['favorite', 'favez']).get('data').toJS(),
      selected: state.getIn(['favorite', 'selected']),
      loading: state.getIn(['search', 'loading'])
    };
  }
)(FavoriteView);
