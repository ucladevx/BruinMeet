import { connect } from 'react-redux';
import actions from '../actions';
import Main from '../components/main.js';

const mapStateToProps = (state) => ({
  showLoginModal: state.login.showModal
})

const mapDispatchToProps = (dispatch) => ({
  toggleLoginModal: () => dispatch(actions.login.toggleModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
