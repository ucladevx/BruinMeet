const initialState = {
  showModal: false,
  showSignup: false,
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_TOGGLE_MODAL':
      return { ...state, showModal: !state.showModal }
    case 'LOGIN_TOGGLE_SIGNUP':
      return { ...state, showSignup: !state.showSignup }
    default:
      return state
  }
}

export default login
