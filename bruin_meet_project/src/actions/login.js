import api from '../config/api.js';

export const toggleModal = () => ({
  type: 'LOGIN_TOGGLE_MODAL'
});

export const toggleSignup = () => ({
  type: 'LOGIN_TOGGLE_SIGNUP'
})

export const setCurrentUser = (user) => ({
  type: 'LOGIN_SET_CURRENT_USER',
  user
})

export const logout = () =>
  async (dispatch) => {
    const res = await api.logout();
    if (res.ok) {
      dispatch(setCurrentUser(null));
    }
  }

export const getCurrentUser = () =>
  async (dispatch) => {
    const user = await api.getCurrentUser();
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }
