import {connect} from 'react-redux';
import FavoriteView from './FavoriteView';

export default connect(
  state => {
    return {
      lists: state.getIn(['favorite', 'lists']).get('data').toJS(),
      faves: state.getIn(['favorite', 'faves']).get('data').toJS(),
      selected: state.getIn(['favorite', 'selected']),
      loading: state.getIn(['search', 'loading'])
    };
  }
)(FavoriteView);
