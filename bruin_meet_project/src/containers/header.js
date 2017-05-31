import { connect } from 'react-redux';
import actions from '../actions'
import Header from '../components/header.js';

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.login.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  toggleLoginModal: () => dispatch(actions.login.toggleModal()),
  toggleMeetupModal: () => dispatch(actions.meetup.toggleModal()),
  logout: () => dispatch(actions.login.logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
