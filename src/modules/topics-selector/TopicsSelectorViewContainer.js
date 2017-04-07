import {connect} from 'react-redux';
import TopicsSelectorView from './TopicsSelectorView';

export default connect(
  state => {
    // console.log('==========', state.getIn(['search', 'categories']).get('data'));
    return {
      categories: state.getIn(['search', 'categories']).get('data').toJS(),
      loading: state.getIn(['search', 'loading']),
      options: state.getIn(['list', 'options']).toJS(),
    };
  }
)(TopicsSelectorView);
