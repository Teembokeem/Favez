import {connect} from 'react-redux';
import ManageFeedModal from './ManageFeedModal';

export default connect(
  state => {
    console.log('Manage Feed  DATA', state.toJS());
    return {
      feed: state.getIn(['feedModal', 'feed']),
      loading: state.getIn(['feed', 'loading'])
    };
  }
)(ManageFeedModal);
