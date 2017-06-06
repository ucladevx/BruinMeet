import { connect } from 'react-redux';
import actions from '../actions';
import CreateMeetup from '../components/meetupcreate.js';

const mapDispatchToProps = (dispatch) => ({
  getMeetups: () => dispatch(actions.meetup.getMeetups()),
  toggleMeetupModal: () => dispatch(actions.meetup.toggleModal())
})

export default connect(null, mapDispatchToProps)(CreateMeetup)
