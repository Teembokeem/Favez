import {
  connect
} from 'react-redux';
import ListShowView from './ListShowView';

export default connect(
  state => {
    return {
      list: state.getIn(['list', 'list']),
      // cards: state.getIn(['listShow', 'cards']).get('data').toJS(),
      loading: state.getIn(['listShow', 'loading']),
      selected: state.getIn(['listShow', 'selected']),
      similar: state.getIn(['listShow', 'similar']),
    }
  }
)(ListShowView);
