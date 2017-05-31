import { connect } from 'react-redux';
import actions from '../actions';
import Login from '../components/login.js';

const mapStateToProps = (state) => ({
  showSignup: state.login.showSignup
})

const mapDispatchToProps = (dispatch) => ({
  toggleLoginModal: () => dispatch(actions.login.toggleModal()),
  toggleSignup: () => dispatch(actions.login.toggleSignup()),
  setCurrentUser: (user) => dispatch(actions.login.setCurrentUser(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
