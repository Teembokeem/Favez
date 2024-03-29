import {connect} from 'react-redux';
import SearchModal from './searchModal';

export default connect(
  state => {
    return {
      query: state.getIn(['searchModal', 'query']),
      trendingUsers: state.getIn(['user', 'searchedUsers']),
      trendingFavez: state.getIn(['fave', 'trendingFavez']),
      trendingLists: state.getIn(['list', 'searchedLists']),
      loading: state.getIn(['searchModal', 'loading'])
    };
  }
)(SearchModal);
