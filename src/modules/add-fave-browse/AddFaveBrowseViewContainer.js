import {
  connect
} from 'react-redux';
import AddFaveBrowseView from './AddFaveBrowseView';

export default connect(
  state => {
    return {
      lists: state.getIn(['list', 'all']),
      browser: state.getIn(['ui', 'browser']).toJS(),
      // fave: state.getIn([''])
      // headerContextMenu: state.getIn(['feed', 'header'])
      // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      // loading: state.getIn(['feed', 'loading'])
    };
  }
)(AddFaveBrowseView);
