import api from '../config/api.js';
import { parseResMeetups } from '../config/parse.js';

export const setMeetups = (meetups) => ({
  type: 'MEETUPS_SET',
  meetups
})

const requestMeetups = () => ({
  type: 'MEETUPS_REQUEST'
})

const requestMeetupsFail = () => ({
  type: 'MEETUPS_REQUEST_ERROR'
})

export const setCurrentMeetup = (id) => ({
  type: 'MEETUPS_SET_CURRENT',
  id
})

export const resetCurrentMeetup = () => ({
  type: 'MEETUPS_RESET_CURRENT'
})

export const toggleModal = () => ({
  type: 'MEETUPS_TOGGLE_MODAL'
})

export const setEditing = (isEditing) => ({
  type: 'MEETUPS_SET_EDITING',
  isEditing
})

const requestEdit = () => ({
  type: 'MEETUPS_EDIT_REQUEST'
})

const requestEditFail = () => ({
  type: 'MEETUPS_EDIT_REQUEST_ERROR'
})

const requestEditSuccess = (meetup, newMeetupId) => ({
  type: 'MEETUPS_EDIT_SUCCESS',
  meetup,
  newMeetupId
})

export const getMeetups = () =>
  async (dispatch) => {
    dispatch(requestMeetups());
    const res = await api.getMeetups();
    if (res) {
      dispatch(setMeetups(parseResMeetups(res)));
    } else {
      dispatch(requestMeetupsFail());
    }
  }

export const editMeetup = (newMeetup) =>
  async (dispatch) => {
    dispatch(requestEdit());
    const res = await api.editMeetup(newMeetup);
    if (res && res.Result === 'True') {
      const newMeetupId = res.new_meetup_id;
      dispatch(requestEditSuccess(newMeetup, newMeetupId));
      dispatch(setEditing(false));
    } else {
      dispatch(requestEditFail());
    }
  }
