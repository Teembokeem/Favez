import {connect} from 'react-redux';
import SearchView from './SearchView';

export default connect(
  state => {
    return {
      categories: state.getIn(['search', 'categories']).get('data').toJS(),
      loading: state.getIn(['search', 'loading']),
      topic: state.getIn(['search', 'topic']),
      tag: state.getIn(['search', 'tag']),
      selected: state.getIn(['search', 'selected']),
      lists: state.getIn(['list', 'all']),
      listByTopics: state.getIn(['list', 'listByTopics']),
      listByTags: state.getIn(['list', 'listByTags']),
      subscribedLists: state.getIn(['list','subscribedLists']),
      userLoggedIn: state.getIn(['user','user'])
    };
  }
)(SearchView);
