import {connect} from 'react-redux';
import ProfileView from './ProfileView';
import {pickProfileImage} from '../../redux/user/userActions'

function grabComments(lists) {
  const aggregatedComments = [];
  lists.map((list) => {
    list.comments.map((comment) => {
      const commentCopy = comment;
      commentCopy.listSource = list.name;
      commentCopy.listPicture = list.picture;
      aggregatedComments.push(commentCopy);
    });
  });
  return aggregatedComments;
}
export default connect(state => ({
  loading: state.getIn(['user', 'loading']),
  tabs: state.getIn(['ui','profileView', 'tabs', 'set']),
  selectedTab: state.getIn(['ui','profileView', 'tabs', 'selected']),
  user: state.getIn(['user', 'user']),
  otherUser: state.getIn(['user', 'otherUser']),
  lists: state.getIn(['list', 'myLists']),
  comments: grabComments(state.getIn(['profile', 'lists']).get('data').toJS()),
  subscribedlists: state.getIn(['list', 'subscribedLists']),
  followingUsers: state.getIn(['user', 'followingUsers'])
}), dispatch => ({
  dispatch,
  onPickProfileImage: (onUploadingImage, onUploadedImage) => {
    dispatch(pickProfileImage(onUploadingImage, onUploadedImage))
  }
}))(ProfileView);
