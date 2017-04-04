import {connect} from 'react-redux';
import TopicsSelectorView from './TopicsSelectorView';

export default connect(
  state => {
    // console.log('==========', state.getIn(['search', 'categories']).get('data'));
    return {
      categories: state.getIn(['search', 'categories']).get('data').toJS(),
      loading: state.getIn(['search', 'loading']),
      topic: state.getIn(['search', 'topic']),
      selected: state.getIn(['search', 'selected']),
      lists: state.getIn(['list', 'all'])
    };
  }
)(TopicsSelectorView);
