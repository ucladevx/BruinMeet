import { connect } from 'react-redux';
import actions from '../actions';
import Login from '../components/login.js';

const mapDispatchToProps = (dispatch) => ({
  toggleLoginModal: () => dispatch(actions.login.toggleModal())
})

export default connect(
  null,
  mapDispatchToProps
)(Login)
