const initialState = {
  result: [],
  networkError: false,
  loading: true,
  currentMeetupId: null
}

const meetup = (state = initialState, action) => {
  switch(action.type) {
    case 'MEETUPS_SET':
      return { ...state, result: action.meetups, loading: false }
    case 'MEETUPS_REQUEST':
      return { ...state, loading: true }
    case 'MEETUPS_REQUEST_ERROR':
      return { ...state, networkError: true, loading: false }
    case 'MEETUPS_SET_CURRENT':
      return { ...state, currentMeetupId: action.id }
    case 'MEETUPS_RESET_CURRENT':
      return { ...state, currentMeetupId: null }
    default:
      return state
  }
}

export default meetup
