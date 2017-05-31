import {create} from 'apisauce';
// const BASE_URL = 'http://ec2-54-193-66-196.us-west-1.compute.amazonaws.com';
const BASE_URL = 'http://localhost:8000';
class API {
  constructor() {
    var getCookie = function (name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
    }

    this._csrftoken = getCookie('csrftoken');
    this._client = create({
      baseURL: BASE_URL,
      headers: {
        'X-CSRFToken': this._csrftoken,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  async login(info) {
    var body = 'email=' + encodeURIComponent(info.email) + '&password=' + encodeURIComponent(info.password);
    const res = await this._client.post('/login/', body);

    if (res.problem) {
      console.error(res);
      return 'Network Failure';
    }

    return res.then(function (response) {
      if (response.data == 'True')
        return true;
      else
        return false;
    });
  }

  async logout() {
    return await this._client.post('/logout/');
  }

  async signup(info) {
    var body = 'email=' + encodeURIComponent(info.email) + '&password=' + encodeURIComponent(info.password);
    const res = await this._client.post('/signup/', body);

    if (res.problem) {
      console.error(res);
      return 'Network Failure';
    }

    return res.then(function (response) {
      if (response.Result == 'Failure')
        return response.Reason;
      else
        return 'Success';
    });
  }

  async create_meetup(info) {
    var body = 'title=' + encodeURIComponent(info.title) + '&description=' +
      encodeURIComponent(info.description) + '&timestamp=' +
      encodeURIComponent(info.timestamp) + '&location=' +
      encodeURIComponent(info.location) + '&maxim_cap=' +
      encodeURIComponent(info.maxim_cap) + '&people=' +
      encodeURIComponent(info.people);
    const res = await this._client.post('/create_meetup/', body, {
      headers: this._defaultHeaders
    });

    if (res.problem) {
      console.error(res);
    }

    return res;
  }

  async getNonUserMeetups() {
    const res = await this._client.post('/get_meetups/');

    if (res.problem) {
      console.error(res);
    }

    return res.data.nonuser_meetups;
  }

  async getCurrentUser() {
    const res = await this._client.get('/get_current_user');

    if (res.problem) {
      console.error(res);
      res.data = null;
    }

    return res.data;
  }
}

export default new API()
