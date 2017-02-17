import {connect} from 'react-redux';
import ProfileView from './ProfileView';


function findSubset(subSetType) {
  switch (subSetType) {
    case 'alerts':
      return ['follow', 'unfollow', 'invitation_accept', 'invitation_decline', 'comment', 'favez_like', 'new_user'];
    case 'invitations':
      return ['invitation_request'];
    default:
      return null;
  }
}

export default connect(
  state => {
    return {
      user: state.getIn(['profile', 'user', 'data']).toJS(),
      lists: state.getIn(['profile', 'lists']).get('data').toJS(),
      faves: state.getIn(['profile', 'faves']).get('data').toJS(),
      selected: state.getIn(['profile', 'selected']),
      loading: state.getIn(['profile', 'loading'])
    };
  }
)(ProfileView);
