import {connect} from 'react-redux';
import SearchModal from './searchModal';

export default connect(
  state => {
    console.log('SEARCH RESULT DATA', state.toJS());
    return {
      users: state.getIn(['search', 'categories']).get('data').toJS()
    };
  }
)(SearchModal);
