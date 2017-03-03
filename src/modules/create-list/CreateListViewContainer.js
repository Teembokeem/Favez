import {
  connect
} from 'react-redux';
import CreateListView from './CreateListView';

export default connect(
  state => {
    console.log(state)
    return {
      lists: state.getIn(['list', 'all']),
      headerMore: state.getIn(['feed', 'header', 'more'])
      
      // headerContextMenu: state.getIn(['feed', 'header'])
      // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      // loading: state.getIn(['feed', 'loading'])
    };
  }
)(CreateListView);
