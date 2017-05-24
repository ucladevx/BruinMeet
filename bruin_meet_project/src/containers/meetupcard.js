import { connect } from 'react-redux';
import MeetupCard from '../components/meetupcard.js';
import actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  setCurrentMeetup: (id) => dispatch(actions.meetup.setCurrentMeetup(id))
})

export default connect(
  null,
  mapDispatchToProps
)(MeetupCard)
