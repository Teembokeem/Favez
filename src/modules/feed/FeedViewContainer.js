import {
  connect
} from 'react-redux';
import FeedView from './FeedView';

export default connect(
  state => {
    return {
      lists: state.getIn(['feed', 'lists']),
      // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      loading: state.getIn(['feed', 'loading'])
    };
  }
)(FeedView);
