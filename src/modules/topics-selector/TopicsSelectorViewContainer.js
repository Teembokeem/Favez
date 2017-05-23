import {connect} from 'react-redux';
import TopicsSelectorView from './TopicsSelectorView';

export default connect(
  state => {
    return {
      categories: state.getIn(['search', 'categories']).get('data').toJS(),
      loading: state.getIn(['search', 'loading']),
      options: state.getIn(['list', 'options']),
    };
  }
)(TopicsSelectorView);
