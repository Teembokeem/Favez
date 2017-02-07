import {connect} from 'react-redux';
import FeedView from './FeedView';

export default connect(
    state => ({
    cards: state.getIn(['feed', 'cards']),
    loading: state.getIn(['feed', 'loading'])
  })
)(FeedView);
