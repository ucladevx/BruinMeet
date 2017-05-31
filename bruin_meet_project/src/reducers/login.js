const initialState = {
  showModal: false,
  showSignup: false,
  currentUser: null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_TOGGLE_MODAL':
      return { ...state, showModal: !state.showModal }
    case 'LOGIN_TOGGLE_SIGNUP':
      return { ...state, showSignup: !state.showSignup }
    case 'LOGIN_SET_CURRENT_USER':
      return { ...state, currentUser: action.user }
    default:
      return state
  }
}

export default login
