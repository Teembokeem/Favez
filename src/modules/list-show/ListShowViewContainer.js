import {
  connect
} from 'react-redux';
import ListShowView from './ListShowView';

export default connect(
  state => {
    return {
      list: state.getIn(['list', 'current']),
      // cards: state.getIn(['listShow', 'cards']).get('data').toJS(),
      tabs: state.getIn(['ui', 'listShow', 'tabs', 'set']).toJS(),
      selectedTab: state.getIn(['ui', 'listShow', 'tabs', 'selected']),
      loading: state.getIn(['listShow', 'loading']),
      selected: state.getIn(['listShow', 'selected']),
      similar: state.getIn(['listShow', 'similar']),
    }
  }
)(ListShowView);
