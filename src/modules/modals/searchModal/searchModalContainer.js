import {connect} from 'react-redux';
import SearchModal from './searchModal';

export default connect(
  state => {
    console.log('SEARCH RESULT DATA', state.toJS());
    return {
      trendingUsers: state.getIn(['user', 'searchedUsers']),
      trendingFavez: state.getIn(['fave', 'trendingFavez']),
      trendingLists: state.getIn(['list', 'searchedLists'])
    };
  }
)(SearchModal);
