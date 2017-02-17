import {connect} from 'react-redux';
import ProfileView from './ProfileView';


function findSubset(state, subSetType) {
  switch (subSetType) {
    case 'lists':
      return state.getIn(['profile', 'user', 'data']).toJS().username;
    default:
      return null;
  }
}

export default connect(
  state => {
    const filteredLists = state.getIn(['profile', 'lists']).get('data').toJS().filter((list) => {
      if (state.getIn(['profile', 'selected']) === 'lists') {
        return state.getIn(['profile', 'user', 'data']).toJS().username === list.creator.name;
      } else {
        return state.getIn(['profile', 'user', 'data']).toJS().username !== list.creator.name;
      }
    });
    return {
      user: state.getIn(['profile', 'user', 'data']).toJS(),
      lists: filteredLists,
      faves: state.getIn(['profile', 'faves']).get('data').toJS(),
      selected: state.getIn(['profile', 'selected']),
      loading: state.getIn(['profile', 'loading'])
    };
  }
)(ProfileView);
