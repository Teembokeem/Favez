import {
  connect
} from 'react-redux';
import ListShowView from './ListShowView';

export default connect(
  state => {
    return {
      list: state.getIn(['list', 'current']),
      // cards: state.getIn(['listShow', 'cards']).get('data').toJS(),
      loading: state.getIn(['listShow', 'loading'])
    }
  }
)(ListShowView);
