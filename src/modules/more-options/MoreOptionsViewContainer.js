import {
  connect
} from 'react-redux';
import MoreOptionsView from './MoreOptionsView';

export default connect(
  state => {
    return {
      options: state.getIn(['list', 'options']).toJS(),
      loading: state.getIn(['listShow', 'loading'])
    };
  }
)(MoreOptionsView);
