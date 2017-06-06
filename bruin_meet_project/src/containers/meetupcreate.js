import { connect } from 'react-redux';
import actions from '../actions';
import CreateMeetup from '../components/meetupcreate.js';

const mapDispatchToProps = (dispatch) => ({
  toggleMeetupModal: () => dispatch(actions.meetup.toggleModal())
})

export default connect(null, mapDispatchToProps)(CreateMeetup)
