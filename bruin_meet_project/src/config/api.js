import {create} from 'apisauce';
// import pg from 'pg';
// const BASE_URL = 'http://ec2-54-193-66-196.us-west-1.compute.amazonaws.com';
const BASE_URL = 'http://localhost:8000';
// const DATABASE_URL = 'postgres://bruinmeet:letsbruinmeet@localhost/bruin_meet';
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

    return res.data;
  }

  async logout() {
    return await this._client.post('/logout/');
  }

  async signup(info) {
    var body = 'email=' + encodeURIComponent(info.email) + '&password=' + encodeURIComponent(info.password);
    const res = await this._client.post('/signup/', body);

    if (res.problem) {
      console.error(res);
    }

    return res.data;
  }

  async create_meetup(info) {
    var body = 'title=' + encodeURIComponent(info.title) + '&description=' +
      encodeURIComponent(info.description) + '&timestamp=' +
      encodeURIComponent(info.timestamp) + '&location=' +
      encodeURIComponent(info.location) + '&maxim_cap=' +
      encodeURIComponent(info.maxim_cap) + '&type_event=' +
      encodeURIComponent(info.type) + '&tags=' +
      encodeURIComponent(info.tags);

    const res = await this._client.post('/create_meetup/', body, {
      headers: this._defaultHeaders
    });

    if (res.data == "True") {
      return true;
    }
    else {
      return false;
    }
  }

  async editMeetup(meetup) {
      var body = 'meetup_id=' + encodeURIComponent(meetup.id) + '&new_title=' +
        encodeURIComponent(meetup.title) + '&new_description=' +
        encodeURIComponent(meetup.description) + '&new_timestamp=' +
        encodeURIComponent(meetup.date) + '&new_location=' +
        encodeURIComponent(meetup.location) + '&new_maxim_cap=' +
        encodeURIComponent(meetup.maxLimit) + '&new_people=' +
        encodeURIComponent(meetup.curGoing) + '&num_stars=0' ;

      const res = await this._client.post('/edit_meetup/', body);

      if (res.problem) {
        console.error(res);
      }

      return res.data;
  }

  async getMeetups() {
    const res = await this._client.get('/get_meetups/');

    if (res.problem) {
      console.error(res);
    }

    return res.data;
  }

  async getCurrentUser() {
    const res = await this._client.get('/get_current_user');

    if (res.problem) {
      console.error(res);
      res.data = null;
    }

    return res.data;
  }

  // search(text) {
  //   pg.connect(DATABASE_URL, (err, client, done) => {
  //     done();
  //     if (err) {
  //       console.error("Error connecting to client while search: ", err);
  //       return;
  //     }
  //
  //     client.query("SELECT * FROM main.meetups ", (err, result) => {
  //       if (err) {
  //         console.error("Error querying database", err);
  //         return;
  //       }
  //
  //       console.log(result);
  //     });
  //   });
  // }i
}

export default new API()
