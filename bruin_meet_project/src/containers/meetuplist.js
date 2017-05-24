import { connect } from 'react-redux';
import MeetupList from '../components/meetuplist.js';

const mapStateToProps = (state) => ({
  meetups: state.meetup.result,
})

export default connect(
  mapStateToProps
)(MeetupList)
