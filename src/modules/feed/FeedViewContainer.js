import {
  connect
} from 'react-redux';
import FeedView from './FeedView';

export default connect(
  state => {
    // console.log(state);
    return {
      lists: state.getIn(['list', 'all']),
      headerContextMenu: state.getIn(['ui', 'feed', 'header', 'contextMenu']).toJS()
      // headerContextMenu: state.getIn(['feed', 'header'])
      // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      // loading: state.getIn(['feed', 'loading'])
    };
  }
)(FeedView);
