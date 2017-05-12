import {create} from 'apisauce';
const BASE_URL = 'http://ec2-54-193-66-196.us-west-1.compute.amazonaws.com';

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
        'X-CSRFToken': this._csrftoken
      }
    });
    this._defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  }

  async login(info) {
    var body = 'email=' + encodeURIComponent(info.email) + '&password=' + encodeURIComponent(info.password);
    const res = await this._client.post('/login/', body, {
      headers: this._defaultHeaders
    });

    if (res.problem) {
      console.error(res);
    }

    return res;
  }

  signup(info) {
    var body = 'email=' + encodeURIComponent(info.email) + '&password=' + encodeURIComponent(info.password);
    const res = this._client.post('/signup/', body, {
      headers: this._defaultHeaders
    });

    if (res.problem) {
      console.error(res);
    }

    return res.then(function (response) {
      if (response.Result == 'Failure')
        return response.Reason;
      else
        return 'Success';
    });
  }
}

export default new API()
