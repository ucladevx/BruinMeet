import { connect } from 'react-redux';
import React from 'react';
import actions from '../actions';
import Main from '../components/main.js';

const mapStateToProps = (state) => ({
  showLoginModal: state.login.showModal,
  areMeetupsLoading: state.meetup.loading,
  isMeetupsError: state.meetup.networkError,
  meetups: state.meetup.result,
})

const mapDispatchToProps = (dispatch) => ({
  toggleLoginModal: () => dispatch(actions.login.toggleModal()),
  getMeetups: () => dispatch(actions.meetup.getMeetups())
})

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMeetups();
  }

  render() {
    return (
      <Main {...this.props} />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
