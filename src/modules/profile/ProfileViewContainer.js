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
  lists: state.getIn(['list', 'myLists']),
  comments: grabComments(state.getIn(['profile', 'lists']).get('data').toJS()),
  subscribedLists: state.getIn(['list', 'subscribedLists']),
  followingUsers: state.getIn(['user', 'followingUsers']),
  userDetail: state.getIn(['user', 'userDetail']),
  lastFetchedUserId:state.getIn(['user', 'lastFetchedUserId']),
  state: state
}), dispatch => ({
  dispatch,
  onPickProfileImage: (onUploadingImage, onUploadedImage) => {
    dispatch(pickProfileImage(onUploadingImage, onUploadedImage))
  }
}))(ProfileView);
