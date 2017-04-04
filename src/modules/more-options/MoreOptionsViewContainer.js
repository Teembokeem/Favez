import {
  connect
} from 'react-redux';
import MoreOptionsView from './MoreOptionsView';

export default connect(
  state => {
    return {
      tabs: state.getIn(['ui', 'listShow', 'tabs', 'set']).toJS(),
      selectedTab: state.getIn(['ui', 'listShow', 'tabs', 'selected']),
      loading: state.getIn(['listShow', 'loading'])
    };
  }
)(MoreOptionsView);
