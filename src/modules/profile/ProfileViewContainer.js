import {connect} from 'react-redux';
import ProfileView from './ProfileView';

export default connect(
  state => {
    const filteredLists = state.getIn(['profile', 'lists']).get('data').toJS().filter((list) => {
      if (state.getIn(['profile', 'selected']) === 'lists') {
        return state.getIn(['profile', 'user', 'data']).toJS().username === list.creator.name;
      } else if (state.getIn(['profile', 'selected']) === 'collabs') {
        return state.getIn(['profile', 'user', 'data']).toJS().username !== list.creator.name && list.collaborators.indexOf(state.getIn(['profile', 'user', 'data']).toJS().username) > -1;
      } else {
        return state.getIn(['profile', 'user', 'data']).toJS().username !== list.creator.name && list.collaborators.indexOf(state.getIn(['profile', 'user', 'data']).toJS().username) === -1;
      }
    });
    return {
      user: state.getIn(['profile', 'user', 'data']).toJS(),
      lists: filteredLists,
      favez: state.getIn(['profile', 'favez']).get('data').toJS(),
      selected: state.getIn(['profile', 'selected']),
      loading: state.getIn(['profile', 'loading'])
    };
  }
)(ProfileView);
