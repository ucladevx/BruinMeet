import { connect } from 'react-redux';
import MeetupDetail from '../components/meetupdetail.js';
import actions from '../actions';

const mapStateToProps = (state) => {
  const meetup = state.meetup.result[state.meetup.currentMeetupId];
  return {
    meetup,
    isEditable: state.login.currentUser && state.login.currentUser.id === meetup.authorId,
    editLoading: state.meetup.editLoading,
    isEditing: state.meetup.isEditing,
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetCurrentMeetup: () => dispatch(actions.meetup.resetCurrentMeetup()),
  editMeetup: (meetup) => dispatch(actions.meetup.editMeetup(meetup)),
  setEditing: (isEditing) => dispatch(actions.meetup.setEditing(isEditing))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetupDetail)
