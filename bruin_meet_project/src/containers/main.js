import { connect } from 'react-redux';
import React from 'react';
import actions from '../actions';
import Main from '../components/main.js';

const mapStateToProps = (state) => ({
  showLoginModal: state.login.showModal,
  showCreateMeetup: state.meetup.showModal,
  areMeetupsLoading: state.meetup.loading,
  isMeetupsError: state.meetup.networkError,
  meetups: state.meetup.result,
  currentMeetupId: state.meetup.currentMeetupId
})

const mapDispatchToProps = (dispatch) => ({
  getMeetups: () => dispatch(actions.meetup.getMeetups()),
  getCurrentUser: () => dispatch(actions.login.getCurrentUser())
})

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props.getCurrentUser();
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
