import {
  connect
} from 'react-redux';
import FeedView from './FeedView';

export default connect(
  state => {
    return {
      cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      loading: state.getIn(['feed', 'loading'])
    }
  }
)(FeedView);