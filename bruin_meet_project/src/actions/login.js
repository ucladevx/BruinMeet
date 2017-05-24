export const toggleModal = () => ({
  type: 'LOGIN_TOGGLE_MODAL'
});

export const toggleSignup = () => ({
  type: 'LOGIN_TOGGLE_SIGNUP'
})

export const userLogin = (info) => ({
  type: 'LOGIN_USER',
  info
})
