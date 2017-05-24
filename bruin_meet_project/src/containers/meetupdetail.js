import { connect } from 'react-redux';
import MeetupDetail from '../components/meetupdetail.js';
import actions from '../actions';

const mapStateToProps = (state) => ({
  meetup: state.meetup.result[state.meetup.currentMeetupId]
})

const mapDispatchToProps = (dispatch) => ({
  resetCurrentMeetup: () => dispatch(actions.meetup.resetCurrentMeetup())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetupDetail)
