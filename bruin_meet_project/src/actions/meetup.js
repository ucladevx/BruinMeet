import api from '../config/api.js';
import { parseMeetups } from '../config/parse.js';

export const setMeetups = (meetups) => ({
  type: 'MEETUPS_SET',
  meetups
})

export const requestMeetups = () => ({
  type: 'MEETUPS_REQUEST'
})

export const requestMeetupsFail = () => ({
  type: 'MEETUPS_REQUEST_ERROR'
})

export const setCurrentMeetup = (id) => ({
  type: 'MEETUPS_SET_CURRENT',
  id
})

export const resetCurrentMeetup = () => ({
  type: 'MEETUPS_RESET_CURRENT'
})

export const getMeetups = () =>
  async (dispatch) => {
    dispatch(requestMeetups());
    const res = await api.getNonUserMeetups();
    if (res) {
      dispatch(setMeetups(parseMeetups(res)));
    } else {
      dispatch(requestMeetupsFail());
    }
  }
