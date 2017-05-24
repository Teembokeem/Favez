import {
    connect
} from 'react-redux';
import LoginView from './LoginView';
export default connect(state => {
    return {
        user: state.getIn(['user', 'user']),
        loading: state.getIn(['user', 'loading']),
        loginAttempt: state.getIn(['user', 'loginAttempt']),
        errorValue: state.getIn(['user','error']),
    }
})(LoginView);
