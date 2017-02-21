import {connect} from 'react-redux';
import SearchView from './SearchView';

export default connect(
  state => {
    // console.log('==========', state.getIn(['search', 'categories']).get('data'));
    return {
      categories: state.getIn(['search', 'categories']).get('data').toJS(),
      loading: state.getIn(['search', 'loading'])
    };
  }
)(SearchView);
