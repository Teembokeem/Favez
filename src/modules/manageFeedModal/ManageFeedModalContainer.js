import {connect} from 'react-redux';
import ManageFeedModal from './ManageFeedModal';

export default connect(
  state => {
    return {
      feed: state.getIn(['feedModal', 'feed']),
      loading: state.getIn(['feed', 'loading'])
    };
  }
)(ManageFeedModal);
