const initialState = {
  result: [],
  networkError: false,
  loading: true,
}

const meetup = (state = initialState, action) => {
  switch(action.type) {
    case 'MEETUPS_SET':
      return { ...state, result: action.meetups, loading: false }
    case 'MEETUPS_REQUEST':
      return { ...state, loading: true }
    case 'MEETUPS_REQUEST_ERROR':
      return { ...state, networkError: true, loading: false }
    default:
      return state
  }
}

export default meetup
