import _ from 'lodash';

const initialState = {
  result: [],
  networkError: false,
  loading: true,
  currentMeetupId: null,
  showModal: false,
  isEditing: false,
  editLoading: false,
  editNetworkError: false,
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
    case 'MEETUPS_TOGGLE_MODAL':
      return { ...state, showModal: !state.showModal }
    case 'MEETUPS_EDIT_SUCCESS':
      return { ...state,
        editLoading: false,
        currentMeetupId: action.newMeetupId,
        result: {
        ..._.omit(state.result, action.meetup.id),
        [action.newMeetupId]: {
          ...action.meetup,
          id: action.newMeetupId
        },
      }}
    case 'MEETUPS_EDIT_REQUEST':
      return { ...state, editLoading: true }
    case 'MEETUPS_EDIT_REQUEST_ERROR':
      return { ...state, editLoading: false, editNetworkError: true }
    case 'MEETUPS_SET_EDITING':
      return { ...state, isEditing: action.isEditing }
    default:
      return state
  }
}

export default meetup
