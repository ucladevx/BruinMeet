const initialState = {
  showModal: false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_TOGGLE_MODAL':
      return { ...state, showModal: !state.showModal }
    default:
      return state
  }
}

export default login
