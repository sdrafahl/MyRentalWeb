import { connect } from 'react-redux';
import navBarComponent from '../../components/navbar';
import Actions from '../../reducers/actions';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  setLoggedIn: () => {
    const action = {
      type: Actions.login.isLoggedIn,
    };

    dispatch(action);
  },
  closeLoginModal: () => {
    const action = {
      type: Actions.login.closeLoginModal,
    };

    dispatch(action);
  },
  closeSignupModal: () => {
    const action = {
      type: Actions.login.closeSignupModal,
    };

    dispatch(action);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(navBarComponent);
